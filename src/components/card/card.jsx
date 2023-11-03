import img from '../../assets/img-portfolio/portfolio-01.jpg'
import './card.css'

const Card = () => {
  return (
    <div className="flex justify-around mt-20">
      {/*  */}
      <div className="card-item">
        <img className="" src={img} alt="image" />
        <div className="card-title">
          <h3 className="">Project Title.</h3>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="card-item">
        <img className="" src={img} alt="image" />
        <div className="card-title">
          <h3 className="">Project Title.</h3>
        </div>
      </div>
      {/*  */}
    </div>
  )
}

export default Card
