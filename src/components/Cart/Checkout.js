import classes from './Checkout.module.css';
import React from 'react';

const Checkout = (props) => {

  const confirmHandler = (e) => {};

  return (<form onSubmit={confirmHandler} className={classes.control}>
    <div>
      <label htmlFor="Name">Your Name</label>
      <input type="text" id="name" />
    </div>
    <div>
      <label htmlFor="street">Street</label>
      <input type="text" id="street" />
    </div>
    <div>
      <label htmlFor="postal">Postal Code</label>
      <input type="text" id="postal" />
    </div>
    <div>
      <label htmlFor="city">City</label>
      <input type="text" id="city" />
    </div>
    <button type="button" onClick={props.onCancel}>Cancel</button>
    <button>Confirm</button>
  </form>)
};

export default Checkout;
