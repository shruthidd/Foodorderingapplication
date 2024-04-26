import ItemList from "./ItemList";
import { useState } from "react";


  // Show Items is a state variable


 //Accordian 
const RestaurantCategory = ({data, ShowItems, setShowIndex}) => {
   // const [ShowItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowIndex()
        //console.log("cicked")
        //setShowItems(!ShowItems)   // hide and show called toggle features
         }
    //console.log(data)
    return <>
    <div className="w-6/12 bg-gray-50 shadow-lg p-4  mx-auto my-6 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className=" font-bold">{data.title} ({data.itemCards.length})</span>
        <span>⬇️</span>
        
        
        </div>
        {ShowItems && <ItemList items = {data.itemCards}/>}
    </div>
    
    </>
}

 export default RestaurantCategory; 