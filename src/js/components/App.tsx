import { FunctionComponent } from "react";
import "../../static/style.css";

const App: FunctionComponent = () => {
  return (
    <>
      <header className="header">
        <h1 className="header__mainhead">Simple, traffic-based pricing</h1>
        <h2 className="header__subhead">
          Sign-up for our 30-day trial. No credit card required.
        </h2>
      </header>
      <div className="pricecard">
        <div className="pricecard__pricecontainer">
          <span className="pricecard__pageviews">100k pageviews</span>
          <span className="pricecard__rate">
            <span className="pricecard__dollars"></span>$16.00
          </span>
          month
        </div>
      </div>
    </>
  );
};
export default App;
