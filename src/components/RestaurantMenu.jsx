import React, { useState } from 'react';
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || 
                         resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = (resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || 
                        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
                        .filter(c => c.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    const toggleCategory = (index) => {
        setShowIndex(showIndex === index ? null : index);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="Menu">
            <div className="Menu-a">
                <h1>{name}</h1>
                <p>{cuisines.join(",")} - {costForTwoMessage}</p>
                <h2>Menu</h2>
            </div>
            <div className="List">
                {categories.map((category, i) => (
                    <RestaurantCategory
                        key={category?.card?.card?.title} 
                        data={category?.card?.card}
                        showItems={i === showIndex}
                        onToggle={() => toggleCategory(i)}
                    />
                ))}
            </div>
            <button className="scroll-to-top" onClick={scrollToTop}>↑</button>
        </div>
    );
};

export default RestaurantMenu;
