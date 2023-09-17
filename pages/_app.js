import '../styles/globals.css';
import '../components/Home'

import Head from 'next/head';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import user from '../reducers/user';
import tweet from '../reducers/tweet';
import isLiked from '../reducers/isLiked';

const store = configureStore({
  reducer: {user, tweet, isLiked},
 });

function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </>
    </Provider>
  );
}

export default App;
