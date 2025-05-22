//add-employee-dialog.jsx
import { useState } from "react"
import { X } from "lucide-react"
import AddEmployeeStep1 from "./add-employee-step1.jsx"
import AddEmployeeStep2 from "./add-employee-step2.jsx"
import AddEmployeeWarningDialog from "./add-employee-warning-dialog.jsx"

const AddEmployeeDialog = ({ onCancel, onSave }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [showWarningDialog, setShowWarningDialog] = useState(false)
  const [warningMessage, setWarningMessage] = useState("")

  const [employeeData, setEmployeeData] = useState({
    surname: "",
    forename: "",
    gender: "",
    dateOfBirth: "",
    niNumber: "",
    isDirector: false,
    department: "Default",
    starterType: "existing",
    dateStarted: "",
    taxCode: "",
    isNI1: false,
    studentLoan: "none",
    postGradLoan: false,
  })

  const handleInputChange = (field, value) => {
    setEmployeeData({
      ...employeeData,
      [field]: value,
    })
  }

  const validateStep1 = () => {
    if (!employeeData.surname) {
      setWarningMessage("Please enter a surname")
      setShowWarningDialog(true)
      return false
    }

    if (!employeeData.forename) {
      setWarningMessage("Please enter a forename")
      setShowWarningDialog(true)
      return false
    }

    if (!employeeData.dateOfBirth) {
      setWarningMessage("Please enter a date of birth")
      setShowWarningDialog(true)
      return false
    }

    // Calculate age
    const dob = new Date(employeeData.dateOfBirth)
    const today = new Date()
    let age = today.getFullYear() - dob.getFullYear()
    const monthDiff = today.getMonth() - dob.getMonth()

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--
    }

    if (age < 16) {
      setWarningMessage("Employee must be at least 16 years old")
      setShowWarningDialog(true)
      return false
    }

    if (age > 70) {
      setWarningMessage(
        "The date of birth you have entered makes this person currently " + age + " years old. Is this correct?",
      )
      setShowWarningDialog(true)
      return true // We'll continue if they confirm
    }

    return true
  }

  const validateStep2 = () => {
    if (!employeeData.taxCode) {
      setWarningMessage("Please enter a tax code")
      setShowWarningDialog(true)
      return false
    }

    return true
  }

  const handleNext = () => {
    if (currentStep === 1) {
      if (validateStep1()) {
        setCurrentStep(2)
      }
    } else if (currentStep === 2) {
      if (validateStep2()) {
        onSave(employeeData)
      }
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleWarningResponse = (response) => {
    setShowWarningDialog(false)
    if (response === "yes" && currentStep === 1) {
      setCurrentStep(2)
    }
  }

  return (
    <div className="inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-md shadow-lg w-[500px]">
        <div className="flex justify-between items-center p-2 border-b">
          <h3 className="text-sm font-medium">Add a new employee</h3>
          <button onClick={onCancel} className="text-gray-500 hover:text-gray-700">
            <X size={16} />
          </button>
        </div>

        <div className="p-4">
          {currentStep === 1 && <AddEmployeeStep1 employeeData={employeeData} handleInputChange={handleInputChange} />}

          {currentStep === 2 && <AddEmployeeStep2 employeeData={employeeData} handleInputChange={handleInputChange} />}
        </div>

        <div className="">
          {/* <button className="border rounded px-3 py-1 text-xs" onClick={() => {}}>
            Help
          </button> */}
          <div className="flex justify-end p-2 border-t">
            {currentStep > 1 && (
              <button className="border rounded px-3 py-1 text-xs mr-2" onClick={handlePrev}>
                &lt; Prev
              </button>
            )}
            <button className="border rounded px-3 py-1 text-xs mr-2" onClick={handleNext}>
              {currentStep < 2 ? "Next >" : "Finish"}
            </button>
            <button className="border rounded px-3 py-1 text-xs" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Warning Dialog */}
      {showWarningDialog && <AddEmployeeWarningDialog message={warningMessage} onResponse={handleWarningResponse} />}
    </div>
  )
}

export default AddEmployeeDialog
