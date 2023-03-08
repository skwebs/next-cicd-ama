
import { useTheme } from "next-themes";
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { HiComputerDesktop } from 'react-icons/hi2'
import { useState, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from ".";
import toast, { Toaster } from 'react-hot-toast';

const ThemeSwitch = () => {

  const { systemTheme, theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  function changeTheme() {

    let themeMode = `${theme === 'system' ? 'dark' : theme === 'dark' ? 'light' : theme === 'light' && 'system'}`;


    toast.success(`${themeMode.charAt(0).toUpperCase() + themeMode.slice(1)} Mode Activated!`,
      {
        icon: theme === 'system' ? <HiOutlineMoon className="w-8 h-8" /> : theme === 'dark' ? <HiOutlineSun className="w-8 h-8" /> : theme === 'light' && <HiComputerDesktop className="w-8 h-8" />,

        className: 'dark:bg-gray-700 dark:text-white'
      }
    );

    setTheme(themeMode);
  }

  if (!mounted) return null;

  return (
    <>
      <Tooltip className="bg-sky-500 right-0 whitespace-nowrap" message={`${theme === 'system' ? 'Enable Dark Mode' : theme === 'dark' ? 'Enable Light Mode' : theme === 'light' && 'Enable System Mode'}`}>
        <button
          title={`${theme === 'system' ? 'Enable Dark Mode' : theme === 'dark' ? 'Enable Light Mode' : theme === 'light' && 'Enable System Mode'}`}
          onClick={() => changeTheme()}
          className={`dark:bg-gray-900 hover:ring-slate-200 active:ring-slate-300 dark:hover:ring-slate-700 dark:active:ring-slate-600 ${theme !== 'system' && 'text-sky-500'} rounded-md ring-transparent ring-2  p-1 bg-slate-100 dark:bg-slate-800`}
        >
          {theme === 'system' ? <HiComputerDesktop className="w-6 h-6" /> : theme === 'dark' ? <HiOutlineMoon className="w-6 h-6" /> : theme === 'light' && <HiOutlineSun className="w-6 h-6" />}
          {/* <>
            <HiOutlineSun className="w-6 h-6 dark:hidden" />
            <HiOutlineMoon className="w-6 h-6 hidden dark:block dark:bg-transparent" />
          </> */}
        </button>
      </Tooltip>
    </>
  )
};

export default ThemeSwitch;
