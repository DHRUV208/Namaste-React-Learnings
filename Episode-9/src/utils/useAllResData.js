import { useEffect, useState } from "react";
import { RESTAURANT_API } from "./constants";

const useAllResData = () => {

    const [allResData, setAllResData] = useState(null);
    // const [filteredList, setFilteredList] = useState([]);

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_API);
        const json = await data.json();
        setAllResData(json.data);
        // setFilteredList(json.data);
  
    }
    return allResData;
        // filteredList
        // );
} 

export default useAllResData;