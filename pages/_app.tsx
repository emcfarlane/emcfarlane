import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { MDXProvider } from "@mdx-js/react";

const components = {
  h1: (props) => (
    <h1
      className="sticky top-0 py-4 text-2xl bg-white sm:text-4xl"
      {...props}
    />
  ),
  h2: (props) => <h2 className="py-4 text-xl sm:text-2xl" {...props} />,
};

///* Monospace stack */
function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
      <style jsx global>{`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        html,
        body {
          padding: 0;
          margin: 0;
          //font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          //  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          //  sans-serif;
          font-family: Cambria, "Hoefler Text", Utopia, "Liberation Serif",
            "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif;
        }

        code {
          font-family: Consolas, "Andale Mono WT", "Andale Mono",
            "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono",
            "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L",
            Monaco, "Courier New", Courier, monospace;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </MDXProvider>
  );
}

export default App;
