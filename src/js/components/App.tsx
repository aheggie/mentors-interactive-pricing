import { FunctionComponent } from "react";
import "../../static/style.css";

//this is type string from svg.d.ts
import IconCheck from "../../static/images/icon-check.svg";
// import IconSlider from "../../static/images/icon-slider.svg";

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
            <span className="pricecard__dollars">$16.00</span> /month
          </span>
          month
        </div>
        <input type="range" name="" id="" className="pricecard__range" />
        {/* https://www.w3schools.com/howto/howto_css_switch.asp */}
        <div className="pricecard__togglecontainer">
          <span className="pricecard__monthlylabel">Monthly Billing</span>
          <div className="pricecard__toggleswitch">
            <input
              type="checkbox"
              name=""
              id=""
              className="pricecard__togglecheckbox"
            />
            <span className="pricecard__togglecircle"></span>
          </div>
          <span className="pricecard__yearlylabel">Yearly Billing</span>
        </div>
      </div>
      <div className="signupcard">
        <ul className="signupcard__infolist">
          <li className="signupcard__infoitem">
            <img src={IconCheck} alt="" className="signupcard__checkicon" />
            <span className="signupcard__infotext"></span>
          </li>
          <li className="signupcard__infoitem">
            <img src={IconCheck} alt="" className="signupcard__checkicon" />
            <span className="signupcard__infotext"></span>
          </li>
          <li className="signupcard__infoitem">
            <img src={IconCheck} alt="" className="signupcard__checkicon" />
            <span className="signupcard__infotext"></span>
          </li>
        </ul>
        <button className="signupcard__signupbutton">Start my trial</button>
      </div>
    </>
  );
};
export default App;
