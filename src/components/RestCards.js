import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";

const RestCards = (props) => {
    const { resData } = props;
    //console.log(resData);
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      
    } = resData;


    const {loggIn} = useContext(userContext);
    return (
      <div className="flex flex-wrap " >
      <div className=" m-5 p-2 w-[230px] h-[430px] bg-pink-100  rounded-lg" data-testid = "restcard" >
         
         <img
          className="rounded-lg w-full "
          alt="foodimg"
          src={ CDN_URL
             +
            cloudinaryImageId
          }
        />
        <h4 className="font-bold">{name}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
        <h5>{resData.sla.deliveryTime} minutes</h5>
        <h4>{loggIn}</h4>
      </div>
      </div>
    );
  };

  export default RestCards;