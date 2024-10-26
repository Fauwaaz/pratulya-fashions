import Footer from 'components/footer';
import Layout from '../layouts/Main';
import Subscribe from 'components/subscribe';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>About Us | Pratulya Fashions - Apparel Manufacturing with Precision & Passion</title>
          <meta name="description" content="Explore Pratulya Fashions, a top apparel manufacturing subcontractor in Mumbai, offering bulk production of T-shirts, shirts, and customized corporate apparel." />
        </Head>
        <section className='py-4'>
          <div className='container'>
            <h1 className='text-center py-4 text-xl'>About Us</h1>

            <div className='py-4'>
              <h2 className='text-2xl font-bold'>Pratulya Fashions: Crafting Apparel with Precision and Passion</h2>
              <p className='leading-6 py-2'>At Pratulya Fashions, we believe that clothing is more than just fabric—it's a statement of identity and quality. As a leading apparel manufacturing subcontractor based in Mumbai, India, we specialize in bulk production of T-shirts, shirts, and customized corporate apparel for diverse clients. From startups and fashion labels to corporate businesses, our mission is to support every client's growth by delivering high-quality garments aligned with their brand values.
              </p>
            </div>

            <div className='py-4'>
              <h2 className='text-2xl font-bold'>Who We Are</h2>
              <p className='leading-6 py-2'>Founded with the goal of redefining manufacturing excellence, Pratulya Fashions brings together years of experience in the apparel industry and cutting-edge production methods. We operate as a B2B apparel manufacturing partner for brands and businesses, emphasizing collaboration, customization, and high-volume capabilities.
              </p>
            </div>
          </div>
        </section>
        <Subscribe />
        <Footer />
      </Layout>
    </>
  )
}

export default About