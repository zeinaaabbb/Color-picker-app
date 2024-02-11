import React, {useState} from 'react'

function ColorPicker() {

  const [color, setColor] = useState("#FFFFFF");



return(
  <div>
    <h1>Color Picker</h1>
    <div className="color-display" style={{backgroundColor: color}}>
      <p>Selcted Color: {color} </p>
    </div>
    <label>Select a color: </label>
    <input type="color" value={color} onChange={handleColorChange}/>
  </div>
  )
}

export default ColorPicker
