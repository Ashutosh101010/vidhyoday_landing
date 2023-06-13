import  { useState, useEffect, useRef } from 'react';
// import ReactDOM from 'react-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './NavBar';
import './css/header.css';

const Header = ({scrollDownC}) => {
  const ref = useRef();
  const [isSticky, setSticky] = useState(false);
  const location = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      const offset = ref.current.offsetTop;
      setSticky(window.pageYOffset > offset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = `header ${isSticky ? 'sticky' : ''}`;
 
  const backgroundGradient =
  location.pathname === '/' ? '#fff'
    : 'transparent';


  return (
    <div>
      <header ref={ref} className={headerClasses} 
      // style={{background:'transparent'}}
      // style={{ background: backgroundGradient }}
      >
        <Navbar className="content" scrollDownC={scrollDownC} />
      </header>
    </div>
  );
};

export default Header;
