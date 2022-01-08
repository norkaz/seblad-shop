import React from "react"
import "./Input.less"

export default function Input({
  placeholder,
  type,
  required,
  name,
  value,
  onChange,
  hidden,
  className,
}) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      required={required}
      name={name}
      value={value}
      onChange={onChange}
      hidden={hidden}
      className={["input", className].join(" ")}
    />
  )
}
