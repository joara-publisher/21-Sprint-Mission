import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import ItemListPage from './Pages/ItemListPage';

function Main() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Navigate to="/items" replace />} />
          
          
          <Route path="/items" element={<ItemListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
