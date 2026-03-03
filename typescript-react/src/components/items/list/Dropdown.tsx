import dropdownDesktopIcon from "@/assets/icons/dropdown_desktop_icon.svg";
import dropdownMobileIcon from "@/assets/icons/dropdown_mobile_icon.svg";
import {
  DropdownButton,
  DropdownWrap,
  OptionItem,
  OptionList,
} from "@/styles/DropdownSteyls";

interface DropdownProps {
  isOpen: boolean;
  value: "recent" | "favorite";
  currentScreen: "pc" | "tablet" | "mobile";
  toggleDropdown: () => void;
  changeOrder: (value: "recent" | "favorite") => void;
}

function Dropdown({
  isOpen,
  value,
  currentScreen,
  toggleDropdown,
  changeOrder,
}: DropdownProps) {
  return (
    <DropdownWrap>
      <DropdownButton onClick={toggleDropdown}>
        {currentScreen !== "mobile"
          ? value === "recent"
            ? "최신순"
            : "좋아요순"
          : ""}
        <img
          src={
            currentScreen === "mobile"
              ? dropdownMobileIcon
              : dropdownDesktopIcon
          }
          alt="정렬 선택 아이콘"
        />
      </DropdownButton>
      <OptionList $active={isOpen}>
        <OptionItem onClick={() => changeOrder("recent")}>최신순</OptionItem>
        <OptionItem onClick={() => changeOrder("favorite")}>
          좋아요순
        </OptionItem>
      </OptionList>
    </DropdownWrap>
  );
}

export default Dropdown;
