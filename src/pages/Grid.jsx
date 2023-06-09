import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

/*SimpleGrid的原理是使用CSS Grid布局，它的API和Grid布局的API一致，所以我们可以直接使用CSS Grid布局的API来使用SimpleGrid组件。*/

const Grid = () => {
  return (
    <SimpleGrid p="10px" columns={5} spacing={5} minChildWidth="350px">
      <Box bg="white" h="300px" w="500px" border="1px solid"></Box>
      <Box bg="white" h="300px" w="500px" border="1px solid"></Box>
      <Box bg="white" h="300px" w="500px" border="1px solid"></Box>
      <Box bg="white" h="300px" w="500px" border="1px solid"></Box>

      <Box bg="white" h="300px" w="500px" border="1px solid"></Box>
      <Box bg="white" h="300px" w="500px" border="1px solid"></Box>
      <Box bg="white" h="300px" w="500px" border="1px solid"></Box>
      <Box bg="white" h="300px" w="500px" border="1px solid"></Box>

      <Box bg="white" h="300px" w="500px" border="1px solid"></Box>
      <Box bg="white" h="300px" w="500px" border="1px solid"></Box>
      <Box bg="white" h="300px" w="500px" border="1px solid"></Box>
      <Box bg="white" h="300px" w="500px" border="1px solid"></Box>
    </SimpleGrid>
  );
};

export default Grid;
