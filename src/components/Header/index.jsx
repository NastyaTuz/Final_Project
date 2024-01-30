import logo from './icons/logo.svg'
import cart from './icons/cart.svg'
import s from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {

  return (
    <div className={[s.header_container, 'wrapper'].join(' ')}>
         <img src={logo} alt="logo" />
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
         <img src={cart} alt="cart" />
      
    </div>
  )
}
