import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, onToggle }) => {
    const handleClick = () => {
        onToggle();
    };

    return (
        <div>
            <div className="Items">
                <div className="Item1" onClick={handleClick}>
                    <span>{data.title} ({data.itemCards.length})</span>
                    <span>{showItems ? '🔼' : '🔽'}</span>
                </div>  
                {showItems && <ItemList  Items={data.itemCards} showRemoveButton={false} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;
