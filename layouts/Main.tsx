import Head from 'next/head';
import Header from 'components/header';
import { useRouter } from 'next/router';

import localFont from "next/font/local";

type LayoutType = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const poppins = localFont({
  src: [
    {
      path: "../assets/css/fonts/libre-baskerville-700.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/css/fonts/libre-baskerville-regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-libre",
});

export default ({ children, title = 'Pratulya Fashions | Leading Apparel Manufacturing Subcontractor in Mumbai, India', description = "Pratulya Fashions specializes in bulk manufacturing of premium T-shirts, shirts, and corporate uniforms. As a subcontractor for apparel manufacturing in Mumbai, we deliver high-quality, customized clothing solutions for businesses, retailers, and corporate clients across India." }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className={`${poppins.variable} antialiased app-main`}>
      <Head>
        <title>{ title }</title>
        <meta name='description' content={ description }/>
      </Head>

      <Header />
      <main className={(pathname !== '/' ? 'main-page' : '')}>
        { children }
      </main>
    </div>
  )
}