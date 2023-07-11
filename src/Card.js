import React from 'react';
import './Card.css';
export default function Card(){
  return (
    <div className="Card">
        <div className="row">
          <div className="col-lg-8 background-image">
            <div className="card-front">
              
            </div>

          </div>
          <div className="col-md-3 col-lg-4 container align-items-center card-form">
            <form className="row g-3 align-items-center">
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
