import React, { Component, useState, useRef } from 'react'
import { 
  Box, 
  Button,
  Flex,
  HStack,
  Image, 
  Text, 
  LinkBox, 
  LinkOverlay,
  VStack,
  propNames,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import ImageUploading from "react-images-uploading";

const ImageUpload = (props) => {
  console.log("IMAGES UPLOAD")
  console.log(props)

  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <Flex>
       <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <Image ml='20px' mb='10px' style={{ width: "300px" }} src={image['data_url']} />
              </div>
            ))}
            <Button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </Button>
            &nbsp;
            <Button onClick={onImageRemoveAll}>Remove all images</Button>
          </div>
        )}
      </ImageUploading>
    </Flex>
  );
};

export default ImageUpload;