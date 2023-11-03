import { images } from '../../constant'
import './modalItem.css'

const ModalItem = ({modalOpen, setModalOpen}) => {
  return (
    <>
      <div className="card-item">
        <img className="" src={images.about03} alt="image" />
        <div className="card-title">
          <h3 className="">Project Title.</h3>
        </div>
      </div>
    </>
  )
}

export default ModalItem
