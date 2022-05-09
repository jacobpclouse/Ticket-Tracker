import classes from "./HighlightedTicket.module.css";

const HighlightedTicket = (props) => {
  return (
    <figure className={classes.ticket}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedTicket;
