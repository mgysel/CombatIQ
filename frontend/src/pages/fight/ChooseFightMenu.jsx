import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import VideoInput from '../../components/video/VideoInput.jsx'
import { ChevronDownIcon } from '@chakra-ui/icons'

const ChooseFightMenu = (props) => {

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {props.button_text}
      </MenuButton>
      <MenuList>
        <MenuItem>Fight 1</MenuItem>
        <MenuItem>Fight 2</MenuItem>
        <MenuItem>Fight 3</MenuItem>
        <MenuItem>Fight 4</MenuItem>
        <MenuItem>Fight 5</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ChooseFightMenu;