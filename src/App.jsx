import React, { useContext, useEffect, useState } from "react"

import "./App.css"
import UserForm from "./components/UserForm/Form"
import Background from "./components/UI/Background"
import Card from "./components/CardLayout/Card"
import FormContext from "./store/form-context"
import SubmittedPage from "./components/ResultPage/Submittedpage"

function App() {
  const { formData } = useContext(FormContext)
  const [submit, setSubmit] = useState(formData.submitted)

  useEffect(() => {
    console.log(formData.submitted)
    setSubmit(formData.submitted)
  }, [formData])

  return (
    <React.Fragment>
      <Background />
      <div className="container">
        <Card />
        {submit ? <SubmittedPage /> : <UserForm />}
      </div>
    </React.Fragment>
  )
}

export default App
