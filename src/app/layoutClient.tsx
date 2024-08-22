'use client'

import Header from './components/Header'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const [showLayout, setShowLayout] = useState(false)
  const [isSticky, setIsSticky] = useState(true)

  useEffect(() => {
    // Danh sách các pathname mà bạn muốn hiển thị Header, NavigationBar, và Footer
    setShowLayout(pathname == '/payment')

    // Kiểm tra nếu là trang /cart để không áp dụng sticky
    setIsSticky(pathname !== '/cart')
  }, [pathname])

  return (
    <>
      {!showLayout && (
        <div className={isSticky ? 'sticky' : ''}>
          <Header />
          <NavigationBar />
        </div>
      )}
      {/* Vô hiệu hóa CSS cho main nếu ở trang /payment */}
      <main className={pathname === '/payment' ? '' : 'mainCSS'}>
        {children}
      </main>
      <Footer />
    </>
  )
}
