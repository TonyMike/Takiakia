import { ReactNode } from 'react'
import Footer from './Navigation/Footer/Footer'
import HeaderNav from './Navigation/HeaderNav/HeaderNav'
import TopNav from './Navigation/TopNav/TopNav'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <TopNav />
      <HeaderNav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
