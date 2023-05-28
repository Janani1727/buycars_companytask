


import {
  Box,
  Flex,
  Avatar,
  // Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';

import  {Link}  from "react-router-dom";

// import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('teal', 'teal')} px={4}>
        <Flex color={"white"} h={16} alignItems={'center'} justifyContent={'space-between'}>
         
         <Link to="/signup">
         <Box >Signup</Box>
         </Link>
         

         <Link to="/login">
         <Box>Login</Box>
         </Link>
         
         <Link to="/addcar">
         <Box>Add Car</Box>
         </Link>

         <Link to="/displaycar">
         <Box> Cars</Box>
         </Link>
         

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {/* <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button> */}

             
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}