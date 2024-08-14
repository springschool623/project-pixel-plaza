"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../../../../styles/ProductDetails.module.css';
import Image from "next/image";
import { faCheck, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import QuantityCount from '@/app/components/QuantityCount';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import RelatedProductList from '@/app/components/RelatedProductList';

export default function ProductDetailsID({ params }: { params: { productId: string } }) {
  const handleQuantityChange = (quantity: number) => {
    console.log("Selected Quantity:", quantity);
    // Handle the quantity change (e.g., update state, send to backend, etc.)
  };

  return (
    <div className={styles.productDetailWrapper}>
      <div className={styles.productDetailContainer}>
        <div className={styles.imageContainer}>
          <Image src="/proitem1.jpg" alt="Sản phẩm" width={2000} height={2000} className={styles.bigImage}></Image>
          <div className={styles.subImageCollection}>
            <Image src="/proitem1.jpg" alt="Sản phẩm" width={2000} height={2000} className={styles.subImage}></Image>
            <Image src="/proitem1.jpg" alt="Sản phẩm" width={2000} height={2000} className={styles.subImage}></Image>
            <Image src="/proitem1.jpg" alt="Sản phẩm" width={2000} height={2000} className={styles.subImage}></Image>
            <Image src="/proitem1.jpg" alt="Sản phẩm" width={2000} height={2000} className={styles.subImage}></Image>
            <Image src="/proitem1.jpg" alt="Sản phẩm" width={2000} height={2000} className={styles.subImage}></Image>
          </div>
        </div>
        <div className={styles.detailContainer}>
          <h1>Xbox Series Wireless Controller - Fire Vapor</h1>
          <div className={styles.detailLabel}>
            <label>Nhà sản xuất: <span>Microsoft Box</span></label>
            <label>Model: <span>20768</span></label>
          </div>
          <span className={styles.detailPrice}>1.850.000đ</span>
          <div className={styles.detailPolicy}>
            <FontAwesomeIcon icon={faCheck} className={styles.policyIcon} />
            <label>Nhận hàng nhanh chóng (không tính T7 - CN)</label>
          </div>
          <div className={styles.detailPolicy}>
            <FontAwesomeIcon icon={faCheck} className={styles.policyIcon} />
            <label>Hobiverse phân phối chính hãng từ thương hiệu <span>Microsoft Box</span></label>
          </div>
          <div className={styles.detailPolicy}>
            <FontAwesomeIcon icon={faCheck} className={styles.policyIcon} />
            <label>Miễn phí giao hàng toàn quốc đơn trên 500k</label>
          </div>
          <div className={styles.detailPolicy}>
            <label>***Lưu ý: <span>Sản phẩm được hoàn/ đổi trong vòng 3 ngày sau khi nhận hàng, nếu là lỗi do nhà sản xuất và phải có video khui mở kiện hàng</span></label>
          </div>
          <div className={styles.detailPolicy}>
            <FontAwesomeIcon icon={faCircleDot} className={`${styles.policyIcon}`} />
            <label>Còn hàng: 20 sản phẩm</label>
          </div>
          <div className={styles.detailInteract}>
            <div className={styles.detailQuantity}>
              <label>Số lượng</label>
              <QuantityCount onQuantityChange={handleQuantityChange} /> {/* Use the QuantityCount component */}
            </div>
            <button className={styles.detailAddToCart}>Thêm vào giỏ hàng</button>
            <button className={styles.detailAddFavoriteButton}>            
              <FontAwesomeIcon icon={faHeart} className={styles.detailAddFavorite}/>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.productDescriptionWrapper}>
        <div className={styles.descTitleWrapper}>
          <span className={styles.descTitle}>Mô tả sản phẩm</span>
        </div>
        <div className={styles.productDescriptionContainer}>
          <h2>Xbox Series Wireless Controller - Fire Vapor</h2>
          <p>Lấy cảm hứng từ mẫu tay cầm Xbox Elite 2 đỉnh cao nhất, D-Pad 8 hướng đã được sử dụng lại. Bề mặt tay cầm nay đã phẳng hơn, tập trung vào những gì quan trọng trên đó với các cụm nút chức năng ABXY làm bằng nhựa trong và đặt các biểu tượng bên trong đó.</p>
          <p>Hai cần analog vẫn đặt lệch nhau như đời trước và vị trí này mang lại cảm giác quen thuộc cho game thủ. Giờ đây bạn cũng có thể chia sẻ nội dung tức thời với nút Share chính giữa, nút Menu bên phải và chụp màn hình, ghi hình ở bên trái.</p>
          <p>Cảm nhận từng hành động với cặp cò Impulse Triggers. Các mô tơ rung trong các cò cung cấp khả năng phả hồi chính xác tới các ngón tay của bạn khiến độ giật của các vũ khí, vụ tông xe, và các chấn động như được mang ra đời thật điều này nâng sự chân thật trong sự phản hồi khi chơi game lên tầm cao mới.</p>
          <p>Xbox Wireless Controller có thể nói là chiếc tay cầm có thể kết nối đến nhiều thiết bị nhất không chỉ các dòng máy Xbox mà còn với PC, Android và iOS, hỗ trợ bạn chơi game đa nền tảng. Tay cầm Xbox mới cũng hỗ trợ kết nối không dây qua Bluetooth hoặc có dây thông qua cổng USB-C.</p>
        </div>
      </div>
      <div className={styles.relatedProductWrapper}>
        <h2>Sản phẩm liên quan</h2>
        <div className={styles.relatedProductContainer}>
          <RelatedProductList/>
        </div>
      </div>
    </div>
  );
}
