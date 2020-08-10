import Head from 'next/head';
import Nav from '../nav';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Learn how to build a personal website using Next.js' />
        <meta name='og:title' content='Theater Adn Ceiba App' />
      </Head>
      <Nav></Nav>
      <main>{children}</main>
    </div>
  );
}
