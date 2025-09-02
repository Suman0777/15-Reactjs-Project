import React, { useState } from 'react'
import QRCode from "qrcode.react";


export default function QrCodeGenerate() {
    const [qrcode, setQrcode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerateCode() {
        setQrcode(input);
    }

    return (
        <div>
            <h1>Qr code Generator</h1>
            <div>
                <input
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    name="qr-code"
                    placeholder="Enter the Data to Generate the Qr Code"
                />
                <button onClick={handleGenerateCode}>Generate Button</button>
                <div>
                    <QRCode
                        id="qr-code-value"
                        value={qrcode}
                        size={400}
                    />
                </div>
            </div>
        </div>
    );
}