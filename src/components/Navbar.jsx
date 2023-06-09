import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React from 'react';

/**
 *
 * @returns
 * HStack 元件使用 Flexbox 布局，並添加一些預設的間距和對齊行為，讓水平堆疊變得更簡單
 * Spacer 看作是一種特殊的「彈性盒子」（flex box），它的 flexGrow 屬性被設定為 1，因此它會自動填充其父元件中的剩餘空間。
 */
const Navbar = () => {
  return (
    <>
      <Flex as="nav" p="10px" alignItems="center">
        <Heading as="h1">Jacky Lai</Heading>
        <Spacer />
        <HStack spacing="20px">
          <Box as="span" bg="gray.200" p="10px">
            J
          </Box>
          <Text>sn185672@gmail.com</Text>
          <Button>Logout</Button>
        </HStack>
      </Flex>
      {/* <Flex bg="gray.200" justify="space-around" color="white" wrap="wrap">
        <Box w="150px" height="50px" bg="red">
          1
        </Box>
        <Box w="150px" height="50px" bg="yellow.200">
          2
        </Box>
        <Box w="150px" height="50px" bg="black">
          3
        </Box>
        <Box w="150px" height="50px" bg="blue" flexGrow="2">
          4
        </Box>
        <Box w="150px" height="50px" bg="green" flexGrow="4">
          5
        </Box>
      </Flex> */}
    </>
  );
};

export default Navbar;
