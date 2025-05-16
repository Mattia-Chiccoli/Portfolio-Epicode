import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./AddComment.css";

const AddComment = ({ selectedAsin, setComments }) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState("1");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedAsin) return;

    setSending(true);
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify({
            comment,
            rate,
            elementId: selectedAsin,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2ViOTM1YzNkZjMwMzAwMTUxNWE2NmYiLCJpYXQiOjE3NDc0MjA4OTQsImV4cCI6MTc0ODYzMDQ5NH0.dDcmSL0RIq8Ae17aL2AibEWcy6wGfrDPyuQ876q1nv4",
          },
        }
      );

      if (response.ok) {
        const newComment = await response.json();
        setComments((prev) => [newComment, ...prev]);
        setComment("");
        setRate("1");
      } else {
        alert("Errore durante l'invio della recensione");
      }
    } catch {
      alert("Errore durante l'invio della recensione");
    } finally {
      setSending(false);
    }
  };

  return (
    <Form className="add-comment-form" onSubmit={handleSubmit}>
      <Form.Group controlId="commentText" className="mb-3">
        <Form.Label>Recensione</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          disabled={sending}
          required
        />
      </Form.Group>
      <Form.Group controlId="commentRate" className="mb-3">
        <Form.Label>Valutazione</Form.Label>
        <Form.Select
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          disabled={sending}
          required
        >
          {[1, 2, 3, 4, 5].map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button type="submit" disabled={sending || !selectedAsin}>
        {sending ? "Invio..." : "Invia Recensione"}
      </Button>
    </Form>
  );
};

export default AddComment;
