import React from 'react';
import { CDN_URL } from '../Utils/contants';
import { useDispatch } from 'react-redux';
import { addItems, removeItems } from '../Utils/cartSlice'; 
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const ItemList = ({ Items, showRemoveButton }) => {
    const dispatch = useDispatch();

    const handleAddItems = (item) => {
        dispatch(addItems(item)); // Dispatch action to add or increase quantity
        toast.success("Item added successfully", {
            autoClose: 2000, // Notification will close after 5000 milliseconds (5 seconds)
        });
    };

    const handleRemoveItems = (itemId) => {
        dispatch(removeItems(itemId)); // Dispatch action to remove or decrease quantity
        toast.success("Item removed successfully",{
            autoClose: 2000, // Notification will close after 5000 milliseconds (5 seconds)
        });
    };

    if (!Array.isArray(Items)) {
        return <p className="no-items">No items available</p>;
    }

    return (
        <div className="item-list">
            {Items.map((item) => (
                <div key={item.card.info.id} className="item-card">
                    <div className="item-details">
                        <div className='item-span'>
                            <span>{item.card.info.name}</span>
                            <span>- ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p>{item.card.info.description}</p>
                    </div>
                    <div className="image-container">
                        <img src={CDN_URL + item.card.info.imageId} alt="" />
                        <div className="button-container">
                            {showRemoveButton && (
                            <button className="remove-button" onClick={() => handleRemoveItems(item.card.info.id)}>
                                    <MdDelete />
                            </button>
                        )}
                            <button className="beautiful-button" onClick={() => handleAddItems(item)}>
                                Add+
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
