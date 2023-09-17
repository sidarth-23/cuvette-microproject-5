import classes from './Input.module.css'

export default function Input(props) {
  const hasError = props.hasError;
  const isDate = props.isDate;

  const defaultClass = isDate ? `${classes.input}` : `${classes.input} ${classes.notdate}`
  const inputClasses = hasError ? `${defaultClass} ${classes.error}` : `${defaultClass} `

  if (props.type === 'number' && props.name !== 'accNo') {
    return (
      <div>
        <input
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          min={props.min}
          max={props.max}
          className={inputClasses}
          placeholder={props.placeholder}
        />
      </div>
    )
  }

  return (
    <input
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      className={inputClasses}
      placeholder={props.placeholder}
    />
  )
}