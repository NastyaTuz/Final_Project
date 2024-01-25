import logo from './icons/logo.svg'
import cart from './icons/cart.svg'
import s from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {

 

  return (
    <div className={[s.header_container, 'wrapper'].join(' ')}>
         <img src={logo} alt="logo" />
         <nav> 
          <Link to={'/'} className={s.link}>
            <p>Main Page</p>
          </Link>
          <Link to={'/categories'} className={s.link}>
            <p>Categories</p>
          </Link>
            <p>All products</p>
            <p>All sales</p>
         </nav>
         <img src={cart} alt="cart" />
      
    </div>
  )
}
