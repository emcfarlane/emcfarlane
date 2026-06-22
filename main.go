package main

import (
	"context"
	"embed"
	"flag"
	"io/fs"
	"log/slog"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"
)

const publicDir = "public"

var (
	devModeFlag = flag.Bool("dev", false, "enable developer mode (reload templates on each page load, serve non-minified JS/CSS, etc.)")
	addrFlag    = flag.String("addr", "localhost:8080", "address for the server")

	//go:embed public/*
	embedPublicFS embed.FS
)

func getPublicFS() fs.FS {
	if *devModeFlag {
		return os.DirFS(publicDir)
	}
	staticFS, err := fs.Sub(embedPublicFS, publicDir)
	if err != nil {
		panic(err)
	}
	return staticFS
}

func main() {
	flag.Parse()

	mux := http.NewServeMux()
	mux.Handle("/", http.FileServer(http.FS(getPublicFS())))

	server := &http.Server{
		Addr:    *addrFlag,
		Handler: mux,
	}
	go func() {
		if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			slog.Error("server failed", slog.Any("error", err))
			os.Exit(1)
		}
	}()
	slog.Info("server listening", slog.String("addr", *addrFlag))

	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()
	<-ctx.Done()

	slog.Info("received shutdown signal, shutting down.")
	shutdownCtx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	if err := server.Shutdown(shutdownCtx); err != nil {
		slog.Error("shutdown failed", slog.Any("error", err))
	}
	slog.Info("server shut down gracefully.")
}
