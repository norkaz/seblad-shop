import React from "react"
import "./Input.less"

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
      <label>
        <span className="label">{label}</span>
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
          className={["input", className].join(" ")}
        />
      </label>
    </>
  )
}
