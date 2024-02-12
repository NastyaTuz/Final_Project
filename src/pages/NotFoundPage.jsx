import React from 'react'
import { Link} from 'react-router-dom'
import Button from '../UI/Button/Button'
import notFound from './media/images/404.png'

export default function NotFoundPage() {
    

  return (
    <div className='not_found_page'>
        <img src={notFound} alt="not_found_Page" />
        <h2>Page Not Found</h2>
        <p>We're sorry, the page you requested could not be found.
Please go back to the homepage.</p>
        <Link to={'/'}>
        <Button text={'Go Home'} color={'green'} width={'209px'} />
        </Link>
    </div>
  )
}
