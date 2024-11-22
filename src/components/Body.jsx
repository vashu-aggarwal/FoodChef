import React from 'react';
import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
    const onlineStatus=useOnlineStatus();
    const [listOfResturant, setListOfResturant] = useState([]);
    const [searchtext, setsearchtext] = useState("");
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const data = await fetch(
            "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
        );
    
        const json = await data.json();
        console.log(json);
        const API_DATA = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfResturant(API_DATA);
        setfilteredRestaurants(API_DATA);
    };
    
    const filterTopRated = () => {
        const filteredList = listOfResturant.filter(
            (res) => res.info.avgRating >= 4.5
        );
        setfilteredRestaurants(filteredList);
    };

    const resetFilter = () => {
        setfilteredRestaurants(listOfResturant);
    };

    const handleSearch = () => {
        const searchResults = listOfResturant.filter((res) =>
            res.info.name.toLowerCase().includes(searchtext.toLowerCase())
        );
        setfilteredRestaurants(searchResults);
    };
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    if(onlineStatus===false)
        return <h1>No Internet Connection. Please check your internet connection and try again.</h1>
    
    if (!Array.isArray(listOfResturant) || listOfResturant.length === 0) {
        return <Shimmer />;
    }
    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={filterTopRated}
                >
                    Top Rated Resturant
                </button>
                <button
                    className="filter-btn"
                    onClick={resetFilter}
                >
                    Reset filter
                </button>

                <div className="Search">
                    <input
                        type="text"
                        className="Search-box"
                        placeholder="Search..."
                        value={searchtext}
                        onChange={(e) => setsearchtext(e.target.value)}
                    />
                    <button className="search-button" onClick={handleSearch}>
                        Search🔍
                    </button>
                </div>
            </div>
            <div className="res-Container">
                {filteredRestaurants.map((restaurant) => (
                   <Link className="res-reset"
                   key={restaurant.info.id}
                   to={"/restaurants/"+restaurant.info.id}
                   >         
                    <ResturantCard resData={restaurant} />                   
                    </Link>
                ))}
            </div>
            <button className="scroll-to-top" onClick={scrollToTop}>↑</button>
        </div>
    );
};

export default Body;
