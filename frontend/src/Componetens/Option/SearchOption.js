import { TableCell, TableHead, TableRow } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { SearchedSlider} from "../Slider/SearchedSlider";
import "../../Style/Option.css";

export const SearchOption = ({ data }) => {
  // console.log("dataOptions",data)
  const options = data?.options;
  // console.log("options",options)

  const [title, setTitle] = useState("");
  const [style, setStyle] = useState("text");
  useEffect(() => {
    setTitle(options?.[0]);
  }, [options]);
  console.log("title", title);
  const handleOnClick = (e) => {
    setTitle(e);
    setStyle("border_color");
  };
  return (
    <>
      <TableHead>
        <TableRow>
          {options?.map((e) => (
            <TableCell className="orange-cell" onClick={() => handleOnClick(e)}>
              {e}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <SearchedSlider data={title} />
    </>
  );
};
