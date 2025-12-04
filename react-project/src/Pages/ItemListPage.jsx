import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import ProductListItem from "../components/ProductListItem";
import Button from "../components/Button";
import Pagination from './../components/Pagination';
import styles from "./ItemsListPage.module.css";
import Dropdown from './../components/Dropdown';
import Search from "../components/Search";

function ItemListPage () {
  const [bestList, setBestList] = useState([]);
  const [list, setList] = useState([]);
  const [order, setOrder] = useState('recent');
  const [searchParams, setSearchParams] = useSearchParams();
  const initKeyword = searchParams.get('keyword');
  const [keyword, setKeyword] = useState(initKeyword || '');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  const [bestPageSize, setBestPageSize] = useState(0);
  const [currentScreen, setCurrentScreen] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleResize = () => {
    const width = window.innerWidth;
    
    if (width >= 1200) {
      setPageSize(10);
      setBestPageSize(4);
      setCurrentScreen('pc');
    } else if (width >= 768) {
      setPageSize(6);
      setBestPageSize(2);
      setCurrentScreen('tablet');
    } else {
      setPageSize(4);
      setBestPageSize(1);
      setCurrentScreen('mobile');
    }
  };
  
  useEffect(() => {
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, []);

  const loadBestProducts = async (bestPageSize) => {
    if(bestPageSize === 0) return;
    
    let data = null;
    try {
      const response = await axios.get('products', {
        params: {
          pageSize: bestPageSize,
          orderBy: 'favorite',
        },
      });
      data = response.data;
    } catch(error) {
      console.error('에러가 발생했습니다.' + error);
    } 
    
    if(!data) return;
    
    const { list } = data;
    setBestList(list);
  };
  
  useEffect(() => {
    loadBestProducts(bestPageSize);
  }, [bestPageSize]);

  const loadProducs = async (order, keyword, currentPage, pageSize) => {
    if(pageSize === 0) return;
    
    let data = null;
    try {
      const response = await axios.get('products', {
        params: {
          page: currentPage,
          pageSize: pageSize,
          orderBy: order,
          keyword: keyword,
        },
      });
      data = response.data;
    } catch(error) {
      console.error('에러가 발생했습니다.' + error);
    } 
    
    if(!data) return;
    
    const { list, totalCount } = data;
    setList(list);
    setTotalCount(totalCount);
  };
  
  useEffect(() => {
    loadProducs(order, keyword, currentPage, pageSize);
  }, [order, keyword, currentPage, pageSize]);

  const changeIsOpen = () => {
    setDropdownOpen(!dropdownOpen);
  }
  
  const changeOrder = (order) => {
    setDropdownOpen(!dropdownOpen);
    setOrder(order);
    setCurrentPage(1);
  }
  
  const changeKeyword = (e) => {
    const value = e.target.value;
    setKeyword(value);
    setSearchParams(value ? {value} : {});
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
      <div className={styles.itemListPage}>
          <div className={styles.container}>
            
          <div className={styles.itemListBox}>
            <div className={styles.titleBox}>
              <h2 className={styles.listTitle}>베스트 상품</h2>
            </div>
            <ProductListItem list={bestList} category="bestItemList" />
          </div>
            
          <div className={styles.itemListBox}>
            <div className={styles.titleBox}>
              <h2 className={styles.listTitle}>전체 상품</h2>
              <Button classNames={`button defaultButton ${styles.moButton}`} onClick={goToAddItem}>상품 등록하기</Button>
              <div className={styles.searchSelectBox}>
                <Search changeKeyword={changeKeyword} />
                <Button  classNames={`button defaultButton ${styles.pcButton}`} onClick={goToAddItem}>상품 등록하기</Button>
                <Dropdown isOpen={dropdownOpen} value={order} currentScreen={currentScreen} changeIsOpen={changeIsOpen} changeOrder={changeOrder} />
              </div>
            </div>
            <ProductListItem list={list} category="itemList" />
            <Pagination currentPage={currentPage} totalCount={totalCount} pageSize={pageSize} onChange={changePage} />
          </div>  
            
          </div>
        </div>
    </>
  )
}

export default ItemListPage;
