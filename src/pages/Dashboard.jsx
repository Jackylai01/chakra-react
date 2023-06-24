import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { tasks } from '../data/db';

const Dashboard = () => {
  return (
    <>
      <SimpleGrid spacing={10} minChildWidth="300px">
        {tasks &&
          tasks.map(task => (
            <Card key={task?.id} borderTop="8px" borderColor="purple.300">
              <CardHeader>
                <Flex gap={5}>
                  <Avatar src={task?.img} />
                  <Box as="main">
                    <Heading as="h3" size="sm">
                      {task?.title}
                    </Heading>
                    <Text>By {task?.author}</Text>
                  </Box>
                </Flex>
              </CardHeader>

              <CardBody color="brand.400">
                <Text>{task?.description}</Text>
              </CardBody>
              <Divider borderColor="gray.200" />
              <CardFooter>
                <HStack>
                  <Button variant="ghost" leftIcon={<ViewIcon />}>
                    Watch
                  </Button>
                  <Button variant="ghost" leftIcon={<EditIcon />}>
                    Comment
                  </Button>
                </HStack>
              </CardFooter>
            </Card>
          ))}
      </SimpleGrid>
    </>
  );
};

export default Dashboard;
