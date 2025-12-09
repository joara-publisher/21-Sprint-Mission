import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @charset "utf-8";*,::after,::before,button{margin:0;padding:0}*,::after,::before,button,h1,h2,h3,h4,h5,h6,input,select,table,textarea{box-sizing:border-box}article,aside,canvas,details,figcaption,figure,footer,header,mark,menu,nav,section,summary{display:block}button,input,select,textarea{background-color:#fff;border-radius:0;-webkit-appearance:none}a:focus,button,fieldset,iframe,img{border:0}li{list-style:none}button,img,input,select,textarea{vertical-align:middle}img{max-width:100%;height:auto}address,em,optgroup{font-style:normal}button,label{cursor:pointer}label{position:relative}button{background:0 0}a{text-decoration:none;color:inherit}a:focus{outline:0}caption,legend{font-size:0;width:0;height:0;line-height:0;overflow:hidden;text-indent:-9999px}table{width:100%;border-spacing:0}input,select, textarea{border:none;outline:none}
  
  :root {
    --red: #F74747;
    --blue: #3692FF;
    --white: #FFF;
    --gray900: #111827;
    --gray800: #1F2937;
    --gray700: #374151;
    --gray600: #4B5563;
    --gray500: #6B7280;
    --gray400: #9CA3AF;
    --gray200: #E5E7EB;
    --gray100: #F3F4F6;
    --gray50: #F9FAFB;
    
    --header-z-index: 999;
  }
  
  body {
    font-family: "Pretendard", sans-serif;
  }
  
  .defaultButton {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    color: var(--gray100);
    padding: 9.5px 20px;
    border-radius: 8px;
    background-color: var(--blue);
    
    &:disabled {
      background-color: var(--gray400);
    }
  }
  
  .desktopButton {
    @media (max-width: 767px) {
      display: none;
    }
  }
  
  .mobileButton {
    display: none;
    @media (max-width: 767px) {
      display: block;
    }
  }
`;

export default GlobalStyle;