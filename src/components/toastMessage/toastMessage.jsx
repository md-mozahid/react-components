import { useState } from 'react'
import './toastMessage.css'

const ToastMessage = () => {
  const [msg, setMsg] = useState(null)
  const [open, setOpen] = useState(false)

  const handleMessage = (text) => {
    // let toast = document.createElement('div')
    // toast.classList.add('toast')
    // toast.innerHTML = msg
    // toastBox.appendChild(toast)
    setMsg(text)
    setOpen(true)

    // if (text.includes('error')) {
    //   toast.classList.add('error')
    // }

    // if (text.includes('Invalid')) {
    //   toast.classList.add('invalid')
    // }
    
    setTimeout(() => {
      setOpen(false)
    }, 3000)
  }

  let successMsg = 'Successfully submitted'
  let errorMsg = 'Please fix the error'
  let invalidMsg = 'Invalid input, check again'

  return (
    <>
      <div className="space-x-5 mt-10 text-white relative">
        <button
          className="bg-green-500"
          type="button"
          //   onClick={() => toastMessage('You clicked success button')}>
          onClick={() => handleMessage(successMsg)}>
          Success
        </button>
        <button
          className="bg-yellow-500"
          onClick={() => handleMessage(errorMsg)}>
          Error
        </button>
        <button
          className="bg-rose-500"
          onClick={() => handleMessage(invalidMsg)}>
          Invalid
        </button>
      </div>

      {/* ==================================== */}

      {open && (
        <div className="toastBox">
          <div className="toast-msg">{msg}</div>
        </div>
      )}
    </>
  )
}

export default ToastMessage
