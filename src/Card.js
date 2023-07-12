import React from 'react';
import './Card.css';
export default function Card(){

  



  return (
    <div className="Card">
        <div className="row">
          <div className="col-lg-8 background-image">
            <div className="card-front d-flex flex-grow">
              <div className="card-front-infos text-white">
                <div className="card-circle d-flex align-items-center">
                  <div className="card-circle-up">
                  </div>
                  <div className="card-open-circle">
                  </div>
                </div>
                <div className="card-number">
                 <h2>49591 6489 6389 101E</h2>
                </div>
                <div className="card-name d-flex justify-content-between">
                <p>FELICIA LEIRE</p>
                <p>9/00</p>
                </div>
              </div>
            </div>
            <div className="card-back">
            </div>
          </div>
          <div className="col-md-3 col-lg-4 card-form">
            <form className="row g-3">
              <div className="col-12">
                <label for="inputName" className="form-label">CARD HOLDER NAME</label>
                <input type="text" className="form-control" id="inputName" placeholder="John Doe"></input>
              </div>
              <div className="col-12">
                <label for="inputCardNumber" className="form-label">CARD NUMBER</label>
                <input type="text" className="form-control" id="inputCardNumber" max-length="16"></input>
              </div>
              <div className="col-md-3">
                <label for="inputExyDate" className="form-label">EXP. DATE</label>
                <input type="text" className="form-control" id="inputExyDate" placeholder="MM"></input>
              </div>
              <div className="col-md-3">
                <label for="inputExyDate" className="form-label">(MM/YY)</label>
                <input type="text" className="form-control" id="inputExyDate" placeholder="YY"></input>
              </div>
              <div className="col-md-6">
                <label for="inputCVC" className="form-label">CVC</label>
                <input type="text" className="form-control" id="inputCVC"></input>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary w-100">Confirm</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}
