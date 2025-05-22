//add-employee-step1.jsx
const AddEmployeeStep1 = ({ employeeData, handleInputChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs mb-1">Surname</label>
        <input
          type="text"
          className="w-full border rounded p-1 text-xs"
          value={employeeData.surname}
          onChange={(e) => handleInputChange("surname", e.target.value)}
        />
      </div>

      <div>
        <label className="block text-xs mb-1">Forename</label>
        <input
          type="text"
          className="w-full border rounded p-1 text-xs"
          value={employeeData.forename}
          onChange={(e) => handleInputChange("forename", e.target.value)}
        />
      </div>

      <div>
        <label className="block text-xs mb-1">Gender</label>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              className="mr-1"
              checked={employeeData.gender === "male"}
              onChange={() => handleInputChange("gender", "male")}
            />
            <span className="text-xs">Male</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              className="mr-1"
              checked={employeeData.gender === "female"}
              onChange={() => handleInputChange("gender", "female")}
            />
            <span className="text-xs">Female</span>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-xs mb-1">Date of birth</label>
        <input
          type="date"
          className="w-full border rounded p-1 text-xs"
          placeholder="DD/MM/YYYY"
          value={employeeData.dateOfBirth}
          onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
        />
      </div>

      <div>
        <label className="block text-xs mb-1">NI number</label>
        <input
          type="text"
          className="w-full border rounded p-1 text-xs"
          value={employeeData.niNumber}
          onChange={(e) => handleInputChange("niNumber", e.target.value)}
        />
      </div>

      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-1"
            checked={employeeData.isDirector}
            onChange={(e) => handleInputChange("isDirector", e.target.checked)}
          />
          <span className="text-xs">Director</span>
        </label>
      </div>

      <div>
        <label className="block text-xs mb-1">Department</label>
        <select
          className="w-full border rounded p-1 text-xs"
          value={employeeData.department}
          onChange={(e) => handleInputChange("department", e.target.value)}
        >
          <option value="Default">Default</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
        </select>
      </div>

      <div>
        <label className="block text-xs mb-1 font-medium">Starter type</label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="starterType"
              className="mr-1"
              checked={employeeData.starterType === "existing"}
              onChange={() => handleInputChange("starterType", "existing")}
            />
            <span className="text-xs">
              This employee was working for this employer from before the start of the tax year
            </span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="starterType"
              className="mr-1"
              checked={employeeData.starterType === "during"}
              onChange={() => handleInputChange("starterType", "during")}
            />
            <span className="text-xs">This employee started working for this employer during the tax year</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="starterType"
              className="mr-1"
              checked={employeeData.starterType === "unknown"}
              onChange={() => handleInputChange("starterType", "unknown")}
            />
            <span className="text-xs">I don't know when the employee started working for this employer</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default AddEmployeeStep1
