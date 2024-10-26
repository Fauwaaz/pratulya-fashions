import React, { Fragment } from 'react';
import Router from 'next/router';

import type { AppProps } from 'next/app';

import "../styles/globals.css"; 
import 'rc-slider/assets/index.css';
import '../assets/css/styles.scss';

import * as gtag from './../utils/gtag';

const isProduction = process.env.NODE_ENV === 'production';

if(isProduction) {
  Router.events.on('routeChangeComplete', (url: string) => gtag.pageview(url));
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Component {...pageProps} />
  </Fragment>
);

export default MyApp;