import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) => {
    console.log("resId recieved", resId);
    const [resInfo, setResInfo] = useState(null);
    console.log("resInfo just below useState", resInfo);
    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log("json in custom hook",json);
        setResInfo(json.data);
    }
    console.log("resInfo in custom hook", resInfo);
    return resInfo;
}

export default useRestaurantMenu;