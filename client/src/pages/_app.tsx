/** @format */

import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { wrapper } from '@/redux/store';

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}
