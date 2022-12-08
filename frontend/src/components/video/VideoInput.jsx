import React from "react";
import './VideoInput.css';
import {
  Button,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";

const VideoInput = (props) => {
  const { width, height } = props;

  const inputRef = React.useRef();

  const [source, setSource] = React.useState();

  const handleFileChange = (event) => {
    console.log("HANDLE FILE CHANGE")
    const file = event.target.files[0];
    console.log("FILE");
    console.log(file);
    const url = URL.createObjectURL(file);
    setSource(url);
    console.log(url);
    console.log(file);
    console.log(source);
    props.setVideoFile(file)
  };

  const handleChoose = (event) => {
    inputRef.current.click();
    console.log("INPUT REF: ", inputRef)
  };

  return (
    <Flex>
      <input
        ref={inputRef}
        className="VideoInput_input"
        type="file"
        onChange={handleFileChange}
        accept=".mov,.mp4"
      />
      {!source && <Button onClick={handleChoose}>Select Video</Button>}
      {source && (
        <VStack>
          <Button onClick={handleChoose}>Change Video</Button>
          <video
            className="VideoInput_video"
            width={width}
            height={height}
            controls
            src={source}
          />
        </VStack>
      )}
    </Flex>
  );
}

export default VideoInput;
