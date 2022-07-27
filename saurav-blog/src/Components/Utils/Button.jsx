import React from 'react'

export default function Button() {
    const telegramButton= {
        width: '100%',
        padding: '0px 10%',
        textAlign: 'center',
        margin: '10px 0px',
        cursor: 'pointer'
    }
    const telegramButtonMain = {
        backgroundColor:"#004a7f",
        borderRadius:'50px',
        padding: ' 5px 10px',
        width: '100%',
        color:'#fff',
        border:'none',
        fontFamily:'Noto Sans,sans-serif',

    }
  return (
    <div className="telegram-button" style={telegramButton}>
        <div className="telegram-button-container">
            <a href="https://t.me/cricsourav">
                <button style={telegramButtonMain}>Join Our Telegram For 100% Winning Dream11 Team & News</button></a>
        </div>
    </div>
  )
}
