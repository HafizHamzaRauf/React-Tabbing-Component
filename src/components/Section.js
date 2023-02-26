import Companies from "./Companies";
import Description from "./Description";
import classes from "./Section.module.css";
function Section(props) {
  return (
    <div className={classes.section}>
      <Companies></Companies>
      <Description></Description>
    </div>
  );
}

export default Section;
