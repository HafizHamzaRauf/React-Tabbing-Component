import classes from "./List.module.css";
function List(props) {
  const content = props.item.map((val, index) => (
    <li key={index} className={classes["list-item"]}>
      <p className={classes.icon}>{">>"}</p>
      <p className={classes.text}>{val}</p>
    </li>
  ));
  return <ul className={classes.list}>{content}</ul>;
}
export default List;
