/* eslint-disable react/prop-types */

import { Block } from "jsxstyle";
function MarkUp(props) {
    const { color, rgb, onChange } = props

    return (
     <Block  backgroundColor={color} className="container">
         <div className="wrapper">
             <label htmlFor="hex">Converter HEX to RGB</label>
             <input className="input" type="text" id="hex" onChange={onChange} placeholder="Enter HEX"/>
             <div className="rgb">{rgb}</div>
         </div>
     </Block>
  )
}
export default MarkUp
