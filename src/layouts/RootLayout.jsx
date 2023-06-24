import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

/**
 * base:表示在基本尺寸（也就是在小螢幕或手機上），
 * lg: 2 表示在大尺寸螢幕上（例如平板或小型桌面螢幕），元素應該跨越2列。
 * xl: 1 表示在超大尺寸螢幕上（例如大型桌面螢幕），元素應該只跨越1列。這樣的設定允許元素在不同尺寸的螢幕上展現出不同的版面配置，進行響應式設計。 */

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6,1fr)" bg="gray.50">
      <GridItem
        as="aside"
        bg="brand.500"
        minHeight={{ lg: '100vh' }}
        p={{ base: '20px', lg: '30px' }}
        colSpan={{ base: 6, lg: 2, xl: 1 }}
      >
        <Sidebar />
      </GridItem>
      <GridItem as="main" p="30px" colSpan={{ base: 6, lg: 4, xl: 5 }}>
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
