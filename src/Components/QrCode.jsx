import React from 'react'
import qrcode from '../assets/qrcode.png'

const QrCode = () => {
  return (
    <div className='flex justify-center '><img src={qrcode} className='max-w-2xl' alt="" /></div>
  )
}

export default QrCode