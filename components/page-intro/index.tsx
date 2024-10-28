import Link from 'next/link';

const PageIntro = () => {

  return (
    <section className="page-intro">  
          <div className="page-intro__slide">
            <div className="container">
              <div className="page-intro__slide__content">
                <h2 className='pt-[40px] drop-shadow-md'>Leading Apparel Manufacturing</h2>
                <span className='text-white text-3xl tracking-wider font-bold'>Subcontractor in Mumbai, India</span>
                <Link href="/contact-us" className="btn-shop mt-3 bg-black w-[160px] rounded-full"><i className="icon-right"></i>Know More</Link>
              </div>
            </div>
          </div>
      {/* <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Free Shipping</h4>
                <p>On purchases over $199</p>
              </div>
            </li>
            
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>99% Satisfied Customers</h4>
                <p>Our clients' opinions speak for themselves</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Originality Guaranteed</h4>
                <p>30 days warranty for each product from our store</p>
              </div>
            </li>
          </ul>
        </div>
      </div> */}
    </section>
  )
};

export default PageIntro