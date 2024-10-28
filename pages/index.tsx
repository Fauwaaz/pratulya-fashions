import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
// import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';
import Link from 'next/link';

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />
      <section className='p-5 text-center'>
        <div className="container">
          <h3 className='text-center text-4xl font-bold py-4'>About Us</h3>
          <p className='leading-6'>
            At <Link href="/contact-us" className='font-medium underline'>Pratulya Fashions</Link>, we specialize in bulk manufacturing of premium T-shirts and shirts for businesses and retailers across India. Whether you need corporate uniforms, customized garments, or regular wear for men and women, our expertise ensures the perfect blend of quality, design, and timely delivery.
            <br />
            <br />
            With a focus on subcontracted manufacturing solutions, we collaborate with brands, wholesalers, and corporate clients to bring high-quality fashion to life. Our manufacturing process is streamlined to deliver bulk orders efficiently, ensuring consistency, precision, and affordability.
          </p>
        </div>
      </section>

      <section className="featured">
        <h3 className='text-center text-4xl font-bold mb-4'>Our Core Offerings</h3>
        <div style={{ backgroundImage: 'url(/images/tshirt-manufacturing.webp)' }} className="featured-item featured-item-large my-2">
          <div className="featured-item__content">
            <h3>T-Shirt Manufacturing</h3>
            <p className='text-white w-[300px] leading-5 pb-4 xl:w-[500px]'>We offer bulk T-shirt production with options to customize fabrics, designs, and styles. From plain tees to logo-branded corporate T-shirts, our range is suitable for every need.</p>
          </div>
        </div>
        <div style={{ backgroundImage: 'url(/images/shirt-manufacturing.webp)', backgroundPosition: "center" }} className="featured-item featured-item-large">
          <div className="featured-item__content">
            <h3>Shirt Manufacturing</h3>
            <p className='text-white w-[300px] leading-5 pb-4 xl:w-[500px]'>Our shirt collection covers formal, semi-formal, and casual styles. Ideal for retailers and companies looking for custom bulk orders or corporate uniforms.</p>
          </div>
        </div>

        <div className='text-center pt-10'>
          <Link href='/services' className='text-white bg-black py-4 px-6 rounded-full'>View More</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
            <h4 className='text-center text-4xl font-bold pb-8'>Why should you choose us?</h4>
          <ul className="shop-data-items">
            <li>
              <i className="icon-payment" style={{fontSize: "30px"}}></i>
              <div className="data-item__content">
                <h4>Bulk Manufacturing Capacity</h4>
                <p>We handle large orders with precision and care.</p>
              </div>
            </li>

            <li>
              <i className="icon-materials" style={{fontSize: "30px"}}></i>
              <div className="data-item__content">
                <h4>Quality Assurance</h4>
                <p>Our state-of-the-art manufacturing process ensures consistent results in every batch.</p>
              </div>
            </li>

            <li>
              <i className="icon-cash" style={{fontSize: "30px"}}></i>
              <div className="data-item__content">
                <h4>Customized Solutions</h4>
                <p>We accommodate unique client requirements, from fabrics to final designs.</p>
              </div>
            </li>

            <li>
              <i className="icon-shipping" style={{fontSize: "28px"}}></i>
              <div className="data-item__content">
                <h4>On-Time Delivery</h4>
                <p> With optimized production processes, we ensure your orders are always delivered on schedule.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* <ProductsFeatured /> */}
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default IndexPage