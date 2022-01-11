import React from "react"
import * as style from "./input.module.less"

export default function Input({
  placeholder,
  label,
  type,
  required,
  name,
  value,
  min,
  max,
  onChange,
  hidden,
  className,
}) {
  return (
    <>
      <span
        className={[style.inputContainer, hidden && style.hidden].join(" ")}
      >
        <span className={style.label}>{label}</span>
        <input
          placeholder={placeholder}
          type={type}
          required={required}
          name={name}
          value={value}
          min={min}
          max={max}
          onChange={onChange}
          hidden={hidden}
          className={[style.input, className].join(" ")}
        />
      </span>
    </>
  )
}
