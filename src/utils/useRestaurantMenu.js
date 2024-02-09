import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const res = await fetch(
      MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );

    const jsonData = await res.json();
    setResInfo(jsonData.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
