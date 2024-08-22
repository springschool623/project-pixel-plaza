import LandingProductSlider from '@/app/components/LandingProductSlider'
import Image from 'next/image'
import { Pixelify_Sans } from 'next/font/google'
import Link from 'next/link'

import styles from '../../../../styles/LandingPage.module.css'
const pixelify = Pixelify_Sans({ subsets: ['latin'] })

export default function LandingPage() {
  return (
    <div className={`${styles.landingPagePopUp} ${pixelify.className}`}>
      <div className={styles.landingPageWrapper}>
        <div className={styles.landingPageHeader}>
          <Image
            src="/images/logo/pixel_plaza_title.png"
            alt="Logo"
            width={2000}
            height={500}
            className={styles.landingPageLogo}
          />
        </div>
        <div className={styles.landingPageAboveContainer}>
          <div className={styles.landingPageInfo}>
            <h1 className={styles.landingPageTitle}>
              PIXELPLAZA - Nơi Đam Mê Gaming Tỏa Sáng
            </h1>
            <span className={styles.landingPageDesc}>
              Chào mừng bạn đến với PixelPlaza, thiên đường dành cho game thủ!
              Tại đây, bạn sẽ tìm thấy mọi thứ từ những tựa game hot nhất đến
              các thiết bị chơi game đỉnh cao, giúp bạn thăng hoa trong từng
              trận đấu.
            </span>
          </div>
          <div className={styles.landingPageSliderContainer}>
            <LandingProductSlider />
          </div>
        </div>
        <div className={styles.landingPageBelowContainer}>
          <div className={styles.landingPageInfo}>
            <h1 className={styles.landingPageTitle}>
              PIXELPLAZA - Nơi Đam Mê Gaming Tỏa Sáng
            </h1>
            <span className={styles.landingPageDesc}>
              Chào mừng bạn đến với PixelPlaza, thiên đường dành cho game thủ!
              Tại đây, bạn sẽ tìm thấy mọi thứ từ những tựa game hot nhất đến
              các thiết bị chơi game đỉnh cao, giúp bạn thăng hoa trong từng
              trận đấu.
            </span>
            <div className={styles.landingPageButtonContainer}>
              <Link href="/home" className={styles.landingPageButton}>
                Khám phá ngay
              </Link>
            </div>
          </div>
          <div className={styles.landingPageSliderContainer}>
            <LandingProductSlider />
          </div>
        </div>
      </div>
    </div>
  )
}
