import { Card } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SingleBook.css";

const SingleBook = ({ book, selectedAsin, setSelectedAsin }) => {
  const navigate = useNavigate();

  const isSelected = selectedAsin === book.asin;

  const handleSelect = () => {
    setSelectedAsin(isSelected ? null : book.asin);
  };

  const goToDetails = () => {
    navigate(`/book/${book.asin}`);
  };

  return (
    <Card
      className={`single-book-card ${isSelected ? "single-book-selected" : ""}`}
    >
      <Card.Img
        variant="top"
        src={book.img}
        alt={book.title}
        onClick={handleSelect}
        className="single-book-img"
      />
      <Card.Body>
        <Card.Title className="single-book-title">{book.title}</Card.Title>
        <button className="single-book-details-btn" onClick={goToDetails}>
          Dettagli
        </button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
