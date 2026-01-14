import Image from "next/image";
import Link from "next/link";
import styles from "@/components/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <Link className={styles.logo} href="/">
          <Image fill src="/logo.png" alt="do it! 로고 이미지" />
        </Link>
      </div>
    </header>
  );
}
