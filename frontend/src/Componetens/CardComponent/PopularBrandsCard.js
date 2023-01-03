import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
export const PopularBrandsCard = ({ data }) => {
  // console.log("cardComponents", data);
  return (
    <Card sx={{padding:0, maxWidth: "100%"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data?.image}
          alt="green iguana"
        />
        <CardContent> 
          <Typography variant="body1" color="#231509">
            {data?.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
