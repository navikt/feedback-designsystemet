import styles from "./layout.module.css";
import Heading from "./Heading";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Heading />
      <Navigation />
      <main>{children}</main>
    </>
  );
}
