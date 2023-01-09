import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import "@/styles/globals.css";
import Image from "next/image";
import twitter from "../public/twitter.svg";
import github from "../public/github.svg";

function MyApp({ Component, pageProps }: AppProps) {
  const GITHUB_LINK = "https://github.com/pablozuta";
  const TWITTER_LINK = "https://github.com/pablozuta";
  const widthLogo = "40px";
  const heightLogo = "40px";
  return (
    <div className="container">
      <Head>
        <title>Blog</title>
      </Head>
      <nav className="barra-navegacion">
        <h3 className="home blog-title">
          {" "}
          <Link href="/">BLOG</Link>
        </h3>

        <div className="barra-navegacion-iconos">
          <Link href={GITHUB_LINK} passHref>
            <Image
              className="imagen-logo"
              src={github}
              alt="logo of github"
              width={widthLogo}
              height={heightLogo}
            ></Image>
          </Link>

          <Link href={TWITTER_LINK} passHref>
            <Image
              className="imagen-logo"
              src={twitter}
              alt="icono de twitter"
              width={widthLogo}
              height={heightLogo}
            ></Image>
          </Link>
        </div>
      </nav>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
