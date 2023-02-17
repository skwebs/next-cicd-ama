import { ToastContainer } from 'react-toastify'
import Footer from './Footer'
import Header from './Header'
import SidebarDrawer from './SidebarDrawer'
import toast, { Toaster } from 'react-hot-toast';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className='flex flex-col min-h-screen overflow-x-clip dark:bg-gray-800'>

        <header className='flex-grow-0 sticky top-0 left-0 z-40'>
          <Header />
        </header>

        <main className='flex-1'>
          {children}
        </main>

        <footer className='flex-grow-0'>
          <Footer />
        </footer>

      </div>
      <SidebarDrawer />
      {/* <ToastContainer /> */}
      <Toaster />
    </>
  )
}

export default MainLayout
