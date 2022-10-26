

import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import {  useNavigate } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


export default function NavBar({count}) {
  const { colorMode, toggleColorMode } = useColorMode();
 
  const navigate = useNavigate()
  return (
    <>
      <Box bg={useColorModeValue('blue.100', 'gray.900')} px={4} marginBottom={"20px"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box><Avatar
                   cursor={'pointer'}
                    size={'sm'}
                    src={'https://static.vecteezy.com/system/resources/previews/000/378/951/original/home-vector-icon.jpg'}
                    onClick={()=>navigate("/")}
                  /></Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
                <Button onClick={()=>navigate("/watchlist")}>Watch List</Button>
              <Button onClick={toggleColorMode} marginLeft="5px">
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}





