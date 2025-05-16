import "./SingleComment.css";

const SingleComment = ({ comment }) => {
  return (
    <div className="single-comment-card">
      <p className="single-comment-text">"{comment.comment}"</p>
      <p className="single-comment-rate">Valutazione: {comment.rate}/5</p>
    </div>
  );
};

export default SingleComment;
