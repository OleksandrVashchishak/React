import React from 'react'
import QRCode from "react-qr-code";

const SingleRealtyQR = () => {
    return (
        <div className="open-notice__body-phone open-notice__container-shadow">
        <p>
        Відкривайте оголошення на смартфоні
        </p>
        <QRCode value={window.location.href} /> 
    </div>
    )
}

export default SingleRealtyQR
