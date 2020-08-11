import Head from 'next/head';
import Nav from '../nav';

const title = 'Theater Adn Ceiba App';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Learn how to build a personal website using Next.js' />
        <meta name='og:title' content={title} />
        <title>{title}</title>
      </Head>
      <Nav></Nav>
      <main>{children}</main>
    </div>
  );
}
