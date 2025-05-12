"use client"

const EmployeeEmploymentTab = ({ employee }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Date started</label>
          <input type="text" className="w-full border rounded p-1 text-xs" defaultValue={employee.dateStarted} />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Date left</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Reason for leaving</label>
          <select className="w-full border rounded p-1 text-xs">
            <option value="">Select...</option>
            <option value="A">A - Retirement</option>
            <option value="B">B - Voluntary cessation</option>
            <option value="C">C - Redundancy</option>
            <option value="D">D - Dismissal</option>
            <option value="E">E - End of contract</option>
            <option value="F">F - Transfer</option>
            <option value="G">G - Death</option>
            <option value="H">H - Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1 font-medium">Starter type</label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="starterType"
                className="mr-1"
                defaultChecked={employee.starterType === "existing"}
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
                defaultChecked={employee.starterType === "during"}
              />
              <span className="text-xs">This employee started working for this employer during the tax year</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="starterType"
                className="mr-1"
                defaultChecked={employee.starterType === "unknown"}
              />
              <span className="text-xs">I don't know when the employee started working for this employer</span>
            </label>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Job title</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Hours per week</label>
          <input type="text" className="w-full border rounded p-1 text-xs" defaultValue="35.00" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Weeks notice required</label>
          <input type="text" className="w-full border rounded p-1 text-xs" defaultValue="4" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Days holiday per year</label>
          <input type="text" className="w-full border rounded p-1 text-xs" defaultValue="28.0" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Days sickness on full pay</label>
          <input type="text" className="w-full border rounded p-1 text-xs" defaultValue="20" />
        </div>
      </div>
    </div>
  )
}

export default EmployeeEmploymentTab
