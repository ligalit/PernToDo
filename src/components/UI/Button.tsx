import React from 'react';
import s from "./Button.module.css"

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={s.btn}  {...props}></button>
    );
};

export default Button;