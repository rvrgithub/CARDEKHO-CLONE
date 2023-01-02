import { TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Slider } from '../Slider/Slider';

export const Option = ({data}) => {
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
  <Slider data={title}/>
 </>
  )
}
