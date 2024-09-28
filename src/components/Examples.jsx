import Button from "./Button"
import { EXAMPLES } from "../data";
import { useState } from "react";
export default function(){
    const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = "please select a tab";
  if (selectedTopic) {
    tabContent = (
      <div className="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
    return(
        <section className="examples">
        <h2>Examples</h2>
        <menu className="menu">
          <Button isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</Button>
          <Button isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</Button>
          <Button isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</Button>
          <Button isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</Button>
        </menu>
        {tabContent}
      </section>  
    )
}