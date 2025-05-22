//employee-tax-tab.jsx
const EmployeeTaxTab = ({ employee }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Tax code</label>
          <input type="text" className="w-full border rounded p-1 text-xs" defaultValue={employee.taxCode} />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Tax basis</label>
          <select className="w-full border rounded p-1 text-xs">
            <option value="cumulative">Cumulative</option>
            <option value="week1month1">Week 1 / Month 1</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Student loans</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="studentLoan"
                className="mr-1"
                defaultChecked={employee.studentLoan === "none"}
              />
              <span className="text-xs">None</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="studentLoan"
                className="mr-1"
                defaultChecked={employee.studentLoan === "type1"}
              />
              <span className="text-xs">Type 1</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="studentLoan"
                className="mr-1"
                defaultChecked={employee.studentLoan === "type2"}
              />
              <span className="text-xs">Type 2</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="studentLoan"
                className="mr-1"
                defaultChecked={employee.studentLoan === "type4"}
              />
              <span className="text-xs">Type 4</span>
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label className="flex items-center">
            <input type="checkbox" className="mr-1" defaultChecked={employee.postGradLoan} />
            <span className="text-xs">Postgrad loan</span>
          </label>
        </div>
      </div>
      <div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Previous pay</label>
          <input type="text" className="w-full border rounded p-1 text-xs" defaultValue="0.00" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Previous tax</label>
          <input type="text" className="w-full border rounded p-1 text-xs" defaultValue="0.00" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Previous student loan deduction</label>
          <input type="text" className="w-full border rounded p-1 text-xs" defaultValue="0.00" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Previous postgrad loan deduction</label>
          <input type="text" className="w-full border rounded p-1 text-xs" defaultValue="0.00" />
        </div>
      </div>
    </div>
  )
}

export default EmployeeTaxTab
