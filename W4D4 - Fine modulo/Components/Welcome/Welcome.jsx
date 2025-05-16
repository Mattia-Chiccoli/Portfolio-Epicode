import { Alert } from "react-bootstrap";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Alert variant="info" className="welcome-alert">
        Benvenuto nel mio EpicBooks! Scopri i miei libri fantasy.
      </Alert>
      <h1 className="welcome-title">Mattia's EpicBooks</h1>
    </div>
  );
};

export default Welcome;
