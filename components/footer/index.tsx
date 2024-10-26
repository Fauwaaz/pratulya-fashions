import Link from 'next/link';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <Link href="/">
              <h6 className="site-logo">PRATULYA<span>&nbsp;FASHIONS</span> </h6>
            </Link>
            <p>House My Brand designs clothing for the young, the old & everyone in between - but most
              importantly, for the fashionable</p>
            <ul className="site-footer__social-networks">
              <li><Link href="#"><i className="icon-facebook"></i></Link></li>
              <li><Link href="#"><i className="icon-twitter"></i></Link></li>
              <li><Link href="#"><i className="icon-linkedin"></i></Link></li>
              <li><Link href="#"><i className="icon-instagram"></i></Link></li>
              <li><Link href="#"><i className="icon-youtube-play"></i></Link></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Shopping online</li>
              <li><Link href="#">Shipping and Delivery</Link></li>
              <li><Link href="#">Returns</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
            <ul>
              <li>Information</li>
              <li><Link href="#">Site feedback</Link></li>
            </ul>
            <ul>
              <li>Contact</li>
              <li><Link href="mailto:info@pratulyafashions.com">info@pratulyafashions.com</Link></li>
              <li><Link href="#">Hotline: +1 131 138 138</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>PRATULYA FASHIONS - © {year}. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer