import { images } from '../../constant'
import './absolute.css'

const Absolute = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="rel-abs">
        <div className="box1">Absolute</div>
        <div className="box2">Absolute</div>
        <div className="circle">
          <div className="overlay-circle"></div>
        </div>
        <div className="icons">
          {[images.flutter, images.redux, images.git].map((item, index) => (
            <div className="img-circle" key={index}>
              <img src={item} alt="profile_circles" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Absolute
