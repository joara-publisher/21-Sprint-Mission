function Button({classNames, children, onClick, disabled=false}) {
  return (
    <button className={classNames} onClick={onClick} disabled={disabled}>{children}</button>
  )
}

export default Button;