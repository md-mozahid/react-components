import React, { useState } from 'react'
import ToastMessage from '../toastMessage/toastMessage'
import Button from './button'
// import { BsCheckCircle, BsExclamationCircle, BsXCircle } from 'react-icons/bs'

const Buttons = () => {
  const [msg, setMsg] = useState(null)
  const [open, setOpen] = useState(false)

//   const toastMessage = (text) => {
//     setMsg(text)
//     setOpen(true)
//   }
  const toastMessage = (text) => {
    let toast = document.createElement('div')
    toast.classList.add('toast')
    toast.innerHTML = msg
    toastBox.appendChild(toast)

    if (text.includes('error')) {
      toast.classList.add('error')
    }

    if (text.includes('Invalid')) {
      toast.classList.add('invalid')
    }

    setTimeout(() => {
      toast.remove()
    }, 3000)
  }

  let successMsg = 'Successfully submitted'
  let errorMsg = 'Please fix the error'
  let invalidMsg = 'Invalid input, check again'

  return (
    <>
      <div className="space-x-5 mt-10 text-white relative">
        <Button
          className="bg-green-500"
          type="button"
          //   onClick={() => toastMessage('You clicked success button')}>
          onClick={() => toastMessage(successMsg)}>
          Success
        </Button>
        <Button
          className="bg-yellow-500"
          onClick={() => toastMessage(errorMsg)}>
          Error
        </Button>
        <Button
          className="bg-rose-500"
          onClick={() => toastMessage(invalidMsg)}>
          Invalid
        </Button>

        <div>
          {open && <ToastMessage msg={msg} open={open} setOpen={setOpen} />}
        </div>
      </div>
    </>
  )
}

export default Buttons
