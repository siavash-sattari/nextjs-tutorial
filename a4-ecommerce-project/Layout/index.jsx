import Head from 'next/head';
import Link from 'next/link';
import { useContext } from 'react';
import { Store } from '../context/Cart';
import styles from './style.module.scss';

function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;

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
              <Link href='/cart'>
                Cart
                {cart.cartItems.length > 0 && <span className={styles.badge}>{cart.cartItems.reduce((a, c) => a + c.qty, 0)}</span>}
              </Link>
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
