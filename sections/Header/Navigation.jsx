import Link from "next/link";
import { useRouter } from "next/router";
import { AppNavLinks } from "../../constants";
import { MdMenu } from "react-icons/md";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import logo from '@/assets/images/ama-old-72-300x300.png'
import { useSidebarStore } from "@/hooks/sidebar-store";
import { Brand } from "@/components";
import ThemeSwitch from "@/components/ThemeSwitch";
import Image from "next/image";

const Navigation = () => {


  const { open } = useSidebarStore()

  const router = useRouter();

  const { pathname } = router;


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <div className="w-full ">
        <div className="px-4 md:px-6 lg:px-8">
          <div className="mx-auto">
            <div className="flex justify-between">
              {/* left side */}
              <div className="flex items-center h-14">
                <MdMenu
                  onClick={open}
                  className=" md:hidden text-5xl p-3 mr-3 hover:bg-slate-100 active:text-slate-600 active:bg-slate-200 rounded-full cursor-pointer  dark:hover:bg-white/10 dark:active:text-slate-300 dark:active:bg-white/20"
                />
                <Link href={`/`}>
                  <Brand className="text-2xl" />
                </Link>
              </div>

              {/* right side */}
              <div className="flex items-center">
                {/* navigation */}
                <nav>
                  <ul className="hidden md:flex items-center">
                    {AppNavLinks.map((link, index) => (
                      <li key={index} className="group">
                        <Link href={link.href} className={`${pathname === link.href
                          ? " text-sky-500 active:bg-sky-500/5 dark:active:bg-sky-600/10"
                          : " text-slate-700 dark:text-slate-400 active:bg-slate-600/5 dark:active:bg-slate-100/5"
                          } rounded-md font-semibold px-3 py-2 hover:underline hover:underline-offset-8 whitespace-nowrap transition-all duration-1000`}>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="ml-2 flex justify-center items-center space-x-2 ">


                  <div className="m-2  transition-all">
                    <ThemeSwitch />
                  </div>


                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className={`flex rounded-full bg-gray-800 text-sm focus:outline-none ring-transparent ring-4 hover:ring-gray-100 active:ring-gray-200 dark:hover:ring-gray-800 dark:active:ring-gray-700`}>
                        <span className="sr-only">Open user menu</span>

                        <Image src={logo} className="h-8 w-8 rounded-full" alt="Logo" />

                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800 dark:ring-slate-700">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100 dark:bg-slate-800' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-slate-400 dark:hover:bg-slate-700')}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="#"
                              className={classNames(active ? 'bg-gray-100 dark:bg-slate-800' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-slate-400 dark:hover:bg-slate-700')}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="#"
                              className={classNames(active ? 'bg-gray-100 dark:bg-slate-800' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-slate-400 dark:hover:bg-slate-700')}
                            >
                              Sign out
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
