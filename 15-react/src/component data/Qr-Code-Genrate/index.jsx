import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import './style.css'

export default function Qr() {
    const [input, setInput] = useState("");
    const [val, setval] = useState("");
    function Handleclick(){
        setval(input)
    }
    return (
    <div>
        <h1>Qr Code generate</h1>
        <div  className='input-box'>
            <input onChange={(e) => setInput(e.target.value)} type="text" name='qrcode' placeholder='Enter the text to generate'/>
            <button onClick={Handleclick} > Generate The Qr Code</button>
        </div>
        <div style={{marginTop : '20px'}}>
            <QRCode value={val} />
        </div>
    </div>
  )
}
