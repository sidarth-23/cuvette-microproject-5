import classes from "./SubmittedPage.module.css"
import checkmark from "../../assets/images/icons8-checkmark.svg"
import { useContext } from "react"
import FormContext from "../../store/form-context"

export default function SubmittedPage() {
  const { updateFormData } = useContext(FormContext)

  const submitHandler = (event) => {
    event.preventDefault()
    updateFormData("submitted", false)
  }

  return (
    <div className={classes.container}>
      <div className={classes.success}>
        <img src={checkmark} alt="Tick Mark" />
      </div>
      <div className={classes.thanks}>
        <h1>Thank You</h1>
        <p>We've added your card details</p>
      </div>
      <button type="submit" className={classes.btn} onClick={submitHandler}>
        Continue
      </button>
    </div>
  )
}
