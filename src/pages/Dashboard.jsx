import { Box, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const boxStyles = {
    p: '10px',
    bg: 'purple.400',
    color: 'white',
    my: '10px',
    textAlign: 'center',
    ':hover': {
      color: 'black',
      bg: 'yellow.400',
    },
  };

  return (
    <Container as="section" maxWidth="60%">
      <Heading m="30px" p="10px">
        Chakra UI Componets
      </Heading>
      <Text color="blue.300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique esse
        molestias ducimus itaque enim laudantium sunt impedit distinctio illo.
        Eaque non voluptatum nemo perferendis quasi? Impedit animi velit rerum
        magni!
      </Text>
      <Box my="30px" p="30px" bg="orange" as="section">
        <Text color="blackAlpha.500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias commodi
          ipsum eius molestias aut eos praesentium hic consequatur et aperiam
          voluptatem dicta eaque, at neque adipisci, velit, quam impedit
          doloribus!
        </Text>
      </Box>
      <Box sx={boxStyles} as={Link} to="/profile">
        JACKY LAI
      </Box>
    </Container>
  );
};

export default Dashboard;
