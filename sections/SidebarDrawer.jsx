import { MdClose } from "react-icons/md";
import Link from "next/link";
import { AppNavLinks } from "../constants";
import { useRouter } from "next/router";
import SocialIcons from "@/components/SocialIcons";
import { useSidebarStore } from "@/hooks/sidebar-store";
import ThemeSwitch from "@/components/ThemeSwitch";

const SidebarDrawer = () => {
  const { sidebar, close } = useSidebarStore()

  // styling of sidebar links
  const linkStyle = {
    light: 'text-slate-700 hover:bg-gradient-to-t hover:from-slate-300 hover:to-slate-200 hover:border-slate-400 active:bg-gradient-to-b active:from-slate-300 active:to-slate-200',
    dark: 'dark:text-slate-400 dark:hover:bg-gradient-to-t dark:hover:from-slate-600 dark:hover:to-slate-700 dark:active:bg-gradient-to-b dark:active:from-slate-600 dark:active:to-slate-700',
    active: {
      light: 'text-sky-500 border-sky-500 bg-gradient-to-r from-sky-100 to-sky-200 active:bg-gradient-to-bl active:from-sky-100 active:to-sky-200 hover:text-sky-700',
      dark: 'dark:bg-gradient-to-r dark:active:bg-gradient-to-tr dark:from-white/5 dark:active:from-white/5 dark:to-sky-400/30 dark:active:to-sky-400/50 dark:hover:to-sky-400/50 dark:hover:text-sky-400'
    }
  }

  const router = useRouter();

  const { pathname } = router;

  return (
    <>

      {/* Overlay */}
      <div
        onClick={close}
        className={` ${sidebar ? " opacity-100 z-40" : " opacity-0 -z-10"
          } backdrop-blur-sm fixed inset-0 bg-black/20 transition-opacity duration-300 ease-in-out md:hidden `}></div>

      {/* Sidebar */}
      <aside
        className={`${sidebar ? "translate-x-0 shadow-xl shadow-slate-500" : "-translate-x-full"
          } md:hidden bg-white/80 dark:bg-gray-800/95 transition duration-500 min-w-min w-80 max-w-[calc(100%-3rem)]  fixed top-0 left-0  h-screen z-50`}>

        {/* close button */}
        <div className="flex group justify-end mb-2">
          <button
            className="flex items-center justify-end px-4 py-2 w-full ml-auto"
            onClick={close}>
            <span className=" px-3 py-1 rounded-2xl flex group-hover:ring-1 ring-slate-300 group-active:ring-0 group-active:bg-slate-700 group-active:text-slate-100 dark:group-hover:ring-slate-500"> Close <MdClose className="text-2xl ml-2" /></span>
          </button>
        </div>

        {/* mobile navigation */}
        <nav className="">
          {/* navigation */}
          <ul className="flex flex-col pr-6">
            {AppNavLinks.map((link, index) => (
              <li onClick={close}
                key={index}
                className={`group font-semibold items-center flex text-slate-700 cursor-pointer rounded-r-full`}>
                <Link href={link.href} onClick={() => close}
                  className={`${pathname === link.href
                    ? `${linkStyle.active.light} ${linkStyle.active.dark} `
                    : `${linkStyle.light} ${linkStyle.dark} border-transparent `
                    } font-semibold py-3 px-4 w-full rounded-r-full whitespace-nowrap border-l-4 `}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>


        <div className="flex justify-center my-8">
          <ThemeSwitch />
        </div>

        <div className="w-full flex justify-center space-x-2">
          <SocialIcons />
        </div>
      </aside>
    </>
  );
};

export default SidebarDrawer;
