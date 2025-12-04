import { Link, NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import logoImg from "../assets/logo.png";
import logoMoImg from "../assets/logoMo.png";

function Nav() {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link to="/items" className={styles.logo}>
            <img className={styles.pcImg} src={logoImg} alt="판다마켓 pc 로고" />
            <img className={styles.moImg} src={logoMoImg} alt="판다마켓 mobile 로고" />
          </Link>
          <ul className={styles.menuList}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? styles.active : undefined
                }
              >
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/items"
                className={({ isActive }) => isActive ? styles.active : undefined
                }
              >
                중고마켓
              </NavLink>
            </li>
            <li><Link to=""></Link></li>
          </ul>
        </div>
        <div className={styles.right}>
          {/* <Button classNames="button defaultButton" onClick={goToLogin}>로그인</Button> */}
          <div className={styles.myProfile}>
            <button className={styles.profileImg}></button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav;