import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "/Components/MyNav/MyNav";
import MyFooter from "/Components/MyFooter/MyFooter";
import Welcome from "/Components/Welcome/Welcome";
import LatestRelease from "/Components/LatestRelease/LatestRelease";
import CommentArea from "/Components/CommentArea/CommentArea";
import BookDetails from "/Components/BookDetails/BookDetails";
import NotFound from "/Components/NotFound/NotFound";

function App() {
  const [query, setQuery] = useState("");
  const [selectedAsin, setSelectedAsin] = useState(null);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <MyNav query={query} setQuery={setQuery} />
        <div className="container-fluid my-4 flex-grow-1">
          <div className="row">
            <div className="col-md-8">
              <Welcome />
              <Routes>
                <Route
                  path="/"
                  element={
                    <LatestRelease
                      query={query}
                      selectedAsin={selectedAsin}
                      setSelectedAsin={setSelectedAsin}
                    />
                  }
                />
                <Route path="/book/:asin" element={<BookDetails />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <div className="col-md-4 d-flex flex-column comment-area-wrapper">
              <CommentArea selectedAsin={selectedAsin} />
            </div>
          </div>
        </div>
        <MyFooter />
      </div>
    </Router>
  );
}

export default App;
