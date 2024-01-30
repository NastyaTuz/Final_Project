import s from './Navigation.module.css'

export default function Navigation({ title }) {

  return (
    <div className={s.navigation}>
      <hr />
      <span>{title}</span>
    </div>
  );
}
