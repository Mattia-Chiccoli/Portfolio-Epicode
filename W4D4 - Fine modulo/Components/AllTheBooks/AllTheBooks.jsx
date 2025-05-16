import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import SingleBook from "../SingleBook/SingleBook";
import booksData from "/src/data/books.json";
import "./AllTheBooks.css";

const AllTheBooks = ({ query, selectedAsin, setSelectedAsin }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Row className="all-the-books-row">
      {filteredBooks.map((book) => (
        <Col key={book.asin} xs={6} md={4} lg={3} className="all-the-books-col">
          <SingleBook
            book={book}
            selectedAsin={selectedAsin}
            setSelectedAsin={setSelectedAsin}
          />
        </Col>
      ))}
    </Row>
  );
};

export default AllTheBooks;
