
import React,{useState} from 'react'
import {motion}from "framer-motion"
import { fadeInOut } from '../animations'

const LoginInput = ({placeholder,
    icon,
     inputState, 
     inputStateFunc,
      type, 
      isSignUp }) => {
        const [isFocus, setIsFocus]= useState(false)
  return (
    <motion.div 
    {...fadeInOut}
    className={`flex items-center justify-center gap-4 bg-slate-500 backdrop:blur-md rounded-md w-full px-2 py-2 ${isFocus ? " shadow-md md:shadow-red-400":"shadow-none"}`}>
        {icon}
     <input type={type} 
    placeholder={placeholder}
     className="w-full h-full bg-slate-500 text-gray-800 text-lg font-semibold  border-none outline-none"
    value={inputState}
    onChange={(e)=>inputStateFunc (e.target.value)}
    onFocus={()=>setIsFocus(true)}
    onBlur={()=>setIsFocus(false)}/>
    </motion.div>
  )
}

export default LoginInput