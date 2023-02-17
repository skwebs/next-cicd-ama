
import { useTheme } from "next-themes";
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { HiComputerDesktop } from 'react-icons/hi2'
import { useState, useEffect } from "react";
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from ".";
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');

const ThemeSwitch = () => {

  const { systemTheme, theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  function changeTheme() {

    let themeMode = `${theme === 'system' ? 'dark' : theme === 'dark' ? 'light' : theme === 'light' && 'system'}`;

    // return <div className={` opacity-100 z-40 backdrop-blur-sm fixed inset-0 bg-black/20 transition-opacity duration-300 ease-in-out md:hidden `}></div>

    toast.custom((t) => (
      <>
        <div
          className={`${t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white dark:bg-gray-700 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black dark:ring-gray-500 ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                {/* start added code */}
                <div className="rounded-full">
                  {theme === 'system' ? <HiOutlineMoon className="w-8 h-8" /> : theme === 'dark' ? <HiOutlineSun className="w-8 h-8" /> : theme === 'light' && <HiComputerDesktop className="w-8 h-8" />}
                </div>
                {/* end added code */}
              </div>
              <div className="ml-3 flex-1 justify-center items-center">
                <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
                  {`${themeMode.charAt(0).toUpperCase() + themeMode.slice(1)} Mode Activated!`}
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l dark:border-gray-600 border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-sky-400 hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              Close
            </button>
          </div>
        </div>
      </>
    ))

    toast.success(`${themeMode.charAt(0).toUpperCase() + themeMode.slice(1)} Mode Activated!`,
      {
        icon: theme === 'system' ? <HiOutlineMoon className="w-8 h-8" /> : theme === 'dark' ? <HiOutlineSun className="w-8 h-8" /> : theme === 'light' && <HiComputerDesktop className="w-8 h-8" />,
        // style: {
        //   borderRadius: '10px',
        //   background: '#333',
        //   color: '#fff',
        // },
        className: 'dark:bg-gray-700 dark:text-white'
      }
    );
    // toast.custom(<div className="dark:bg-gray-800 dark:text-gray-300 px-4 py-2 rounded-lg bg-white text-gray-800 shadow-md">
    //   {`${themeMode.charAt(0).toUpperCase() + themeMode.slice(1)} Mode Activated!`}
    // </div>,
    //   {
    //     icon: '👏',
    //     style: {
    //       borderRadius: '10px',
    //       background: '#333',
    //       color: '#fff',
    //     },
    //   }
    // );
    // toast.custom(
    //   <div className="dark:bg-gray-800 dark:text-gray-300 px-4 py-2 rounded-lg bg-white text-gray-800 shadow-md">
    //     {`${themeMode.charAt(0).toUpperCase() + themeMode.slice(1)} Mode Activated!`}
    //   </div>
    // )
    // show activated theme mode
    // toast.success(`${themeMode.charAt(0).toUpperCase() + themeMode.slice(1)} Mode Activated!`, {
    //   icon: theme === 'system' ? HiOutlineMoon : theme === 'dark' ? HiOutlineSun : theme === 'light' && HiComputerDesktop,
    //   autoClose: 2000,
    //   position: "top-center"
    // });
    // activate theme
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
