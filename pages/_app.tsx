import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Head>
        <title>Blog</title>
      </Head>
      <nav className="blog-title">
        <h3 className="home"> <Link href="/">HOME</Link></h3>
        
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
