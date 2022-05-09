import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);
  console.log(loadedComments, "this are comments", "status:", status);

  const { ticketID } = params;

  useEffect(() => {
    sendRequest(ticketID);
  }, [sendRequest, ticketID]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = () => {};

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  console.log(loadedComments);

  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
    console.log("reached mid block");
  }
  console.log(loadedComments);

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="='centered">No Comments were added yet!</p>;
  }

  console.log(comments, "these are the");
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          ticketID={ticketID}
          onAddedComment={addedCommentHandler}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
