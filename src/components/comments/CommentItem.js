import classes from "./CommentItem.module.css";

const CommentItem = (props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
      {console.log(props, "this is from comment item comp")}
    </li>
  );
};

export default CommentItem;
