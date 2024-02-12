import logo from './icons/logo.svg'
import cart from './icons/cart.svg'
import s from './Header.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {

  const {countItems} = useSelector(store => store.cart)

  return (
    <header className={[s.header_container, 'wrapper'].join(' ')}>
      <Link to={'/'} className='link'>
         <img src={logo} alt="logo" />
      </Link>
         <nav> 
          <Link to={'/'} className='link'>
            <p>Main Page</p>
          </Link>
          <Link  to={'/categories'} className='link'>
            <p>Categories</p>
          </Link>
          <Link to={'/products/all'} className='link'>
            <p>All products</p>
          </Link>
          <Link to={'/products/sales'} className='link'>
            <p>All sales</p>
          </Link>
         </nav>
         <Link to={'/cart'} className='link'>
          <div>
          {countItems > 0 && <span className={s.cart_counter}>{countItems}</span>}
         <img src={cart} alt="cart" />
          </div>
         </Link>
      
    </header>
  )
}
