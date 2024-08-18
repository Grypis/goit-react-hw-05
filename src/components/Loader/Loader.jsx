import { Hourglass } from "react-loader-spinner";
import css from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={css.loader}>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["rgb(245, 112, 11)", "rgb(122, 56, 6)"]}
      />
    </div>
  );
};

export default Loader;
