import React, { useState } from 'react'

function ColorPicker () {

    const [color, setColor] = useState("#000000")

    function handleColorChange(event){
        setColor(event.target.value)
    }
    

  return (
    <div className='container'>
    <h1 className='title'>Color Picker</h1>
    <div className='main'>
        <p style={{backgroundColor: color}} className='selected-color'> Selected Color: {color}</p>
    </div>
    <label className='selecting-color'>Set the color</label>
    <input type='color' value={color} onChange={handleColorChange} className='input-selector'/>
    </div>
  )
}

export default ColorPicker