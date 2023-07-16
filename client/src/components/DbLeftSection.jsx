import React from 'react';
import { logo } from '../asset';
import { NavLink } from 'react-router-dom';
import { isNotActiveStyles, isActiveStyles, isActive } from '../utils/styles';

const DbLeftSection = () => {
  return (
    <div
      className="h-full py-2 flex flex-col bg-slate-300 backdrop-blur-md shadow-md min-w-210 w-300 gap-3"
     
    >
      <NavLink to={"/"} className="flex items-center justify-start px-6 gap-4">
        <img src={logo} className="w-12" alt="" />
        <p className="font-semibold text-xl">Odhisika</p>
      </NavLink>
      <hr />
      <ul className="flex flex-col gap-3">
        <NavLink
          to={"/dashboard/home"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-4 border-l-8 border-red-500`
              : isNotActiveStyles
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/dashboard/orders"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-4 border-l-8 border-red-500`
              : isNotActiveStyles
          }
        >
          Orders
        </NavLink>
        <NavLink
          to={"/dashboard/items"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-4 border-l-8 border-red-500`
              : isNotActiveStyles
          }
        >
          Items
        </NavLink>
        <NavLink
          to={"/dashboard/newItems"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-4 border-l-8 border-red-500`
              : isNotActiveStyles
          }
        >
          Add New Items
        </NavLink>
        <NavLink
          to={"/dashboard/users"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-4 border-l-8 border-red-500`
              : isNotActiveStyles
          }
        >
          Users
        </NavLink>
      </ul>

      <div className="w-full justify-center flex h-225 m-auto px-2">
        <div className="w-full h-full rounded-md bg-red-400 flex items-center flex-col justify-center px-3 gap-3">
          <div className="w-12 h-12 borde bg-white rounded-full flex items-center justify-center">
            <p className="text-2xl font-bold text-red-500">?</p>
          </div>
          <p className="text-xl text-primary font-semibold">Help center</p>
          <p className="text-base text-gray-300 text-center">
            Having trouble in your City? Please contact us for more Info
          </p>
          <p className="px-4 py-2 rounded-full bg-primary text-red-400 cursor-pointer">
            Get in touch
          </p>
        </div>
      </div>
    </div>
  );
};

export default DbLeftSection;
