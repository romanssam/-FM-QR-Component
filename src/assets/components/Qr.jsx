import React from 'react';

const Qr = () => {
    return (
        <div className='qrComponent'>
            <div className="qrComponent__image">
                <img src='/src/assets/images/QrImage.png' alt="qrcode"/>
            </div>
            <div className="qrComponent__lead">
                <span>Improve your front-end skills by building projects</span>
                <span>Scan the QR-code to visit Frontend Mentor and take your coding skills to next level</span>
            </div>
        </div>
    );
};

export default Qr;
