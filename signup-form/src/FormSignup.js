import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  //restructure
  const { handleChange, values, handleSubmit, errors }
  = useForm(submitForm, validate);

  return (
    <div className= "form-details">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Welcome!</h1>
        <h2> Sign up Below.</h2>
        <div className="form-inputs">
          <label htmlFor="fullname"
          className="form-label">
            Fullname:
          </label>
          <input
            id="fullname"
            type="text"
            name="fullname"
            className="form-input"
            placeholder="Enter your full name"
            value={values.fullname}
            onChange={handleChange}
          />
          {errors.fullname && <p>{errors.fullname}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email"
          className="form-label">
          Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-input"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div className="form-inputs">
        <label htmlFor="password"
        className="form-label">
        Password:
      </label>
      <input
        id="password"
        type="password"
        name="password"
        className="form-input"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}
    </div>
    <div className="form-inputs">
      <label htmlFor="password2"
      className="form-label">
      Confirm Password:
    </label>
    <input
      id="password2"
      type="password"
      name="password2"
      className="form-input"
      placeholder="Enter your password"
      value={values.password2}
      onChange={handleChange}
    />
    {errors.password2 && <p>{errors.password2}</p>}
  </div>

  <button className="form=input-btn"
  type="submit">
    Sign up
  </button>

  </form>
  </div>
  );
};

export default FormSignup;
