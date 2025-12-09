import { DropdownWrapper, Button, OptionList, Option } from './../styles/DropdownStyles';
import dropdownDesktopIcon from '../assets/dropdownDesktopIcon.svg';
import dropdownMobileIcon from '../assets/dropdownMobileIcon.svg';

function Dropdown({isOpen, value, currentScreen, toggleDropdown, changeOrder}) {
  return ( 
    <DropdownWrapper>
      <Button onClick={toggleDropdown}>
        {currentScreen !== 'mobile' ? 
          value === 'recent' ? '최신순' : '좋아요순' 
          : ''}
        <img src={currentScreen === 'mobile' ? dropdownMobileIcon : dropdownDesktopIcon} alt="정렬 선택 아이콘" />
      </Button>
      <OptionList className={`${isOpen ? 'active' : ''}`}>
        <Option onClick={() => changeOrder('recent')}>최신순</Option>
        <Option onClick={() => changeOrder('favorite')}>좋아요순</Option>
      </OptionList>
    </DropdownWrapper>
  )
}

export default Dropdown;