import s from "./CategoryCard.module.css";

export default function CategoryCard({title, image }) {

  return (
    <div className={[s.category_card, 'wrapper'].join(' ')}>
      <img src={`http://localhost:3333${image}`} alt="category_image" />
      <p>{title}</p>
    </div>
  );
}
