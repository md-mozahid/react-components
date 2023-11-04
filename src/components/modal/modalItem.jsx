import { motion } from 'framer-motion'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { images } from '../../constant'
import './modalItem.css'

const ModalItem = ({ setModalOpen }) => {
  return (
    <>
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{
          ease: 'linear',
          duration: 1,
        }}
        className="modal-content centered"
        onClick={() => setModalOpen(false)}>
        <button className="close" onClick={() => setModalOpen(false)}>
          <AiOutlineCloseCircle />
        </button>
        <img src={images.asus} alt="" />
      </motion.div>
    </>
  )
}

export default ModalItem
