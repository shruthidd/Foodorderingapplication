import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resid) => {
    const [Menu, setMenu] = useState(null);
    
       useEffect(() => {
        fetchData ();
       }, [])

 const fetchData = async () => {
    const data =  await fetch(MENU_URL + resid);
    const json = await data.json();
    console.log(json)
    setMenu(json.data);
    
 }
    return Menu;
}
export default useRestaurantMenu;