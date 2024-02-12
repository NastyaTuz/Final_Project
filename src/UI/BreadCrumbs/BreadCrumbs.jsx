import { Link } from 'react-router-dom'
import s from './BreadCrumbs.module.css'
import useBreadcrumbs from 'use-react-router-breadcrumbs'


export default function BreadCrumbs() {

    const crumbs = useBreadcrumbs()

  return (
    <ul className={`wrapper ${s.bread_crumbs}`}>
        {crumbs.map((el, index) => 
                <li className={s.crumb} key={index}>
            <Link className='link' to={el.match.pathname}>
            {el.breadcrumb}
            </Link>
            </li>
            )}
      
    </ul>
  )
}


