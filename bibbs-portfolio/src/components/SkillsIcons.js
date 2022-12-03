import React from "react";
import IMAGES from "../index2";
import { Box, ImageList, ImageListItem } from "@mui/material/";

function SkillsIcons() {
  return (
    <ImageList
      sx={{
        maxwidth: 400, 
        height: 550, 
        margin: 'auto' }}
      cols={3}
      rowHeight={160}
    >
      {IMAGES.map((item) => (
        // console.log(item)
        <ImageListItem
          sx={{  
          width: 124, 
          height: 124,
          margin: 'auto' 
        }}
          key={item.image}
          
        >
          <img
            src={`${item.image}?w=64&h=64&auto=format`}
            // srcSet={`${item.image}?w=64&h=64&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default SkillsIcons;
