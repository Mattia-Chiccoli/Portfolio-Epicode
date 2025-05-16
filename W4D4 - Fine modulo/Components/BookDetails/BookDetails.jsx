import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";
import books from "/src/data/books.json";
import "./BookDetails.css";

const BookDetails = () => {
  const { asin } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const found = books.find((b) => b.asin === asin);
    setBook(found);
  }, [asin]);

  if (!book) {
    return (
      <div className="book-details-loading">
        <Spinner animation="border" />
        <p>Carico i dettagli del libro...</p>
      </div>
    );
  }

  return (
    <Card className="book-details-card">
      <Card.Img variant="top" src={book.img} className="book-details-img" />
      <Card.Body>
        <Card.Title className="book-details-title">{book.title}</Card.Title>
        <Card.Text className="book-details-description">
          {book.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BookDetails;
