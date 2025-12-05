import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import useResponsivePageSize from "../hooks/useResponsivePageSize";
import ProductListItem from "../components/ProductListItem";
import Button from "../components/Button";
import Pagination from '../components/Pagination';
import Dropdown from '../components/Dropdown';
import Search from "../components/Search";
import styles from "./ItemList.module.css";
import useBestProducts from "../hooks/useBestProducts";
import useProducts from "../hooks/useProducts";

function ItemList () {
  
  const [order, setOrder] = useState('recent');
  const [searchParams, setSearchParams] = useSearchParams();
  const initKeyword = searchParams.get('keyword');
  const [keyword, setKeyword] = useState(initKeyword || '');
  const [currentPage, setCurrentPage] = useState(1);
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const { pageSize, bestPageSize, currentScreen } = useResponsivePageSize();
  const { bestList } = useBestProducts(bestPageSize);
  const { list, totalCount } = useProducts(order, keyword, currentPage, pageSize);
  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }
  
  const changeOrder = (order) => {
    setDropdownOpen(!dropdownOpen);
    setOrder(order);
    setCurrentPage(1);
  }
  
  const changeKeyword = (e) => {
    const keyword = e.target.value;
    setKeyword(keyword);
    setSearchParams(keyword ? {keyword} : {});
    setCurrentPage(1);
  }
  
  const goToAddItem = () => {
    navigate('/additem');
  }
  
  const changePage = (num) => {
    setCurrentPage(num);
  }
  
  return (
    <>
      <div className={styles.itemList}>
          <div className={styles.container}>
            
          <section className={styles.itemListBox}>
            <div className={styles.titleBox}>
              <h2 className={styles.listTitle}>베스트 상품</h2>
            </div>
            <ProductListItem list={bestList} category="bestItemList" />
          </section>
            
          <section className={styles.itemListBox}>
            <div className={styles.titleBox}>
              <h2 className={styles.listTitle}>전체 상품</h2>
              <Button classNames={`button defaultButton ${styles.moButton}`} onClick={goToAddItem}>상품 등록하기</Button>
              <div className={styles.searchSelectBox}>
                <Search changeKeyword={changeKeyword} />
                <Button  classNames={`button defaultButton ${styles.pcButton}`} onClick={goToAddItem}>상품 등록하기</Button>
                <Dropdown isOpen={dropdownOpen} value={order} currentScreen={currentScreen} toggleDropdown={toggleDropdown} changeOrder={changeOrder} />
              </div>
            </div>
            <ProductListItem list={list} category="itemList" />
            <Pagination currentPage={currentPage} totalCount={totalCount} pageSize={pageSize} onChange={changePage} />
          </section>  
            
          </div>
        </div>
    </>
  )
}

export default ItemList;
