import { CDN_URL } from "../Utils/contants";
import React from 'react';

const ResturantCard=(props)=>{
    const {resData}=props
    const{
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        
    }=resData?.info;
    // const{deliveryTime}=resData?.info?.sla
    return(
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")} </h4>
            <h4>{avgRating} stars⭐</h4>
            <h4>{costForTwo}</h4>
            {/* <h4>{deliveryTime} minutes</h4> */}
        </div>
    );
};
//higher order function
export const withPromotedLabel=(ResturantCard)=>{
    return (props)=>{
        return (
            <div>
                <label >Promoted</label>
                <ResturantCard {...props}/>
            </div>
        )
    }
}

export default ResturantCard;