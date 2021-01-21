import {useState} from "react";

/** Rendering of the NewBoxForm component 
 * 
 * State:
 * - formData: { height, width, backgroundColor }
 * 
 * Prop:
 * - addBox: function passed from the parent to add Box 
 * 
 * BoxList -> NewBoxForm
 */

function NewBoxForm({ addBox }){
  const initialState = { 
      height: "",
      width: "",
      backgroundColor: "",
    };
  const [formData, setFormData] = useState(initialState);

  /** Send {height, width, backgroundColor} to parent
   *    & clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** render form */
  return (
    <form className="NewBoxForm-container" onSubmit={handleSubmit}>
      <div className="NewBoxForm-height">
        <label htmlFor="height">Height (include units):</label>
        <input
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </div>
      <div className="NewBoxForm-width">
        <label htmlFor="width">Width (include units):</label>
        <input
          id="width"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />
      </div>
      <div className="NewBoxForm-backgroundColor">
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          id="backgroundColor"
          name="backgroundColor"
          value={formData.backgroundColor}
          onChange={handleChange}
        />
      </div>
      <button>Add a new box!</button>
    </form>
  );
}

export default NewBoxForm;