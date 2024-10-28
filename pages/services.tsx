import Footer from 'components/footer';
import Layout from '../layouts/Main';
import Subscribe from 'components/subscribe';
import Head from 'next/head';
import Link from 'next/link';

const Services = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Our Services | Pratulya Fashions | Apparel Manufacturing Solutions</title>
          <meta name="description" content="Discover Pratulya Fashions' wide range of apparel manufacturing solutions, including bulk production of T-shirts, corporate uniforms, and customized garments. We ensure high-quality output with timely delivery for businesses of all sizes." />
        </Head>
        <section className='featured'>
          <h1 className='text-center text-4xl font-bold pb-4'>Our Services</h1>
          <p className='leading-5 p-4 text-center'>At <Link href="/contact-us" className='font-medium'>Pratulya Fashions</Link>, we provide a wide range of apparel manufacturing solutions tailored to meet the needs of businesses across industries. Our expertise lies in bulk production of T-shirts, shirts, uniforms, and customized garments, ensuring high-quality output with a focus on timely delivery. From retailers and startups to corporate clients, we offer flexible, scalable solutions to match your requirements.</p>
          <div style={{ backgroundImage: 'url(/images/tshirt-manufacturing.webp)' }} className="featured-item featured-item-large my-2">
            <div className="featured-item__content">
              <h3 className='text-bold'><strong>Bulk T-Shirt Manufacturing</strong></h3>
              <p className='text-white w-[300px] leading-5 pb-4 xl:w-[500px]'>We specialize in high-volume T-shirt production for both men's and women's apparel. Our services cover a variety of styles, including:</p>
              <ul className='flex flex-col gap-3 text-white mb-4 text-sm' style={{listStyle: "circle"}}>
                <li>Polo T-Shirts</li>
                <li>Round Neck and V-Neck T-Shirts</li>
                <li>Customized T-Shirts with Logo Printing and Embroidery</li>
              </ul>
              <p className='text-white w-[300px] leading-5 pb-4 xl:w-[500px]'>Our bulk T-shirt manufacturing solutions are perfect for corporate giveaways, retail outlets, and promotional events, ensuring comfort and durability in every piece.</p>
            </div>
          </div>

          <div style={{ backgroundImage: 'url(/images/shirt-manufacturing.webp)', backgroundPosition: "center" }} className="featured-item featured-item-large">
            <div className="featured-item__content">
            <h3 className='text-bold'><strong>Bulk Shirt Manufacturing</strong></h3>
              <p className='text-white w-[300px] leading-5 pb-4 xl:w-[500px]'>We offer custom and readymade shirts for diverse needs, such as:</p>
              <ul className='flex flex-col gap-3 text-white mb-4 text-sm' style={{listStyle: "circle"}}>
                <li>Casual and Formal Shirts</li>
                <li>Corporate Uniform Shirts</li>
                <li>Custom Designs and Patterns</li>
              </ul>
              <p className='text-white w-[300px] leading-5 pb-4 xl:w-[500px]'>Our focus is on delivering high-quality stitching and fabrics that align with your business goals. Whether you need formalwear for offices or casual styles for retail, we have you covered.</p>
            </div>
          </div>

          <div style={{ backgroundImage: 'url(/images/corporate-uniform.webp)', backgroundPosition: "center" }} className="featured-item featured-item-large">
            <div className="featured-item__content">
            <h3 className='text-bold'><strong>Corporate Uniforms and Workwear Solutions</strong></h3>
              <p className='text-white w-[300px] leading-5 pb-4 xl:w-[500px]'>Our corporate uniform manufacturing services are designed to create branded apparel for businesses, including:</p>
              <ul className='flex flex-col gap-3 text-white mb-4 text-sm' style={{listStyle: "circle"}}>
                <li>Office Uniforms and Retail Staff Clothing</li>
                <li>Custom Workwear for Industrial Use</li>
                <li>Event-Specific Apparel Solutions</li>
              </ul>
              <p className='text-white w-[300px] leading-5 pb-4 xl:w-[500px]'>We ensure that all uniforms reflect your brand identity through custom embroidery and printing options.</p>
            </div>
          </div>

          <div style={{ backgroundImage: 'url(/images/customized-garments.webp)', backgroundPosition: "center" }} className="featured-item featured-item-large">
            <div className="featured-item__content">
            <h3 className='text-bold'><strong>Customized Garment Manufacturing</strong></h3>
              <p className='text-white w-[300px] leading-5 pb-4 xl:w-[500px]'>Looking for something unique? Our custom manufacturing services allow businesses to create exclusive designs with specific fabrics, colors, and sizes. This service is ideal for limited edition products, brand launches, and promotional events.</p>
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