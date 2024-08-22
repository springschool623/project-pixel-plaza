'use client'

import Header from './components/Header'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import LandingPage from './(pages)/landing-page/page'

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const [showHeaderLayout, setShowHeaderLayout] = useState(false)
  const [showLandingPage, setShowLandingPage] = useState(true)
  const [isSticky, setIsSticky] = useState(true)

  useEffect(() => {
    // Danh sách các pathname mà bạn muốn hiển thị Header, NavigationBar, và Footer
    setShowHeaderLayout(pathname == '/payment')
    setShowLandingPage(pathname == '/')
    // Kiểm tra nếu là trang /cart để không áp dụng sticky
    setIsSticky(pathname !== '/cart')
  }, [pathname])

  return (
    <>
      {!showHeaderLayout && (
        <div className={isSticky ? 'sticky' : ''}>
          <Header />
          <NavigationBar />
        </div>
      )}
      <main className={pathname === '/payment' ? '' : 'mainCSS'}>
        {children}
      </main>
      <Footer />
      {showLandingPage && <LandingPage />}
    </>
  )
}
