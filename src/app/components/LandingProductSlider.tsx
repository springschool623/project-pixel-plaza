// components/LandingProductSlider.js
import Image from 'next/image'
import styles from '../../../styles/LandingProductSlider.module.css'
import React from 'react'

// Khai báo interface cho các custom properties
interface CustomCSSProperties extends React.CSSProperties {
  '--quantity'?: number
  '--position'?: number
}

const LandingProductSlider = () => {
  return (
    <div className={styles.landingProductSliderWrapper}>
      <div
        className={styles.landingProductSlider}
        style={{ '--quantity': 7 } as CustomCSSProperties}
      >
        <div
          className={styles.productSliderItem}
          style={{ '--position': 1 } as CustomCSSProperties}
        >
          <Image
            src="/images/pro_images/black_myth_wukong.jpg"
            alt="black_myth_wukong"
            layout="fill"
          />
        </div>
        <div
          className={styles.productSliderItem}
          style={{ '--position': 2 } as CustomCSSProperties}
        >
          <Image
            src="/images/pro_images/elden_ring.jpg"
            alt="elden_ring"
            layout="fill"
          />
        </div>
        <div
          className={styles.productSliderItem}
          style={{ '--position': 3 } as CustomCSSProperties}
        >
          <Image src="/images/pro_images/fc24.jpg" alt="fc24" layout="fill" />
        </div>
        <div
          className={styles.productSliderItem}
          style={{ '--position': 4 } as CustomCSSProperties}
        >
          <Image
            src="/images/pro_images/fm_2024.jpg"
            alt="fm_2024"
            layout="fill"
          />
        </div>
        <div
          className={styles.productSliderItem}
          style={{ '--position': 5 } as CustomCSSProperties}
        >
          <Image
            src="/images/pro_images/god_of_war_ragnarok.jpg"
            alt="god_of_war_ragnarok"
            layout="fill"
          />
        </div>
        <div
          className={styles.productSliderItem}
          style={{ '--position': 6 } as CustomCSSProperties}
        >
          <Image
            src="/images/pro_images/nioh_2.jpg"
            alt="nioh_2"
            layout="fill"
          />
        </div>
        <div
          className={styles.productSliderItem}
          style={{ '--position': 7 } as CustomCSSProperties}
        >
          <Image
            src="/images/pro_images/sekiro.jpg"
            alt="sekiro"
            layout="fill"
          />
        </div>
      </div>
    </div>
  )
}

export default LandingProductSlider
