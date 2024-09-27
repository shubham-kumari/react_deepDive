function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export function Header() {
  const reactDescriptions = ["Fundamental", "Crucial", "Core"];

  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header className="text-white flex flex-col items-center justify-center">
      <img
        src="https://scientyficworld.org/wp-content/uploads/2022/08/React-js.jpg"
        alt="Stylized atom"
      />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
