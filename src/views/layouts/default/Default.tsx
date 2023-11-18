import { Footer } from "@/views/partials/footer/Footer";
import { Header } from "@/views/partials/header/Header";
import clsx, { ClassValue } from "clsx";
import styles from "./Default.module.scss";

export const Default = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: ClassValue;
} & React.HTMLProps<HTMLDivElement>) => (
  <div className={clsx(styles["l-layout"], className)} {...props}>
    <div className={styles["l-layout__background"]} />
    <div className={styles["l-layout__inner"]}>
      <Header />
      {children}
      <Footer />
    </div>
  </div>
);
