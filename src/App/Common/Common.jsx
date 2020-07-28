import React from 'react';
import './Authbutn.scss';
import './Authinput.scss';

export const AuthButton = ({title,submit}) => (
    <div className="auth-btn">
        <button type="submit">{title}</button>
    </div>
);


export const AuthInput = ({ name, type, value, placeholder, onChange }) => (
    <>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );