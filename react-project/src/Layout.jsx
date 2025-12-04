import { Outlet } from 'react-router-dom';
import './reset.css';
import './global.css';
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