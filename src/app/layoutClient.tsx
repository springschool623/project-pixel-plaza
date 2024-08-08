// src/app/layoutClient.tsx
"use client";

import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [showLayout, setShowLayout] = useState(false);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    // Danh sách các pathname mà bạn muốn hiển thị Header, NavigationBar, và Footer
    const pathsToShowLayout = ["/payment"];
    setShowLayout(pathsToShowLayout.includes(pathname));

    // Kiểm tra nếu là trang /cart để không áp dụng sticky
    setIsSticky(pathname !== "/cart");
  }, [pathname]);

  return (
    <>
      {!showLayout && (
        <div className={isSticky ? "sticky" : ""}>
          <Header />
          <NavigationBar />
        </div>
      )}
      <main>{children}</main>
      {!showLayout && <Footer />}
    </>
  );
}
