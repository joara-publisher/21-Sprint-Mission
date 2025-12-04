function Button({classNames, children, onClick}) {
  return (
    <button className={classNames} onClick={onClick}>{children}</button>
  )
}

export default Button;