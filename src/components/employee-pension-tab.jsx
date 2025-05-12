"use client"

const EmployeePensionTab = ({ employee }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Pension scheme</label>
          <select className="w-full border rounded p-1 text-xs">
            <option value="none">None</option>
            <option value="nest">NEST</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Auto-enrolment status</label>
          <select className="w-full border rounded p-1 text-xs">
            <option value="eligible">Eligible jobholder</option>
            <option value="non-eligible">Non-eligible jobholder</option>
            <option value="entitled">Entitled worker</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Auto-enrolment date</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Postponement date</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
      </div>
      <div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Employee contribution</label>
          <div className="flex items-center">
            <input type="text" className="w-20 border rounded p-1 text-xs mr-2" defaultValue="0.00" />
            <select className="border rounded p-1 text-xs">
              <option value="percent">%</option>
              <option value="amount">£</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Employer contribution</label>
          <div className="flex items-center">
            <input type="text" className="w-20 border rounded p-1 text-xs mr-2" defaultValue="0.00" />
            <select className="border rounded p-1 text-xs">
              <option value="percent">%</option>
              <option value="amount">£</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">AVC</label>
          <div className="flex items-center">
            <input type="text" className="w-20 border rounded p-1 text-xs mr-2" defaultValue="0.00" />
            <select className="border rounded p-1 text-xs">
              <option value="percent">%</option>
              <option value="amount">£</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Salary sacrifice</label>
          <div className="flex items-center">
            <input type="text" className="w-20 border rounded p-1 text-xs mr-2" defaultValue="0.00" />
            <select className="border rounded p-1 text-xs">
              <option value="percent">%</option>
              <option value="amount">£</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeePensionTab
