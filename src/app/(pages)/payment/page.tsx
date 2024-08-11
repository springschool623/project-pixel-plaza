'use client'
import styles from '../../../../styles/Payment.module.css'
import Image from "next/image";
import CustomDropdownNations from '@/app/components/CustomDropdownNations';
import countries from 'i18n-iso-countries';
import {getDistricts, getDistrictsByProvinceCode, getProvinces, getWards, getWardsByDistrictCode, IDistricts, IProvinces, IWards} from "vn-provinces";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import PaymentMethods from '@/app/components/PaymentMethods';


// Đăng ký ngôn ngữ cho danh sách quốc gia (ví dụ: Tiếng Việt)
countries.registerLocale(require("i18n-iso-countries/langs/vi.json"));

export default function Payment() {
    const [provinces, setProvinces] = useState<IProvinces[]>([]);
    const [districts, setDistricts] = useState<IDistricts[]>([]);
    const [wards, setWards] = useState<IWards[]>([]);
    const [selectedProvince, setSelectedProvince] = useState<string>('');
    const [selectedDistrict, setSelectedDistrict] = useState<string>('');

    useEffect(() => {
        const provincesData = getProvinces();
        setProvinces(provincesData);
    }, []);

    useEffect(() => {
        if (selectedProvince) {
            const districtsData = getDistrictsByProvinceCode(selectedProvince);
            setDistricts(districtsData);
        } else {
            setDistricts([]);
        }
        setWards([]);  // Reset wards khi thay đổi tỉnh/thành phố
    }, [selectedProvince]);

    useEffect(() => {
        if (selectedDistrict) {
            const wardsData = getWardsByDistrictCode(selectedDistrict);
            setWards(wardsData);
        } else {
            setWards([]);
        }
    }, [selectedDistrict]);

    const countryOptions = Object.entries(countries.getNames("vi", { select: "official" }))
      .map(([value, label]) => ({ value, label }));

    const provinceOptions = provinces.map(province => ({ value: province.code, label: province.name }));
    const districtOptions = districts.map(district => ({ value: district.code, label: district.name }));
    const wardOptions = wards.map(ward => ({ value: ward.code, label: ward.name }));

    const handleProvinceChange = (value: string) => {
        setSelectedProvince(value);
        setSelectedDistrict('');  // Reset district khi thay đổi tỉnh/thành phố
    };

    const handleDistrictChange = (value: string) => {
        setSelectedDistrict(value);
    };                                

    const handleDropdownChange = (value: any) => {
      console.log("Selected value:", value);
    };

    return(
      <div>
        <div className={styles.paymentWrapper}>
          <div className={styles.leftWrapper}></div>
          <div className={styles.paymentContainer}>
            <div className={styles.leftContainer}>
              <div className={styles.paymentLogo}>
                <Image src="/logo.png" alt="Logo" width={200} height={50}/>
              </div>
              <div className={styles.paymentInput}>
                <label>Liên hệ</label>
                <div className={styles.inputContent}>
                    <span>Email hoặc số điện thoại di động</span>
                    <input type="text"/>
                </div>
              </div>
              <div className={styles.paymentInput}>
                <label>Địa chỉ giao hàng</label>
                <CustomDropdownNations label='Quốc gia/Vùng' options={countryOptions} onChange={handleDropdownChange} />
                <div className={styles.inputContentWrapper}>
                  <div className={`${styles.inputContent}  ${styles.halfInputContent}`}>
                      <span>Họ</span>
                      <input type="text" className={styles.inputText}/>
                  </div>
                  <div className={`${styles.inputContent}  ${styles.halfInputContent}`}>
                      <span>Tên</span>
                      <input type="text" className={styles.inputText}/>
                  </div>
                </div>
                <div className={styles.inputContentWrapper}>
                  <div className={styles.inputContent}>
                    <span>Số nhà, tên đường</span>
                    <input type="text"/>
                  </div>
                </div>
                <div className={styles.inputContentWrapper}>
                  <div className={`${styles.inputContent}  ${styles.halfInputContent}`}>
                      <span>Thành phố</span>
                      <input type="text" className={styles.inputText}/>
                  </div>
                  <div className={`${styles.inputContent}  ${styles.halfInputContent}`}>
                      <span>Mã bưu chính (không bắt buộc)</span>
                      <input type="text" className={styles.inputText}/>
                  </div>
                </div>
                <div className={styles.inputContentWrapper}>
                  <div className={styles.inputContent}>
                    <span>Số điện thoại</span>
                    <input type="text"/>
                  </div>
                </div>
                <div className={styles.inputContentWrapper}>
                  <div className={styles.paymentCheckbox}>
                    <input type="checkbox"/>
                    <span>Lưu lại thông tin cho lần sau</span>
                  </div>
                </div>
              </div>
              <div className={styles.paymentInput}>
                <label>Địa chỉ Việt Nam</label>
                <span className={styles.inputNote}>Vui lòng chọn đầy đủ tỉnh / thành phố, quận / huyện, phường / xã theo định dạng của Việt Nam</span>
                <CustomDropdownNations label='Tỉnh/Thành phố' options={provinceOptions} onChange={handleProvinceChange} />
                <div className={styles.countrySelectorWrapper}>
                <CustomDropdownNations label='Quận/Huyện' options={districtOptions} onChange={handleDistrictChange} width='48%' />
                <CustomDropdownNations label='Phường/Xã' options={wardOptions} onChange={handleDropdownChange} width='48%' />
                </div>
              </div>
              <div className={styles.paymentInput}>
                <label>Liên hệ</label>
                <span className={styles.inputNote}>Toàn bộ các giao dịch được bảo mật và mã hóa</span>
                <div>
                <PaymentMethods/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
