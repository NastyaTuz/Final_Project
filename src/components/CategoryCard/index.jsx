import { Link } from "react-router-dom";
import s from "./CategoryCard.module.css";

export default function CategoryCard({title, image, id}) {

  return (
    <div className={[s.category_card, 'wrapper'].join(' ')}>
      <Link className='link' to={"/category/" + id}>
      <img src={`http://localhost:3333${image}`} alt="category_image" />
      <p>{title}</p>
      </Link>
    </div>
  
  );
}
