import React from 'react';
import './Card.css';
import mobileBg from './images/bg-main-mobile.png';
import desktopBg from './images/bg-main-desktop.png';
import cardLogo from './images/card-logo.svg';
import completeIcon from './images/icon-complete.svg';

export default function Card(){
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
                <h2 className="card-number">3240 1233 6543 2342</h2>
                <div className="d-flex justify-content-between card-details">
                  <p>GILARY BACNIS</p>
                  <p>07/24</p>
                </div>
              </div>
            </article>
            <article className="card-back position-relative mx-5 my-5">
              <p className="position-absolute card-cvc">312</p>
            </article>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-3  d-flex flex-column justify-content-center align-items-center">
          {/* <form className="row mw-100">
            <div className="col-12 mb-3">
              <label for="inputName" className="form-label">CARD HOLDER NAME</label>
              <input type="text"
              className="form-control active-input"
              id="inputName"
              placeholder="e.g John Doe"
              required >
              </input>
            </div>
            <div className="col-12 mb-3">
              <label for="inputCardNumber" className="form-label">CARD NUMBER</label>
              <input
              type="text"
              className="form-control active-input"
              id="inputCardNumber"
              max-length="19"
              placeholder="eg. 3245 3235 2342 5322"
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
              max-length="3"
              placeholder="123"
              required >
              </input>
            </div>
            <div className="col-12 ">
              <button type="submit" className="btn btn-primary card-btn w-100">Confirm</button>
            </div>
          </form> */}
          <ThankYou />
        </div>
      </div>
    </div>
    );

    function ThankYou(){
      return(
        <div className="text-center">
          <img src={completeIcon} alt="complete-icon" className="d-block m-auto mb-4"/>
          <h1 className="text-uppercase mb-3">Thank You !</h1>
          <p>We've added your card details</p>
          <button className=" btn btn-primary card-btn"> Continue
          </button>
        </div>
      )
    }
}
