import styles from '../../../../styles/FavoriteProduct.module.css'
import ProductListItem from '@/app/components/ProductListItem'

export default function FavoriteProduct() {
  return (
    <div className={styles.favoriteWrapper}>
      <h2 className={styles.favoriteTitle}>Danh sách yêu thích</h2>
      <div className={styles.favoriteProductList}>
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
      </div>
    </div>
  )
}
