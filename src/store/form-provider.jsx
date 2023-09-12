import { useState } from "react"

import FormContext from "./form-context"

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    accNo: "",
    validMonth: "",
    validYear: "",
    cvv: "",
    submitted: false,
  })

  const updateFormData = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }))
  }

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider