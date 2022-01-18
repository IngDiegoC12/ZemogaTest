import React, { Children, useState} from 'react';
import './Button.css';


const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];

const COLOR = ['primary', 'blue', 'red', 'green'];



export const Button = ({
    children,
    type,
    onChildClick,
    buttonStyle,
    buttonSize,
    buttonColor,
}) => {
 const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

 const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

 const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

// const [count, setCount] = useState(0);

 return (
   
   <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={() => onChildClick()} type={type}>{children}</button>
   
 )
 
}