import React from 'react';
import './Card.css';
import mobileBg from './images/bg-main-mobile.png';
import desktopBg from './images/bg-main-desktop.png';
import cardLogo from './images/card-logo.svg';

export default function Card(){
  return (
    <div className="Card">
      <div className="position-absolute">
        <picture>
          <source media="(min-width: 1024px)" srcSet={desktopBg} />
          <img src={mobileBg} alt="background"/>
        </picture>
      </div>


      <div className="row">
        <div className="col-lg-8 z-3 text-white mx-5 my-5 card-spacing">
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
        <div className="col-lg-4">
          <form>
              <h2>form</h2>
          </form>
        </div>
      </div>
    </div>

    // <div className="Card">
    //     <div className="row">
    //       <div className="col-lg-8 background-image">
    //         <div className="card-front d-flex flex-grow">
    //           <div className="card-front-infos text-white">
    //             <div className="card-circle d-flex align-items-center">
    //               <div className="card-circle-up">
    //               </div>
    //               <div className="card-open-circle">
    //               </div>
    //             </div>
    //             <div className="card-number">
    //              <h2>49591 6489 6389 101E</h2>
    //             </div>
    //             <div className="card-name d-flex justify-content-between">
    //             <p>FELICIA LEIRE</p>
    //             <p>9/00</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="card-back">
    //         </div>
    //       </div>
    //       <div className="col-md-3 col-lg-4 card-form">
    //         <form className="row g-3">
    //           <div className="col-12">
    //             <label for="inputName" className="form-label">CARD HOLDER NAME</label>
    //             <input type="text" className="form-control" id="inputName" placeholder="John Doe"></input>
    //           </div>
    //           <div className="col-12">
    //             <label for="inputCardNumber" className="form-label">CARD NUMBER</label>
    //             <input type="text" className="form-control" id="inputCardNumber" max-length="16"></input>
    //           </div>
    //           <div className="col-md-3">
    //             <label for="inputExyDate" className="form-label">EXP. DATE</label>
    //             <input type="text" className="form-control" id="inputExyDate" placeholder="MM"></input>
    //           </div>
    //           <div className="col-md-3">
    //             <label for="inputExyDate" className="form-label">(MM/YY)</label>
    //             <input type="text" className="form-control" id="inputExyDate" placeholder="YY"></input>
    //           </div>
    //           <div className="col-md-6">
    //             <label for="inputCVC" className="form-label">CVC</label>
    //             <input type="text" className="form-control" id="inputCVC"></input>
    //           </div>
    //           <div className="col-12">
    //             <button type="submit" className="btn btn-primary w-100">Confirm</button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    // </div>
  )
}
