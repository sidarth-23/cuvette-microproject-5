import classes from './Input.module.css'

export default function Input(props) {
  const hasError = props.hasError;

  const inputClasses = hasError ? `${classes.input} ${classes.error}` : `${classes.input}`

  if (props.type === 'number' && props.name !== 'accNo') {
    return (
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        min={props.min}
        max={props.max}
        className={inputClasses}
      />
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
    />
  )
}