'use client'
import Image from "next/image";
import styleHome from '../../../../styles/HomePage.module.css';
import styleShop from '../../../../styles/Shop.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import PriceFilter from "@/app/components/PriceFilter";
import AllItemList from "@/app/components/AllItemList";

export default function Shop() {
  const handlePriceChange = (values: { min: number; max: number }) => {
    console.log("Selected price range:", values);
  };

  return(
    <div>
      <div className={styleHome.homeBiggestBanner}>
        <Image src='/images/banner1.jpg' alt='Tay cầm Xbox' width={3000} height={3000}/>
      </div>
      <div className={styleShop.allItemWrapper}>
        <div className={styleShop.allItemMenu}>
            <ul>
                <li className={styleShop.allItemMenuList}>
                    <span>TẤT CẢ</span>
                </li>
                <li className={styleShop.allItemMenuList}>
                    <span>HÀNG SẮP VỀ</span>
                </li>
                <li className={styleShop.allItemMenuList}>
                    <span>PLAYSTATION</span><FontAwesomeIcon icon={faAngleDown} className={styleShop.allItemMenuIcon}/>
                </li>
                <li className={styleShop.allItemMenuList}>
                    <span>XBOX</span><FontAwesomeIcon icon={faAngleDown} className={styleShop.allItemMenuIcon}/>
                </li>
                <li className={styleShop.allItemMenuList}> 
                    <span>THỂ LOẠI</span><FontAwesomeIcon icon={faAngleDown} className={styleShop.allItemMenuIcon}/>
                </li>
                <li className={styleShop.allItemMenuList}>
                    <span>GAMING GEAR</span>
                </li>
            </ul>
            <PriceFilter/>
            <div className={styleShop.menuBrands}>
              <span>Thương hiệu</span>
              <ul>
                <li>
                  <input type="checkbox"/><label>RockStar</label>
                </li>
                <li>
                  <input type="checkbox"/><label>BANDAI NAMCO</label>
                </li>
              </ul>
            </div>
        </div>
        <div className={styleShop.allItemContainer}>
          <div className={styleShop.allItemContainerHeader}>
            <select className={styleShop.filterProducts}>
              <option value="0">Nổi bật</option>
              <option value="2">Giá từ cao đến thấp</option>
            </select>
            <span>Tổng: 440 sản phẩm</span>
            <span></span>
          </div>
          <div className={styleShop.allItemContainerBody}>
            <AllItemList/>
          </div>
        </div>
      </div>
    </div>
  );
}
