import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../api';
import { setAllProducts } from '../context/actions/productActions';
import {CChart} from "@coreui/react-chartjs"

const DbHome = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const drinks = products?.filter((item)=> item.product_category=== "drinks");
  const deserts = products?.filter((item)=> item.product_category=== "deserts");
  const fruits = products?.filter((item)=> item.product_category=== "fruits");
  const rice  = products?.filter((item)=> item.product_category=== "rice");
  const curry = products?.filter((item)=> item.product_category=== "curry");
  const chinese = products?.filter((item)=> item.product_category=== "chinese");
  const bread = products?.filter((item)=> item.product_category=== "bread");

  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  }, []);

  return (
    <div  className="items-center justify-center flex flex-col w-full h-full pt-6">
      <div className=" grid w-full grid-cols-1 md:grid-cols-2 gap-4 h-full">
        <div className=' flex items-center justify-center'>
         <div className=" w-460 md:w-508">
         <CChart
          type="bar"
          data={{
            labels: ['Drinks', 'Deserts', 'Fruits', 'Rice', 'Curry', 'Chinese', 'Bread'],
            datasets: [
              {
                label: 'Category wise Count ',
                backgroundColor: '#f87979',
                data: [drinks?.length, deserts?.length, fruits?.length, rice?.length, curry?.length, chinese?.length, bread?.length],
              },
            ],
          }}
          labels="months"
        />
         </div>
        </div>
        <div className=' justify-center  flex items-center w-full h-full'>
          <div className=" w-275 md:w-460">
          <CChart
           type="doughnut"
            data={{
              labels: ['Orders', "Delievered", "Canceled", "Paid", "Not paid"],
              datasets: [
                {
                  backgroundColor: ['#56C0F5', '#06ED2F', '#C81408', '#2308C8' ,"#C80868"],
                  data: [40, 20, 80, 10,50],
                },
              ],
            }}
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default DbHome;
