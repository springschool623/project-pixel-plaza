import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styles from '../../../styles/Payment.module.css';

const PaymentOption = () => {
  const [showContent, setShowContent] = useState(false);

  const handleRadioChange = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <div
        className={`${styles.inputContent} ${styles.paymentMethodWrapper}`}
        onClick={handleRadioChange}>
        <div className={styles.paymentMethodItems}>
          <input 
            type="radio" 
            onChange={handleRadioChange} 
            checked={showContent} 
          />
          <span>Thanh toán online qua cổng ZaloPay (Visa, Master Card, JCB, quét QR, thẻ/tài khoản nội địa,...)</span>
          <button className={styles.paymentButtonCancel}>              
            <FontAwesomeIcon 
              icon={faAngleDown} 
              className={`${styles.paymentCancelIcon} ${showContent ? styles.paymentCancelIconRotate : ''}`} 
            />
          </button>
        </div>
        {showContent && (
        <div className={`${styles.paymentMethodItemsContent}`}>
          <span>
            Sau khi nhấp vào "Thanh toán ngay", bạn sẽ được chuyển hướng đến Thanh toán online qua cổng ZaloPay 
            (Visa, Master Card, JCB, quét QR, thẻ/tài khoản nội địa,...) để hoàn tất việc mua hàng một cách an toàn.
          </span>
        </div>
      )}
      </div>

    </div>
    
  );
};

export default PaymentOption;
