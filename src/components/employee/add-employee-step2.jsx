//add-employee-step2.jsx
const AddEmployeeStep2 = ({ employeeData, handleInputChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs mb-1">Date started (if known)</label>
        <input
          type="text"
          className="w-full border rounded p-1 text-xs"
          placeholder="DD/MM/YYYY"
          value={employeeData.dateStarted}
          onChange={(e) => handleInputChange("dateStarted", e.target.value)}
        />
      </div>

      <div>
        <label className="block text-xs mb-1">Tax code</label>
        <input
          type="text"
          className="w-full border rounded p-1 text-xs"
          value={employeeData.taxCode}
          onChange={(e) => handleInputChange("taxCode", e.target.value)}
        />
      </div>

      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-1"
            checked={employeeData.isNI1}
            onChange={(e) => handleInputChange("isNI1", e.target.checked)}
          />
          <span className="text-xs">NI no.1</span>
        </label>
      </div>

      <div>
        <label className="block text-xs mb-1">Student loans</label>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="studentLoan"
              className="mr-1"
              checked={employeeData.studentLoan === "none"}
              onChange={() => handleInputChange("studentLoan", "none")}
            />
            <span className="text-xs">None</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="studentLoan"
              className="mr-1"
              checked={employeeData.studentLoan === "type1"}
              onChange={() => handleInputChange("studentLoan", "type1")}
            />
            <span className="text-xs">Type 1</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="studentLoan"
              className="mr-1"
              checked={employeeData.studentLoan === "type2"}
              onChange={() => handleInputChange("studentLoan", "type2")}
            />
            <span className="text-xs">Type 2</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="studentLoan"
              className="mr-1"
              checked={employeeData.studentLoan === "type4"}
              onChange={() => handleInputChange("studentLoan", "type4")}
            />
            <span className="text-xs">Type 4</span>
          </label>
        </div>
      </div>

      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-1"
            checked={employeeData.postGradLoan}
            onChange={(e) => handleInputChange("postGradLoan", e.target.checked)}
          />
          <span className="text-xs">Postgrad loan</span>
        </label>
      </div>
    </div>
  )
}

export default AddEmployeeStep2
