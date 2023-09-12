import { useState, useContext } from "react"
import FormContext from "../store/form-context"

const useInput = (validateValue, field) => {
  const formCtx = useContext(FormContext)

  const [enteredValue, setEnteredValue] = useState(formCtx[field])
  const [isTouch, setIsTouch] = useState(false)

  const valueIsValid = validateValue(enteredValue)
  const hasError = !valueIsValid && isTouch

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value)
  }

  const inputBlurHandler = () => {
    setIsTouch(true)
  }

  const reset = () => {
    setEnteredValue("")
    setIsTouch(false)
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  }
}

export default useInput
