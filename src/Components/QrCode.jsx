import React from 'react'
import qrcode from '../assets/qrcode.png'

const QrCode = () => {
  return (
    <div className='flex justify-center'>
      <img 
        src={qrcode} 
        className='w-full max-w-2xl px-4 sm:px-0' 
        alt="QR Code"
      />
    </div>
  )
}

export default QrCode