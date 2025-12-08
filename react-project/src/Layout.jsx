import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function Layout() {
  return (
    <>
      <Nav />
      <div><Outlet /></div>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;