import { StoreProvider } from '../context/Cart';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div className='bg-gray-100'>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </div>
  );
}
