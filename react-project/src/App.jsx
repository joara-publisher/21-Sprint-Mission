import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import ItemList from './pages/itemList';

function Main() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Navigate to="/items" replace />} />
          
          
          <Route path="/items" element={<ItemList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
