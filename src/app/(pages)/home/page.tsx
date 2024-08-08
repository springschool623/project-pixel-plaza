import Image from "next/image";
import styles from '../../../../styles/HomePage.module.css'
import HomePageNewProductList from "@/app/components/HomePageNewProductList";
import HomePageSpecialProductList from "@/app/components/HomePageSpecialProductList";
import HomePageNewItemList from "@/app/components/HomePageNewItemList";

export default function Home() {
  return(
    <div>
      <div className={styles.homeBiggestBanner}>
        <Image src='/images/banner1.jpg' alt='Tay cầm Xbox' width={2000} height={2000}/>
      </div>
      <HomePageNewProductList/>
      <HomePageSpecialProductList/> 
      <HomePageNewItemList/> 
    </div>
    
  );
}
