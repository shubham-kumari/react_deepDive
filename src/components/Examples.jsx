import Button from "./Button"
import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";
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
      <Section className="examples" title="EXAMPLES">
        {/* <h2>Examples</h2> */}
        <Tabs className="menu" buttonsConatainer="menu" buttons={
          <>
          <Button isSelected={selectedTopic === 'components'} /* onSelect */ onClick={() => handleSelect('components')}>Components</Button>
          <Button isSelected={selectedTopic === 'props'} /* onSelect */ onClick={() => handleSelect('props')}>Props</Button>
          <Button isSelected={selectedTopic === 'jsx'} /* onSelect */ onClick={() => handleSelect('jsx')}>JSX</Button>
          <Button isSelected={selectedTopic === 'state'} /* onSelect */ onClick={() => handleSelect('state')}>State</Button>
          </>
        }>
          {tabContent}

        </Tabs>
        <menu className="menu">
          
        </menu>
        
      </Section>
       
    )
}