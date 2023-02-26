import List from "./List";
import Button from "./UI/Button";
import classes from "./Description.module.css";
import { useSelector } from "react-redux";
function Description(props) {
  const data = useSelector((state) => state.data);
  const obj = data.arr[data.currentIndex];
  return (
    <div className={classes.description}>
      <h1 className={classes.title}>{obj.title}</h1>
      <h2 className={classes.company}>{obj.company}</h2>
      <p className={classes.date}>{obj.dates}</p>
      <List item={obj.duties}></List>
      <Button>More Info</Button>
    </div>
  );
}

export default Description;
