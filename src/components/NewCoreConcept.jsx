import { CORE_CONCEPTS } from "../data"
import { CoreConcept } from "./CoreConcept"

export default function NewCoreConcept(){
    
    return(
        <>
        <section className="core-concept">
          <h2>Core Concepts</h2>
          {/* array of jsx elementss */}
          {/* {[<p>hello</p>, <p>world</p>]} */}

          {/* we ca convert an array to array of jsx elements with the help of map */}
          <ul className="core-cncept-element">
            {CORE_CONCEPTS.map((e) => 
                <CoreConcept key={e.index} {...e} className="core-concept-item" />              
            )}
            {/* <ul className="core-cncept-element">
            <CoreConcept {...CORE_CONCEPTS[0]} className="core-concept-item" />
            <CoreConcept {...CORE_CONCEPTS[1]} className="core-concept-item" />
            <CoreConcept {...CORE_CONCEPTS[2]} className="core-concept-item" />
            <CoreConcept {...CORE_CONCEPTS[3]} className="core-concept-item" />
          </ul> */}
          </ul>
        </section>
        </>
    )
}
