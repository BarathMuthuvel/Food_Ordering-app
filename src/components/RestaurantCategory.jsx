import React from 'react'

import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showCategory,setActiveIndex}) => {

    const handleClicked = () => {
        setActiveIndex();
    }

    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClicked}>
                    <span className="font-bold font-mono">{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                {showCategory && <ItemList items={data?.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory;