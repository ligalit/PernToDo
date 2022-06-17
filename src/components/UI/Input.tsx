import React from 'react';
import s from "./Input.module.css"

const Input = (props: React.HTMLProps<HTMLInputElement>) => {
    return (
        <input className={s.input}  {...props}/>
    );
};

export default Input;