import Footer from 'components/footer';
import Layout from '../layouts/Main';
import Subscribe from 'components/subscribe';
import Head from 'next/head';

const Services = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Our Services | Pratulya Fashions | Apparel Manufacturing Solutions</title>
          <meta name="description" content="Discover Pratulya Fashions' wide range of apparel manufacturing solutions, including bulk production of T-shirts, corporate uniforms, and customized garments. We ensure high-quality output with timely delivery for businesses of all sizes." />
        </Head>
        <section className='featured'>
          <h3 className='text-center text-4xl font-bold pb-4'>Our Services</h3>
          <div style={{ backgroundImage: 'url(/images/tshirt-manufacturing.webp)' }} className="featured-item featured-item-large my-2">
            <div className="featured-item__content">
              <h3>T-Shirt Manufacturing</h3>
              <p className='text-white w-[300px] leading-5 pb-4 xl:w-[500px]'>We offer bulk T-shirt production with options to customize fabrics, designs, and styles. From plain tees to logo-branded corporate T-shirts, our range is suitable for every need.</p>
            </div>
          </div>

          <div style={{ backgroundImage: 'url(/images/shirt-manufacturing.webp)', backgroundPosition: "center" }} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>Shirt Manufacturing</h3>
              <p className='text-white w-[300px] leading-5 pb-4 xl:w-[500px]'>Our shirt collection covers formal, semi-formal, and casual styles. Ideal for retailers and companies looking for custom bulk orders or corporate uniforms. </p>
            </div>
          </div>
        </section>
        <Subscribe />
        <Footer />
      </Layout>
    </>
  )
}

export default Services