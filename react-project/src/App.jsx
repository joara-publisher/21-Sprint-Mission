import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import ItemList from './pages/ItemList';
import AddItem from './pages/AddItem';
import GlobalStyle from './styles/GlobalStyle';

function Main() {
  
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Navigate to="/items" replace />} />
          
          <Route path="/items" element={<ItemList />} />
          <Route path="/additem" element={<AddItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
