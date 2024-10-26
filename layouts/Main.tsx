import Head from 'next/head';
import Header from 'components/header';
import { useRouter } from 'next/router';

type LayoutType = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export default ({ children, title = 'Pratulya Fashions | Leading Apparel Manufacturing Subcontractor in Mumbai, India', description = "Pratulya Fashions specializes in bulk manufacturing of premium T-shirts, shirts, and corporate uniforms. As a subcontractor for apparel manufacturing in Mumbai, we deliver high-quality, customized clothing solutions for businesses, retailers, and corporate clients across India." }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="app-main">
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