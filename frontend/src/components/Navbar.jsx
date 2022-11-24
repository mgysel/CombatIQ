import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { Link as RouterLink } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { useHistory ,useLocation } from 'react-router-dom';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('gray.800', 'gray.800')}
        color={useColorModeValue('gray.200', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex flex={{ base: 1 }} >
          <Flex as={RouterLink} to={"/"}>
            <Image src='images/combatiq_logo.svg' />
          </Flex>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
          <Menu alignContent='right'>
            <MenuButton as={IconButton} color="gray.700" icon={<FaUser />} ml='70vw'>
              User
            </MenuButton>
            <MenuList color='black'>
              <MenuItem>Nationality</MenuItem>
              <MenuItem>Gender</MenuItem>
              <MenuItem>Birthday</MenuItem>
              <MenuItem>Height & weight</MenuItem>
              <MenuItem>Club</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.100', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.400', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  const location = useLocation()
  console.log(location.pathname)

  function getColor(nav) {
    if (location.pathname === nav) {
      return linkHoverColor
    } else {
      return linkColor
    }
  }

  return (
    <Stack direction={'row'} spacing={4}>
        <Box pt='10px'>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                as={RouterLink}
                to={'/fights'}
                fontSize={'md'}
                fontWeight={500}
                color={getColor('/fights')}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                Fights
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
        <Box pt='10px'>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                as={RouterLink}
                to={'/training'}
                fontSize={'md'}
                fontWeight={500}
                color={getColor('/training')}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                Training
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
        <Box pt='10px'>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                as={RouterLink}
                to={'/trends'}
                fontSize={'md'}
                fontWeight={500}
                color={getColor('/trends')}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                Trends
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
    </Stack>
  );
};