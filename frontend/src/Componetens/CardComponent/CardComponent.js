import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Divider } from "@mui/material";
import { red } from '@mui/material/colors';
const color = red[500];
export const CardComponent = ({ data }) => {
  console.log("cardComponents", data);
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
          <Typography variant="body1" color="#231509">
            {data?.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" >
          Check January Offers
        </Button>
        {/* <ThemeProvider theme={theme}>
  <Button color="neutral" variant="contained">
    neutral
  </Button>
</ThemeProvider> */}
      </CardActions>
    </Card>
  );
};
