import { useState, useContext } from "react"
import FormContext from "../store/form-context"

const useInput = (validateValue, field, maxlength, isText = false) => {
  const formCtx = useContext(FormContext)

  const [enteredValue, setEnteredValue] = useState(formCtx[field] || "")
  const [isTouch, setIsTouch] = useState(false)

  const valueIsValid = validateValue(enteredValue)
  const hasError = !valueIsValid && isTouch

  const valueChangeHandler = (event) => {
    const char = event.target.value
    if (char.length <= maxlength) {
      if (isText && !/^[A-Za-z\s]*$/.test(char)) return
      else if (!isText && isNaN(char)) return
      setEnteredValue(char.toUpperCase())
    }
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
