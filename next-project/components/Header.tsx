import Image from "next/image";
import Link from "next/link";
import styles from "@/components/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link className={styles.logo} href="/">
          <Image
            className="pcOnly"
            fill
            src="/logo.png"
            alt="do it! 로고 이미지"
          />
          <Image
            className="mobileOnly"
            fill
            src="/logo_mo.png"
            alt="do it! 로고 이미지"
          />
        </Link>
      </div>
    </header>
  );
}
