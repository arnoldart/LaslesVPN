import React from 'react'
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large', 'btn--wide']

const COLOR = ['primary', 'blue', 'red', 'green']

const BORDER = ['border--med', 'border--large']

const SHADOW = ['btn--shadow', 'btn--light']

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
  buttonBorder,
  buttonShadow
}) => {

const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null

const checkButtonBorder = BORDER.includes(buttonBorder) ? buttonBorder : BORDER[0]

const checkButtonShadow = SHADOW.includes(buttonShadow) ? buttonShadow : null

return (
  <button
  className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor} ${checkButtonBorder} ${checkButtonShadow}`}
  onClick={onClick}
  type={type}
>
  {children}
</button>
)
}