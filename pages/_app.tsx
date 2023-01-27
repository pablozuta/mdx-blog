import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import "@/styles/globals.css";
import Image from "next/image";
import twitter from "../public/twitter.svg";
import github from "../public/github.svg";

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <div className="container">
      <Head>
        <title>Blog && Notes</title>
      </Head>
      <nav className="barra-navegacion">
        <h1 className="home blog-title">
         
          <Link href="/">BLOG && NOTES</Link>
        </h1>

      
      </nav>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
