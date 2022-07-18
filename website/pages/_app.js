import "../styles/globals.css";
import "../components/header/Heading.css";
import Heading from "../components/header/Heading";


export default function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-200">
      <Heading />
      <Component {...pageProps} />
    </div>
  );
}
