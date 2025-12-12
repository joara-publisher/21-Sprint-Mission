import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
import Product from './pages/Product';
import GlobalStyle from './styles/GlobalStyle';

function Main() {
  
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Navigate to="/items" replace />} />
          
          <Route path="/items" element={<ProductList />} />
          <Route path="/items/:id" element={<Product />} />
          <Route path="/additem" element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
