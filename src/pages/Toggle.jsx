import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useBoolean,
  useControllableState,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

const Toggle = () => {
  const [flag, setFlag] = useBoolean();
  const [touch, setTouch] = useBoolean();
  const [quantity, setQuantity] = useControllableState({ defaultValue: 0 });
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex direction="column" spacing={10}>
        <Box
          as="main"
          w="100%"
          h="50px"
          bg={`${flag ? 'gray.300' : 'red.300'}`}
          mb={10}
        >
          <p> 改變顏色: {flag.toString()}</p>
        </Box>
        <Button onClick={setFlag.toggle} bg="green.300" variant="ghost">
          點擊我
        </Button>
        <Box
          as="p"
          onMouseEnter={setTouch.on}
          onMouseLeave={setTouch.off}
          mt={10}
        >
          {touch ? '滑鼠靠過來了' : '滑鼠離開了'}
        </Box>
        <Button onClick={() => setQuantity(quantity - 1)}>-</Button>
        <Box as="span" w="200px" mx="24px">
          {quantity}
        </Box>
        <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
      </Flex>
      <Button onClick={onOpen}>Open Drawer</Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Toggle;
