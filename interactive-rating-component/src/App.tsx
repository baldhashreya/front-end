import "./App.css";
import { useState } from "react";
import Icon from "./assets/icon-star.svg";
import Thankyou from "./assets/illustration-thank-you.svg";

function App() {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = () => {
    if (selectedRating !== 0) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="container">
      {!isSubmitted ?
        <div className="rating-container">
          <div className="img-container">
            <img
              src={Icon}
              alt="Icon"
            />
          </div>
          <h3>How did we do?</h3>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="rating-div">
            {[1, 2, 3, 4, 5].map((e) => {
              return (
                <button
                  className={`rating-button ${selectedRating === e ? "active" : ""}`}
                  onClick={() => setSelectedRating(e)}
                  key={e}
                >
                  {e}
                </button>
              );
            })}
          </div>

          <button
            className="submit-btn"
            disabled={selectedRating === null}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      : <div className="thankyou-container">
          <img
            src={Thankyou}
            alt="Thankyou"
          />
          <p className="score">You selected {selectedRating} out of 5</p>
          <h3>Thank you!</h3>
          <p className="para">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      }
    </div>
  );
}

export default App;
