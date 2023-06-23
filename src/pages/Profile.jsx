import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
} from '@chakra-ui/icons';
import {
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import React from 'react';

const Profile = () => {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Profile</Tab>
        <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email:jacky@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              at incidunt repudiandae voluptatum molestiae rerum ipsum quis ex
              laudantium fugiat.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
              exercitationem voluptatum velit nihil sequi eaque doloremque
              impedit nemo ducimus non.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ipsum quis assumenda pariatur, ipsam eos laborum? Iste
              architecto cum exercitationem delectus, consectetur vero autem
              modi animi itaque porro magni recusandae!
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Profile;
