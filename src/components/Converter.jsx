import { useState } from 'react';
import MarkUp from './MarkUp';

const hex2rgb = (c)  => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
    return result ? `rgb(${parseInt(result[1], 16)},
                         ${parseInt(result[2], 16)},
                         ${parseInt(result[3], 16)})`
                  : null;
}
function Converter() {
   const [state, setState] = useState({
       hex:'#ffffff',
       rgb: ''
   });

    const onChange =(event) => {
       const { target } = event;
       const { value } = target;
       const rgb = hex2rgb(value)

        if(value.length < 7){
            setState({
                hex: '#ffffff',
                rgb: ''
            })
            return
        }

        if(rgb){
            setState({
                hex: value,
                rgb
            })
            return
        }

        setState({
            hex: '#bd5c51',
            rgb: 'Mistake'
        })
    }

    return (
        <>
            <MarkUp color={state.hex} rgb={state.rgb} onChange={onChange} />
        </>
    )
}

export default Converter
