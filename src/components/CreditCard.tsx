import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "react-credit-cards";
import SubmitPayment from "./SubmitPayment";
import "react-credit-cards/es/styles-compiled.css";

const CreditCard = () => {
  const [number, SetNumber] = useState("");
  const [name, SetName] = useState("");
  const [month, SetMonth] = useState("");
  let [expiry, SetExpiry] = useState("");
  const [cvc, SetCvc] = useState("");
  const [focus, SetFocus] = useState("");
  const handleDate = (e: any) => {
    SetMonth(e.target.value);
    SetExpiry(e.target.value);
  };
  const handleExpiry = (e: any) => {
    SetExpiry(month.concat(e.target.value));
  };

  return (
    <>
      <div className="credit-card-container">
        <div className="rccs__card rccs__card--unknown">
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            // focused={focus}
          />
        </div>

        <br />
        <form>
          <div className="row">
            <div className="col-sm-11">
              <label htmlFor="name">Card Number</label>
              <input
                type="tel"
                className="form-control"
                value={number}
                name="number"
                maxLength={16}
                pattern="[0-9]+"
                onChange={(e) => {
                  SetNumber(e.target.value);
                }}
                onFocus={(e) => SetFocus(e.target.name)}
              ></input>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-11">
              <label htmlFor="name">Card Holder Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                name="name"
                onChange={(e) => {
                  SetName(e.target.value);
                }}
                onFocus={(e) => SetFocus(e.target.name)}
              ></input>
            </div>
          </div>
          <br />
          <div className="row">
            <div
              className="col=sm-8"
              style={{
                ...{ paddingRight: "12em" },
                ...{ paddingLeft: "1em" },
              }}
            >
              <label htmlFor="month">Expiration Date</label>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4">
              <select
                className="form-control"
                name="expiry"
                onChange={handleDate}
              >
                <option value=" ">Month</option>
                <option value="01">Jan</option>
                <option value="02">Feb</option>
                <option value="03">Mar</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">Aug</option>
                <option value="09">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
            </div>
            &nbsp;
            <div className="col-sm-4">
              <select
                className="form-control"
                name="expiry"
                onChange={handleExpiry}
              >
                <option value=" ">Year</option>
                <option value="23">2023</option>
                <option value="24">2024</option>
                <option value="25">2025</option>
                <option value="26">2026</option>
                <option value="27">2027</option>
                <option value="28">2028</option>
                <option value="29">2029</option>
                <option value="30">2030</option>
                <option value="31">2031</option>
                <option value="32">2032</option>
              </select>
            </div>
            <div className="col-sm-3 ">
              <input
                type="tel"
                name="cvc"
                maxLength={3}
                className=" form-control card"
                value={cvc}
                pattern="\d*"
                onChange={(e) => {
                  SetCvc(e.target.value);
                }}
                onFocus={(e) => SetFocus(e.target.name)}
                placeholder="CVC"
              ></input>
            </div>
          </div>
          <br />
          <SubmitPayment />
        </form>
      </div>
    </>
  );
};
export default CreditCard;
