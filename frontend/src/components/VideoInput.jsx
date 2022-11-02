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
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
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
      {!source && <Button onClick={handleChoose}>Upload a Video</Button>}
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
