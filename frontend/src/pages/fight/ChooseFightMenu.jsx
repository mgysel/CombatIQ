import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import VideoInput from '../../components/video/VideoInput.jsx'
import { ChevronDownIcon } from '@chakra-ui/icons'

const ChooseFightMenu = (props) => {
  const trainings = React.useState(props.trainings)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {props.button_text}
      </MenuButton>
      <MenuList>
        {trainings.map((value, i) => {
          console.log("Training value: ", value)
          return (
            <MenuItem id='i'>{value.title} ({value.date})</MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  );
};

export default ChooseFightMenu;