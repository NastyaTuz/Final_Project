import { Link } from 'react-router-dom';
import s from './Navigation.module.css'

export default function Navigation({ title, link}) {

  return (
    <div className={s.navigation}>
      <hr/>
      <Link className='link' to={`${link}`}>
      <span>{title}</span>
      </Link>
    </div>
  );
}
