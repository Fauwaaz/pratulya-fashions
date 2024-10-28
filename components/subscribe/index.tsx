import Link from "next/link";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe__content">
          <div className="text-center">
            <h4 className="font-bold">Get in Touch with Us</h4>
            <br/>
            <p className="text-white leading-5">Need custom apparel manufacturing for your brand? Reach out to Pratulya Fashions today for bulk T-shirt, shirt, and corporate clothing solutions. We look forward to building long-lasting partnerships with businesses and brands across Mumbai and beyond.</p>
            <br/>
            <Link href="/contact-us" className="btn btn--rounded btn--yellow">Contact</Link>
          </div>
        </div>
      </div>
    </section>
  )
  
};

export default Subscribe