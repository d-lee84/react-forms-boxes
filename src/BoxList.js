import {useState} from "react";
import { v4 as uuid } from 'uuid'; 

import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/** Rendering of the BoxList component 
 * 
 * State:
 * - boxes = [{id, height, width, backgroundColor}, ...]
 * 
 * App -> BoxList -> {Box, NewBoxForm}
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /** Remove the box from the boxes state */
  function removeBox(id) {
    setBoxes((boxes) => (
      boxes.filter((box) => box.id !== id)
    ))
  }

  /** Add box to the boxes state
   *  newBoxData: {height, width, backgroundColor}
   */
  function addBox(newBoxData) {
    setBoxes((boxes) => (
      [
        ...boxes,
        {id: uuid(), ...newBoxData}
      ]
    ))
  }

  let renderBoxes = boxes.map((b) => (
    <Box 
      height={b.height} 
      width={b.width} 
      backgroundColor={b.backgroundColor}
      removeBox={() => removeBox(b.id)}/>
  ))

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {renderBoxes}
    </div>
  )
}

export default BoxList;