import s from './ProductCard.module.css'
import { ROOT_URL } from '../..'
import Button from '../../UI/Button/Button'

export default function ProductCard({title, image, price, discont_price}) {

  return (
    <div className={s.product_card}>
       <img src={ROOT_URL+image} />
       {discont_price && <span>-{discont_price}%</span>}
      <div>
      <Button color={'green'} width={'284px'} text={'Add to Cart'}/>
      </div>
       <p>{title}</p>
       <h3>${price}</h3>
    </div>
  )
}
