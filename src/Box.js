/** Rendering of the Box component 
 * 
 * Props:
 * - height
 * - width 
 * - backgroundColor
 * - removeBox: function passed down from the parent
 *    to remove itself
 * 
 * BoxList -> Box
 */

function Box({ height, width, backgroundColor, removeBox }){
  return (
    <div className="Box-container">
      <div className="Box"
        style={{ width, height, backgroundColor }}>
      </div>
      <button className="Box-remove-btn"
      onClick={removeBox}>
        Remove The Box!
      </button>
    </div>
  )
}

export default Box;