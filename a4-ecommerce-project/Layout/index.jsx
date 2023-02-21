import Head from 'next/head';
import Link from 'next/link';
import styles from './style.module.scss';

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{`shopping - ${title}`}</title>
      </Head>
      <div className={styles.wrapper}>
        <header>
          <nav>
            <Link href='/'>Shopping</Link>
            <div>
              <Link href='/cart'>Cart</Link>
              <Link href='/login'>Login</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer>Footer</footer>
      </div>
    </>
  );
}

export default Layout;
