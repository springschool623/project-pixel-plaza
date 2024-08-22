'use client'
import Image from 'next/image'
import styleHome from '../../../../styles/HomePage.module.css'
import styleShop from '../../../../styles/Shop.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import AllItemList from '@/app/components/AllItemList'
import PriceSlider from '@/app/components/PriceSlider'
import CustomDropdownList from '@/app/components/CustomDropdownList'

export default function Shop() {
  const options = [
    { value: '0', label: 'Bán chạy nhất' },
    { value: '1', label: 'Giá từ thấp đến cao' },
    { value: '2', label: 'Giá từ cao đến thấp' },
    { value: '3', label: 'Sắp xếp theo A - Z' },
    { value: '4', label: 'Sắp xếp theo Z - A' },
  ]

  const handleDropdownChange = (value: any) => {
    console.log('Selected value:', value)
  }

  return (
    <div>
      <div className={styleHome.homeBiggestBanner}>
        <Image
          src="/images/banner1.jpg"
          alt="Tay cầm Xbox"
          width={3000}
          height={3000}
        />
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
              <span>PLAYSTATION</span>
              <FontAwesomeIcon
                icon={faAngleDown}
                className={styleShop.allItemMenuIcon}
              />
            </li>
            <li className={styleShop.allItemMenuList}>
              <span>XBOX</span>
              <FontAwesomeIcon
                icon={faAngleDown}
                className={styleShop.allItemMenuIcon}
              />
            </li>
            <li className={styleShop.allItemMenuList}>
              <span>THỂ LOẠI</span>
              <FontAwesomeIcon
                icon={faAngleDown}
                className={styleShop.allItemMenuIcon}
              />
            </li>
            <li className={styleShop.allItemMenuList}>
              <span>GAMING GEAR</span>
            </li>
          </ul>
          <PriceSlider />
          <div className={styleShop.menuBrands}>
            <span>Thương hiệu</span>
            <ul>
              <li>
                <input type="checkbox" id="brands_cb_1" />
                <label htmlFor="brands_cb_1">RockStar</label>
              </li>
              <li>
                <input type="checkbox" id="brands_cb_2" />
                <label htmlFor="brands_cb_2">BANDAI NAMCO</label>
              </li>
            </ul>
          </div>
        </div>
        <div className={styleShop.allItemContainer}>
          <div className={styleShop.allItemContainerHeader}>
            <CustomDropdownList
              options={options}
              onChange={handleDropdownChange}
            />
            <span>Tổng: 440 sản phẩm</span>
            <span></span>
          </div>
          <div className={styleShop.allItemContainerBody}>
            <AllItemList />
          </div>
        </div>
      </div>
    </div>
  )
}
