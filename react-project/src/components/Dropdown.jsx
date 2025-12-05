import styles from "./Dropdown.module.css";
import dropdownDesktopIcon from '../assets/dropdownDesktopIcon.svg';
import dropdownMobileIcon from '../assets/dropdownMobileIcon.svg';

function Dropdown({isOpen, value, currentScreen, toggleDropdown, changeOrder}) {
  return ( 
    <div className={styles.dropdown}>
      <button className={styles.button} onClick={toggleDropdown}>
        {currentScreen !== 'mobile' ? 
          value === 'recent' ? '최신순' : '좋아요순' 
          : ''}
        <img className={styles.img} src={currentScreen === 'mobile' ? dropdownMobileIcon : dropdownDesktopIcon} alt="정렬 선택 아이콘" />
      </button>
      <ul className={`${isOpen ? styles['active'] : ''}  ${styles.option}`}>
        <li onClick={() => changeOrder('recent')}>최신순</li>
        <li onClick={() => changeOrder('favorite')}>좋아요순</li>
      </ul>
    </div>
  )
}

export default Dropdown;