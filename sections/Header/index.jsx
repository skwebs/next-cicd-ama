import { useEffect, useState } from 'react';
import TopHeader from './TopHeader';
import Navigation from './Navigation';

const Header = () => {

  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 64) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);


  return (
    <>
      <div className={`${shadow ? "shadow-lg dark:shadow-md dark:shadow-gray-700 " : ""

        } bg-white/75 dark:bg-gray-900/75 w-full dark:border-slate-800 transition-all ease-in-out duration-300 backdrop-blur-sm  dark:text-slate-500 dark:border-b`}>
        <TopHeader />
        <Navigation />
      </div>
    </>
  )
}

export default Header
