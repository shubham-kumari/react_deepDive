import Button from "./Button";
import '../App.css'

export function CoreConcept({ image, title, description }) {
  return (
  
    <section>
      <li className="main-core-concept">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    </section>
   
  
  );
}
