import CategoryFilter from '@/app/components/CategoryFilter'
import styles from '../../../../../styles/CategoryPage.module.css'

export default function Xbox() {
  return (
    <div className={styles.categoryPageBody}>
      <div className={styles.categoryPageHeader}>
        <h1 className={styles.categoryPageTitle}>#Theloai</h1>
      </div>
      <CategoryFilter />
    </div>
  )
}
