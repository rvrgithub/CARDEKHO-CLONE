import { TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { TrusedUsedCarsSlider } from '../Slider/TrustedUsedCarsSlider';
export const TrustedUsedCarsOption = ({data}) => {
    // console.log("dataOptions",data)
const options = data?.options;
const [title,setTitle] = useState("");
useEffect(()=>{
    setTitle(options?.[0]);
},[options])
console.log("title",title)
  return (
 <>
       <TableHead >
    <TableRow>
    {options?.map((e)=>(
        <TableCell onClick={()=>setTitle(e)}>{e}</TableCell>
    ))}
    </TableRow>
  </TableHead>
  <TrusedUsedCarsSlider data={title}/>
 </>
  )
}
