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
              <h3 className='text-2xl font-bold'>Who We Are</h3>
              <p className='leading-6 py-2'>Founded with the goal of redefining manufacturing excellence, Pratulya Fashions brings together years of experience in the apparel industry and cutting-edge production methods. We operate as a B2B apparel manufacturing partner for brands and businesses, emphasizing collaboration, customization, and high-volume capabilities.
              </p>
            </div>

            <div className='py-4'>
              <h3 className='text-2xl font-bold'>Our Values</h3>
              <ul className='flex flex-col gap-3 py-3 xl:flex-row text-center'>
                <li className='border border-solid border-black/50 p-4 rounded-lg'>
                  <strong className='text-lg text-black/75'>Quality First:</strong>
                  <p className='leading-5 mt-2'>Every garment we produce undergoes stringent quality checks to ensure it meets the highest industry standards.</p>
                </li>
                <li className='border border-solid border-black/50 p-4 rounded-lg'>
                  <strong className='text-lg text-black/75'>Customization at Scale:</strong>
                  <p className='leading-5 mt-2'>Whether it's corporate uniforms or custom-designed T-shirts, we tailor every order to meet the client's specific needs</p>
                </li>
                <li className='border border-solid border-black/50 p-4 rounded-lg'>
                  <strong className='text-lg text-black/75'>Sustainable Practices:</strong>
                  <p className='leading-5 mt-2'>We believe in ethical manufacturing—choosing sustainable materials wherever possible and ensuring fair labor practices in our supply chain.</p>
                </li>
                <li className='border border-solid border-black/50 p-4 rounded-lg'>
                  <strong className='text-lg text-black/75'>On-Time Delivery:</strong>
                  <p className='leading-5 mt-2'>With a well-organized production system, we ensure every order is delivered within the promised timeframe.</p>
                </li>
              </ul>
            </div>

            <div className='py-4'>
              <h3 className='text-2xl font-bold pb-4'>Our Vision</h3>
              <p className='leading-6 text-black/75'>Our vision is to become the go-to partner for apparel manufacturing in India, offering end-to-end solutions for businesses across industries. By fostering long-term partnerships with our clients, we aim to contribute to their success through reliable and innovative garment solutions.</p>

              <h3 className='text-2xl font-bold py-4'>What Makes Us Different?</h3>              

              <ul className='grid text-center xl:grid-cols-3 gap-3'>
                <li className='border border-solid border-black/50 p-4 rounded-lg'>
                  <strong className='text-lg text-black/75'>Scalable Production</strong>
                  <p className='leading-5 mt-2'>We manage bulk manufacturing without compromising on quality.</p>
                </li>
                <li className='border border-solid border-black/50 p-4 rounded-lg'>
                  <strong className='text-lg text-black/75'>Flexible Solutions</strong>
                  <p className='leading-5 mt-2'> From one-off custom projects to large-scale corporate orders, we offer a variety of manufacturing services tailored to fit every need.</p>
                </li>
                <li className='border border-solid border-black/50 p-4 rounded-lg'>
                  <strong className='text-lg text-black/75'>Client-Centric Approach</strong>
                  <p className='leading-5 mt-2'>At Pratulya Fashions, client satisfaction drives everything we do, and we pride ourselves on building trusted partnerships.
                  Looking for a manufacturing partner you can rely on? Join hands with Pratulya Fashions and experience the perfect combination of quality, flexibility, and timely service.</p>
                </li>
              </ul>
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