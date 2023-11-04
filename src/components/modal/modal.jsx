import { useState } from 'react'
import { images } from '../../constant'
import './modal.css'
import ModalItem from './modalItem'

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className="flex items-center justify-center mt-24 ">
        <div className="modal" onClick={() => setModalOpen(true)}>
          <div className="card-item">
            <img className="" src={images.about02} alt="image" />
            <div className="card-title">
              <h3 className="">Project Title.</h3>
            </div>
          </div>
        </div>
        {modalOpen && <ModalItem setModalOpen={setModalOpen} />}
      </div>
    </>
  )
}

export default Modal
