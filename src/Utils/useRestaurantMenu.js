import { useEffect, useState } from "react";
import { Menu_API } from "./contants";
const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo]=useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
            const data = await fetch(Menu_API+resId);
            const json = await data.json();
            console.log(json.data);
            setResInfo(json.data);
    };

  return resInfo;
}

export default useRestaurantMenu
