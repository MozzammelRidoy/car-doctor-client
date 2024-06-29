import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const {_id, title, img, price} = service; 
  return (
    <div className="card w-96 border">
      <figure className="p-6 ">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body  ">
        <h2 className="font-bold text-xl">{title}</h2>
        <div className="card-actions text-[#FF3811] flex justify-between items-center">
        <p>Price : $ {price}</p>
         <Link to={`/checkout/${_id}`}> <button className="font-bold text-xl"><FaArrowRightLong />
         </button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
