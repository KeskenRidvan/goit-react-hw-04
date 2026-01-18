import { Circles } from "react-loader-spinner";
import styles from "./Loader.module.css";

function Loader() {
  const { loader } = styles;
  return (
    <div className={loader}>
      <Circles color="#4cf3d1" height={60} width={60} />
    </div>
  );
}

export default Loader;
