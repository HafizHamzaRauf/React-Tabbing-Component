import classes from "./Companies.module.css";
import { useSelector, useDispatch } from "react-redux";
import { dataSliceActions } from "../store/data";

function Companies() {
  const dispatch = useDispatch();
  const arr = useSelector((state) => state.data.arr);

  const clickHandler = (e) => {
    dispatch(dataSliceActions.changeCurrent(e.target.id));
  };
  const currentIndex = useSelector((state) => state.data.currentIndex);

  const companies = arr.map((item) => (
    <button
      onClick={clickHandler}
      id={item.id}
      className={`${classes.btn} ${
        arr[currentIndex].id === item.id ? classes.active : ""
      }`}
    >
      {item.company}
    </button>
  ));
  return <div className={`${classes.companies}`}>{companies}</div>;
}
export default Companies;
