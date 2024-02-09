import React from "react";

import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/CartSlice";

const ItemList = ({ items }) => {

     const dispatch =  useDispatch(); 

    const handledClicked = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div>
            {items.map((item) => (
                <div data-testid="menuList" key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="font-bold">{item.card.info.name}</span>
                            <span className="block"> ₹ - {item.card.info.price / 100}</span>
                        </div>
                        <p className="font-thin">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12">
                        <div className="pt-4">
                            <button className="bg-green-400 p-1 rounded-md text-sm" onClick={() => handledClicked(item)}>Add +</button>
                        </div>
                        {/* <img src={CDN_URL + item?.card?.info?.imageId} className="w-40" /> */}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;