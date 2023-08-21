import Button from "./utils/Button";
import Header from "./utils/Header";
import SuccessIcon from "./assets/icon-success.svg";
import { useState } from "react";
import Text from "./utils/Text";
import ItemIcon from "./assets/icon-list.svg";

function App() {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleDismiss = () => {
    setEmail("");
    setSuccess(false);
  };
  const DetailLists = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  const handleSubcribe = () => {
    if (String(email).length === 0) {
      setError("Email is required!");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Email is invalid!");
    } else {
      setError(false);
      setSuccess(true);
    }
  };

  return (
    <div className="main-container">
      {success ? (
        <div className="success-container">
          <img src={SuccessIcon} />
          <Header text="Thanks for subscribing!" />
          <Text
            email={email}
            text={` A confirmation email has been sent to &&^&&. Please open it and click the button inside to confirm your subscription.`}
          />
          <Button success text="Dissmiss Message" onCLick={handleDismiss} />
        </div>
      ) : (
        <div className="home-container">
          <div className="hero">
            {/* <img src={Hero} alt="" className="hero" /> */}
          </div>
          <div className="detailsNinputs">
            <Header text="Stay updated!" />

            <Text text="Join 60,000+ product managers receiving monthly updates on:" />

            <ul style={{ listStyle: "none" }} className="list">
              {DetailLists.map((item, i) => (
                <li key={i} className="list-items">
                  <div className="item-icon-container">
                    <img src={ItemIcon} />
                  </div>
                  <Text text={item} />
                </li>
              ))}
            </ul>
            <div className="form">
              <div className="inputs">
                <Text text="Email address" className="email" />

                <input
                  placeholder="email@company.com"
                  type="email"
                  data-error={error ? "true" : "false"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && <span className="error-message">{error}</span>}
              </div>
              <Button
                text="Subscribe to monthly newsletter"
                onCLick={() => {
                  handleSubcribe();
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
