import { useContext, useEffect, useState } from "react"

import useInput from "../../hooks/use-input"
import FormContext from "../../store/form-context"
import Input from "../UI/Input"

import classes from "./Form.module.css"

const accValidate = (value) => {
  const valueString = String(value)

  const americanexValid =
    (parseInt(valueString.slice(0, 2)) === 34 ||
      parseInt(valueString.slice(0, 2)) === 37) &&
    valueString.length === 15

  const visacardValid =
    parseInt(valueString.slice(0, 1)) === 4 &&
    (valueString.length === 15 || valueString.length === 16)

  const discoverValid =
    (parseInt(valueString.slice(0, 4)) === 6011 && valueString.length === 16) ||
    (parseInt(valueString.slice(0, 1)) === 5 && valueString.length === 15)

  const mastercardValid =
    parseInt(valueString.slice(0, 2)) > 50 &&
    parseInt(valueString.slice(0, 2)) < 56 &&
    valueString.length === 16

  const dinerclubvalid =
    ((parseInt(valueString.slice(0, 3)) > 299 &&
      parseInt(valueString.slice(0, 3)) < 306) ||
      parseInt(valueString.slice(0, 2)) === 36 ||
      parseInt(valueString.slice(0, 2)) === 38) &&
    valueString.length === 14

  const jcbvalid =
    ((parseInt(valueString.slice(0, 4)) === 2131 ||
      parseInt(valueString.slice(0, 4)) === 1800) &&
      valueString.length === 15) ||
    parseInt(valueString.slice(0, 2)) === 36 ||
    valueString.length === 16

  return (
    americanexValid ||
    visacardValid ||
    discoverValid ||
    mastercardValid ||
    dinerclubvalid ||
    jcbvalid
  )
}

const nameValidate = (value) => {
  if (!value) return false
  return /^[A-Za-z\s]*$/.test(value) && String(value).length > 3
}

const yearValidate = (value) => {
  return parseInt(value) < 99 && parseInt(value) > 0
}

const monthValidate = (value) => {
  return parseInt(value) < 13 && parseInt(value) > 0
}

const cvvValidate = (value) => {
  return (
    parseInt(value) < 1000 && parseInt(value) > 0 && String(value).length === 3
  )
}

const UserForm = () => {
  const { formData, updateFormData } = useContext(FormContext)
  const {
    value: nameValue,
    isValid: nameIsvalid,
    hasError: nameHasError,
    valueChangeHandler: nameValueChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(nameValidate, "name", 40, true)

  const {
    value: accValue,
    isValid: accIsvalid,
    hasError: accHasError,
    valueChangeHandler: accValueChangeHandler,
    inputBlurHandler: accBlurHandler,
    reset: accReset,
  } = useInput(accValidate, "accNo", 16)

  const {
    value: monthValue,
    isValid: monthIsvalid,
    hasError: monthHasError,
    valueChangeHandler: monthValueChangeHandler,
    inputBlurHandler: monthBlurHandler,
    reset: monthReset,
  } = useInput(monthValidate, "validMonth", 2)

  const {
    value: yearValue,
    isValid: yearIsvalid,
    hasError: yearHasError,
    valueChangeHandler: yearValueChangeHandler,
    inputBlurHandler: yearBlurHandler,
    reset: yearReset,
  } = useInput(yearValidate, "validYear", 2)

  const {
    value: cvvValue,
    isValid: cvvIsvalid,
    hasError: cvvHasError,
    valueChangeHandler: cvvValueChangeHandler,
    inputBlurHandler: cvvBlurHandler,
    reset: cvvReset,
  } = useInput(cvvValidate, "cvv", 3)

  const [allIsValid, setAllIsValid] = useState(false)
  useEffect(() => {
    setAllIsValid(
      nameIsvalid && accIsvalid && monthIsvalid && yearIsvalid && cvvIsvalid
    )
  }, [nameIsvalid, accIsvalid, monthIsvalid, yearIsvalid, cvvIsvalid])

  const onSubmitHandler = (event) => {
    event.preventDefault()

    if (allIsValid) {
      // All values are valid, store the form data in context
      updateFormData("name", nameValue)
      updateFormData("accNo", accValue)
      updateFormData("validMonth", monthValue)
      updateFormData("validYear", yearValue)
      updateFormData("cvv", cvvValue)
      updateFormData("submitted", true)

      console.log("Form data stored in context:", formData)

      // Reset all input field values
      nameReset()
      accReset()
      cvvReset()
      monthReset()
      yearReset()
    } else {
      console.log("Form data not stored because not all values are valid.")
    }
  }

  return (
    <div className={classes.main}>
      <form onSubmit={onSubmitHandler} className={classes.container}>
        <div className={classes["inp-container"]}>
          <label htmlFor="name">CardHolder Name</label>
          <Input
            type="text"
            name="name"
            value={nameValue}
            onChange={nameValueChangeHandler}
            onBlur={nameBlurHandler}
            hasError={nameHasError}
            placeholder='e.g. John Wick'
          />
          <p className={classes.error}>
            {nameHasError
              ? !nameValue
                ? "Can't be blank"
                : "Invalid Name"
              : ""}
          </p>
        </div>
        <div className={classes["inp-container"]}>
          <label htmlFor="accno">Card Number</label>
          <Input
            type="number"
            name="accno"
            value={accValue}
            onChange={accValueChangeHandler}
            onBlur={accBlurHandler}
            hasError={accHasError}
            placeholder = 'e.g. 1234 5678 2354 3452'
          />
          <p className={classes.error}>
            {accHasError ? (!accValue ? "Can't be blank" : "Invalid Name") : ""}
          </p>
        </div>
        <div className={`${classes.row} ${classes.justify}`}>
          <div className={classes["inp-container"]}>
            <label htmlFor="name">Exp Date</label>
            <div className={classes.row}>
              <Input
                type="number"
                name="month"
                value={monthValue}
                onChange={monthValueChangeHandler}
                onBlur={monthBlurHandler}
                min={0}
                max={12}
                hasError={monthHasError}
                placeholder='MM'
                isDate={true}
              />
              <Input
                type="number"
                name="year"
                value={yearValue}
                onChange={yearValueChangeHandler}
                onBlur={yearBlurHandler}
                min={0}
                max={99}
                hasError={yearHasError}
                placeholder='YY'
                isDate = {true}
              />
            </div>
            <p className={classes.error}>
              {yearHasError || monthHasError
                ? !yearValue || !monthValue
                  ? "Can't be blank"
                  : "Invalid month or year"
                : ""}
            </p>
          </div>
          <div className={classes["inp-container"]}>
            <label htmlFor="cvv">CVV</label>
            <Input
              type="number"
              name="cvv"
              value={cvvValue}
              onChange={cvvValueChangeHandler}
              onBlur={cvvBlurHandler}
              min={0}
              max={999}
              hasError={cvvHasError}
              placeholder='e.g. 123'
            />
            <p className={classes.error}>
              {cvvHasError
                ? !cvvValue
                  ? "Can't be blank"
                  : "Invalid CVV"
                : ""}
            </p>
          </div>
        </div>
        <button type="submit" className={classes.btn} disabled={!allIsValid}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default UserForm
