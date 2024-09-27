import Button from "./Button";


export function CoreConcept({ image, title, description }) {
  return (
  
    <section>
      <li className="flex flex-col justify-center items-center">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    </section>
   
  
  );
}
