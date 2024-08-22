import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import styles from '../../../styles/Payment.module.css'

const PaymentOption = () => {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleRadioChange = (option: any) => {
    setSelectedOption(option === selectedOption ? null : option)
  }

  return (
    <div>
      <div
        className={`${styles.paymentMethodWrapper}`}
        onClick={() => handleRadioChange('online-payment')}
      >
        <div className={styles.paymentMethodItems}>
          <input
            type="radio"
            checked={selectedOption === 'online-payment'}
            onChange={() => handleRadioChange('online-payment')}
          />
          <span>
            Thanh toán online qua cổng ZaloPay (Visa, Master Card, JCB, quét QR,
            thẻ/tài khoản nội địa,...)
          </span>
          <button className={styles.paymentButtonCancel}>
            <FontAwesomeIcon
              icon={faAngleDown}
              className={`${styles.paymentCancelIcon} ${
                selectedOption === 'online-payment'
                  ? styles.paymentCancelIconRotate
                  : ''
              }`}
            />
          </button>
        </div>
        {selectedOption === 'online-payment' && (
          <div className={`${styles.paymentMethodItemsContent}`}>
            <span>
              Sau khi nhấp vào "Thanh toán ngay", bạn sẽ được chuyển hướng đến
              Thanh toán online qua cổng ZaloPay (Visa, Master Card, JCB, quét
              QR, thẻ/tài khoản nội địa,...) để hoàn tất việc mua hàng một cách
              an toàn.
            </span>
          </div>
        )}
      </div>
      <div
        className={`${styles.paymentMethodWrapper}`}
        onClick={() => handleRadioChange('cod')}
      >
        <div className={styles.paymentMethodItems}>
          <input
            type="radio"
            checked={selectedOption === 'cod'}
            onChange={() => handleRadioChange('cod')}
          />
          <span>Thanh toán khi nhận hàng (COD)</span>
        </div>
      </div>
    </div>
  )
}

export default PaymentOption
