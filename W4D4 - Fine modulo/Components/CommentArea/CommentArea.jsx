import { useEffect, useState } from "react";
import CommentsList from "../CommentsList/CommentsList";
import AddComment from "../AddComment/AddComment";
import "./CommentArea.css";

const CommentArea = ({ selectedAsin }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedAsin) {
      setComments([]);
      return;
    }

    const fetchComments = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/books/${selectedAsin}/comments/`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2ViOTM1YzNkZjMwMzAwMTUxNWE2NmYiLCJpYXQiOjE3NDc0MjA4OTQsImV4cCI6MTc0ODYzMDQ5NH0.dDcmSL0RIq8Ae17aL2AibEWcy6wGfrDPyuQ876q1nv4",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setComments(data);
        } else {
          setComments([]);
        }
      } catch (error) {
        setComments([]);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [selectedAsin]);

  return (
    <div className="comment-area-container">
      <h4 className="comment-area-title">Recensioni</h4>
      {loading && <p>Caricamento recensioni...</p>}
      {!loading && <CommentsList comments={comments} />}
      <AddComment selectedAsin={selectedAsin} setComments={setComments} />
    </div>
  );
};

export default CommentArea;
