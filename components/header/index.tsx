import { useState, useEffect, useRef } from 'react';
// import { useSelector } from 'react-redux';
import useOnClickOutside from 'use-onclickoutside';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
// import { RootState } from 'store';

type HeaderType = {
  isErrorPage?: Boolean;
}

const Header = ({ isErrorPage }: HeaderType) => {
  const router = useRouter();
  // const { cartItems } = useSelector((state: RootState) => state.cart);
  const arrayPaths = ['/'];

  const [onTop, setOnTop] = useState((!arrayPaths.includes(router.pathname) || isErrorPage) ? false : true);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const headerClass = () => {
    if (window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  }

  useEffect(() => {
    if (!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    headerClass();
    window.onscroll = function () {
      headerClass();
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  }

  useOnClickOutside(navRef, closeMenu);


  return (
    <>
      <header className={`site-header ${!onTop ? 'site-header--fixed' : ''}`}>
        <div className="container">
          <Link href="/">
            <Image 
              src={'/images/Pratullya-Fashions-Logo.webp'}
              height={50}
              width={150}
              alt="Pratullya Fashions Logo"
              unoptimized={true}
              fetchPriority='high'
            />
          </Link>
          <nav ref={navRef} className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
            {/* <Link href="/products">Products</Link> */}
            <Link href="/" style={{fontWeight: "600", fontSize: "16px"}}>Home</Link>
            <Link href="/services" style={{fontWeight: "600", fontSize: "16px"}}>Services</Link>
            <Link href="/about" style={{fontWeight: "600", fontSize: "16px"}}>About</Link>
            <Link href="/contact-us" style={{fontWeight: "600", fontSize: "16px"}}>Contact Us</Link>
            <button className="site-nav__btn" style={{fontWeight: "600", fontSize: "16px"}}><p>Account</p></button>
          </nav>
          <div className="site-header__actions">
            {/* <button ref={searchRef} className={`search-form-wrapper ${searchOpen ? 'search-form--active' : ''}`}>
              <form className={`search-form`}>
                <i className="icon-cancel" onClick={() => setSearchOpen(!searchOpen)}></i>
                <input type="text" name="search" placeholder="Enter the product you are looking for" />
              </form>
              <i onClick={() => setSearchOpen(!searchOpen)} className="icon-search"></i>
            </button> */}
            {/* <Link href="/cart">
              <button className="btn-cart">
                <i className="icon-cart"></i>
                {cartItems.length > 0 &&
                  <span className="btn-cart__count">{cartItems.length}</span>}
              </button>
            </Link>
            <Link href="/login">
              <button className="site-header__btn-avatar"><i className="icon-avatar"></i></button>
            </Link> */}
            <button
              onClick={() => setMenuOpen(true)}
              className="site-header__btn-menu">
              <i className="btn-hamburger"><span></span></i>
            </button>
          </div>
        </div >
      </header>
    </>
  )
};


export default Header;
