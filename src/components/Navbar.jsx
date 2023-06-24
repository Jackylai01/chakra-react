import { UnlockIcon } from '@chakra-ui/icons';
import {
  Avatar,
  AvatarBadge,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useToast,
} from '@chakra-ui/react';
import React from 'react';

/**
 *
 * @returns
 * HStack 元件使用 Flexbox 布局，並添加一些預設的間距和對齊行為，讓水平堆疊變得更簡單
 * Spacer 看作是一種特殊的「彈性盒子」（flex box），它的 flexGrow 屬性被設定為 1，因此它會自動填充其父元件中的剩餘空間。
 */
const Navbar = () => {
  const toast = useToast(); // 透過 useToast 來顯示提示訊息

  const showToast = () => {
    toast({
      title: 'Logout', // 提示訊息標題
      description: 'Successfully logged out', // 提示訊息內容
      duration: 3000, // 顯示時間
      isClosable: true, // 顯示關閉按鈕
      status: 'success', //success, error, warning, info, or toast
      position: 'top',
      icon: <UnlockIcon />,
    });
  };

  return (
    <>
      <Flex as="nav" p="10px" alignItems="center" marginBottom="3rem">
        <Heading as="h1">Jacky Lai</Heading>
        <Spacer />
        <HStack spacing="20px">
          <Avatar src="./img/mario.png">
            <AvatarBadge width="1.3em" bg="teal.300">
              <Text fontSize="xs" color="white">
                3
              </Text>
            </AvatarBadge>
          </Avatar>
          <Text>sn185672@gmail.com</Text>
          <Button colorScheme="purple" onClick={showToast}>
            Logout
          </Button>
        </HStack>
      </Flex>
    </>
  );
};

export default Navbar;
