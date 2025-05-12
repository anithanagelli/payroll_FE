"use client"

const EmployeePayTab = ({ employee }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Pay frequency</label>
          <select className="w-full border rounded p-1 text-xs">
            <option value="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
            <option value="fortnightly">Fortnightly</option>
            <option value="four-weekly">Four-weekly</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Payment method</label>
          <select className="w-full border rounded p-1 text-xs">
            <option value="bacs">BACS</option>
            <option value="cheque">Cheque</option>
            <option value="cash">Cash</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Basic salary</label>
          <input type="text" className="w-full border rounded p-1 text-xs" defaultValue="0.00" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Hourly rate</label>
          <input type="text" className="w-full border rounded p-1 text-xs" defaultValue="0.00" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Overtime rate</label>
          <input type="text" className="w-full border rounded p-1 text-xs" defaultValue="0.00" />
        </div>
      </div>
      <div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Bank account name</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Bank account number</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Bank sort code</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Building society roll number</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
      </div>
    </div>
  )
}

export default EmployeePayTab
