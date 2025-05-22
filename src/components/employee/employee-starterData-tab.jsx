//employee-starterData-tab.jsx
const EmployeeStarterDataTab = ({ employee }) => {
  return (
    <div className="grid ">
      <div className="mb-3">
          <h1 className="font-bold text-xs mb-3">Starter type</h1>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="starterType"
                className="mr-1"
                defaultChecked={employee.starterType === "Existing employee"}
              />
              <span className="text-xs">Existing employee</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="starterType"
                className="mr-1"
                defaultChecked={employee.starterType === "Starter with a P45"}
              />
              <span className="text-xs">Starter with a P45</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="starterType"
                className="mr-1"
                defaultChecked={employee.starterType === "Starter without a P45"}
              />
              <span className="text-xs">Starter without a P45</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="starterType"
                className="mr-1"
                defaultChecked={employee.starterType === "P45 was provided later"}
              />
              <span className="text-xs">P45 was provided later</span>
            </label>
            
          </div>
        </div>

        <div className="mb-3">
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="starterType"
                className="mr-1"
                defaultChecked={employee.starterType === "Employee seconded to work in the UK"}
              />
              <span className="text-xs">Employee seconded to work in the UK</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="starterType"
                className="mr-1"
                defaultChecked={employee.starterType === "Non-employee being paid a pension"}
              />
              <span className="text-xs">Non-employee being paid a pension</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="starterType"
                className="mr-1"
                defaultChecked={employee.starterType === "Don't know"}
              />
              <span className="text-xs">Don't know</span>
            </label>            
          </div>
        </div>
    </div>
  )
}

export default EmployeeStarterDataTab
