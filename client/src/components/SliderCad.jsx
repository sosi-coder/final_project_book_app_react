import React from 'react';
import { buttonClick } from '../animations';
import {motion} from "framer-motion"
import { IoBasket } from "../asset/icons";
import { useDispatch, useSelector } from 'react-redux';
import { addNewItemToCart, getAllCartItems } from '../api';
import { alertNull, alertSuccess } from '../context/actions/alertActions'

const SliderCad = ({ data, index }) => {
  const user = useSelector((state)=>state.user);
  const dispatch= useDispatch();
 const SendToCart =()=>{
  addNewItemToCart(user?. user_id, data).then(res=>{
    dispatch(alertSuccess("Added to card"))
    getAllCartItems(user?.user_id).then((items)=>{
      console.log(items)
    })
    setInterval(()=>{
      dispatch(alertNull("Removed from cart"))
    } ,3000)
  })
 }

  return (
    <div className="bg-primary hover:drop-shadow-lg backdrop-blur-md rounded-xl flex items-center justify-between relative px-4 py-2 w-full md:w-340 md:min-w-350 gap-3">
      <img src={data.imageURL} className="w-40 h-40 md:w-32 md:mt-16 object-contain" alt="" />
      <div className="relative pt-12">
        <p className="text-xl text-headingColor font-semibold">{data.product_name}</p>
        <p className="text-lg font-semibold text-red-500 items-center justify-center gap-1">${parseFloat(data.product_price).toFixed(2)}</p>

        <motion.div {...buttonClick}
        onClick={SendToCart}
         className=" w-8 h-8 rounded-full bg-red-500 flex items-center justify-center absolute -top-4 right-2">
            <IoBasket className=" text-2xl text-primary"/> 
        </motion.div>
      </div>
    </div>
  );
};

export default SliderCad;
