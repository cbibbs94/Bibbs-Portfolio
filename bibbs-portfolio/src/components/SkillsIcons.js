import React from "react";
import IMAGES from "../index2";
import { ImageList, ImageListItem } from "@mui/material/";

const SkillsIcons = () => {
  return (
  <ImageList sx={{width: 500, height: 450, margin: "auto"}} cols={3} rowHeight={350} gap={12}>
    {IMAGES.map((item) => (
        // console.log(item)
      <ImageListItem sx={{width: 20, height: 20}} key={item.id }>
        <img
          src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
          // srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
          
        />
      </ImageListItem>
    ))}
  </ImageList>
  )
};

export default SkillsIcons;