import Head from "next/head";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>emcfarlane</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="relative flex flex-col items-center justify-center flex-grow py-20">
        <section className="flex flex-col w-full px-4 mt-8 text-lg sm:px-6 lg:px-8 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <h1 className="title">About</h1>

          <p>
            Leces utem es et apient quo ea pro mi, aborro vel endia niet quatis
            mo- lutem sequatium verio to blatatur, sae dolorume dolest alis
            mosaepedis arum voleniae nis accab is non nis eiciasp icimaio. Ut is
            atinient modi- ta doluptatur, nest estiume nisqui ut maio te
            offictore quas magnihil max- ime et officia sequi comnisc imolen-
            dae. Neque cus, sitis ipsaectate latia susantur?
          </p>
        </section>
      </main>

      <Footer />

      <style jsx>{``}</style>
    </div>
  );
}
