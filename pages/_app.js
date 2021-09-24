import { Provider } from 'next-auth/client';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}
