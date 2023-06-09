import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import Card from '../components/Card';

const GridListItem = () => {
  return (
    <>
      <Grid templateColumns="repeat(6,1fr)" bg="gray.50">
        <GridItem
          as="aside"
          colSpan="1"
          bg="purple.100"
          minHeight="100vh"
          p="30px"
        >
          <span>sidebar</span>
        </GridItem>
        <GridItem as="main" colSpan="5">
          <Card />
        </GridItem>
      </Grid>
    </>
  );
};

export default GridListItem;
