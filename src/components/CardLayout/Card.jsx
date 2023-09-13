import { useContext, useEffect, useState } from "react"

import classes from "./Card.module.css"
import CardBack from "./CardBack"
import CardFront from "./CardFront"
import FormContext from "../../store/form-context"

export default function Card() {
  const { formData, updateFormData } = useContext(FormContext)
  const [tempData, setTempData] = useState({
    accNo: "0000 0000 0000 0000",
    cvv: "000",
    validMonth: "00",
    validYear: "00",
    name: "",
  })

  useEffect(() => {
    if (formData.submitted) {
      const accNumber = String(formData.accNo)
        .replace(/[^0-9]/gi, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
      const month = String(formData.validMonth).padStart(2, "0")
      const year = String(formData.validYear).padStart(2, "0")
      setTempData({
        accNo: accNumber,
        cvv: String(formData.cvv),
        validMonth: month,
        validYear: year,
        name: formData.name,
      })
    }
  }, [formData, updateFormData])

  return (
    <div className={classes.container}>
      <CardFront
        accNo={tempData.accNo}
        validMonth={tempData.validMonth}
        name={tempData.name}
        validYear={tempData.validYear}
      />
      <CardBack cvv={tempData.cvv} />
    </div>
  )
}
