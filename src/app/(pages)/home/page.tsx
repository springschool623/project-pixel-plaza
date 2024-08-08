import Image from "next/image";
import styles from '../../../../styles/HomePage.module.css'
import HomePageNewProductList from "@/app/components/HomePageNewProductList";
import HomePageSpecialProductList from "@/app/components/HomePageSpecialProductList";
import HomePageNewItemList from "@/app/components/HomePageNewItemList";

export default function Home() {
  return(
    <div>
      <div className={styles.homeBiggestBanner}></div>
      <HomePageNewProductList/>
      <HomePageSpecialProductList/> 
      <HomePageNewItemList/> 
    </div>
    
  );
}
