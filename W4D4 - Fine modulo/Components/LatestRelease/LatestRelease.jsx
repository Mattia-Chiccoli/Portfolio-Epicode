import { Row, Col } from "react-bootstrap";
import AllTheBooks from "../AllTheBooks/AllTheBooks";
import "./LatestRelease.css";

const LatestRelease = ({ query, selectedAsin, setSelectedAsin }) => {
  return (
    <div className="latest-release-container">
      <AllTheBooks
        query={query}
        selectedAsin={selectedAsin}
        setSelectedAsin={setSelectedAsin}
      />
    </div>
  );
};

export default LatestRelease;
