import SingleComment from "../SingleComment/SingleComment";
import "./CommentsList.css";

const CommentsList = ({ comments }) => {
  return (
    <div className="comments-list-container">
      {comments.length === 0 && <p>Nessuna recensione disponibile</p>}
      {comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsList;
