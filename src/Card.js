import React, { useState } from 'react';
import './Card.css';
import mobileBg from './images/bg-main-mobile.png';
import desktopBg from './images/bg-main-desktop.png';
import cardLogo from './images/card-logo.svg';
import completeIcon from './images/icon-complete.svg';
import { format } from 'date-fns';

export default function Card(){
  const [confirmed, setConfirmed] = useState(false);
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("00");
  const [cvc, setCvc] = useState("");
  return (
    <div className="Card">
      <div className="position-absolute">
        <picture>
          <source media="(min-width: 1024px)" srcSet={desktopBg} />
          <img src={mobileBg} alt="background"/>
        </picture>
      </div>


      <div className="row ">
        <div className="col-lg-7 col-md-6 col-sm-3 z-3">
          <div className="text-white mx-5 my-5 card-spacing">
            <article className="card-front p-4 d-flex flex-column justify-content-between">
              <img src={cardLogo}  alt="logo" className="w-25"/>
              <div>
                <h2 className="card-number">{cardNumber}</h2>
                <div className="d-flex justify-content-between card-details">
                  <p className="text-uppercase">{name}</p>
                  <p>{format(new Date(date), "MM/yy")}</p>
                </div>
              </div>
            </article>
            <article className="card-back position-relative mx-5 my-5">
              <p className="position-absolute card-cvc">{cvc}</p>
            </article>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-3  d-flex flex-column justify-content-center align-items-center">
          {!confirmed &&(
          <form className="row mw-100">
            <div className="col-12 mb-3">
              <label for="inputName" className="form-label">CARD HOLDER NAME</label>
              <input type="text"
              className="form-control active-input"
              id="inputName"
              placeholder="e.g John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required >
              </input>
            </div>
            <div className="col-12 mb-3">
              <label for="inputCardNumber" className="form-label">CARD NUMBER</label>
              <input
              type="text"
              className="form-control active-input"
              id="inputCardNumber"
              max-length={19}
              placeholder="eg. 3245 3235 2342 5322"
                value={cardNumber.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim()}
              onChange={(e) => setCardNumber(e.target.value)}
              required >
              </input>
            </div>
            <div className="col-md-6 ">
              <label for="inputExyDate" className="form-label">EXP. DATE (MM/YY)</label>
              <input
               type="month"
               className="form-control active-input"
               id="inputExyDate"
               placeholder="MM YY"
               value={date}
               onChange={(e) => setDate(e.target.value)}
               required
               >
               </input>
            </div>
            <div className="col-md-6 mb-4">
              <label for="inputCVC" className="form-label">CVC</label>
              <input
              type="text"
              className="form-control active-input"
              id="inputCVC"
              max-length={3}
              placeholder="123"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              required >
              </input>
            </div>
            <div className="col-12 ">
              <button onClick={() => setConfirmed(true)} className="btn btn-primary card-btn w-100">Confirm</button>
            </div>
          </form>)}
          {confirmed && <ThankYou setConfirmed={setConfirmed}  />}
        </div>
      </div>
    </div>
    );

    function ThankYou({setConfirmed}){
      return(
        <div className="d-flex flex-column justify-content-center text-center">
          <img src={completeIcon} alt="complete-icon" className="d-block m-auto mb-4"/>
          <h1 className="text-uppercase mb-3">Thank You !</h1>
          <p>We've added your card details</p>
          <button onClick={() => setConfirmed(false)} className=" btn btn-primary card-btn"> Continue
          </button>
        </div>
      )
    }
}
