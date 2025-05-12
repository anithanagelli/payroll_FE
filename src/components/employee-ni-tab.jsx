"use client"

const EmployeeNITab = ({ employee }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div className="mb-3">
          <label className="block text-xs mb-1">NI category</label>
          <select className="w-full border rounded p-1 text-xs">
            <option value="A">A - Standard rate</option>
            <option value="B">B - Married women's reduced rate</option>
            <option value="C">C - Employer only (over state pension age)</option>
            <option value="H">H - Apprentice under 25</option>
            <option value="J">J - Deferred rate</option>
            <option value="M">M - Under 21</option>
            <option value="Z">Z - No NI contributions</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="flex items-center">
            <input type="checkbox" className="mr-1" defaultChecked={employee.isNI1} />
            <span className="text-xs">NI no.1</span>
          </label>
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Director's NI method</label>
          <select className="w-full border rounded p-1 text-xs" disabled={!employee.isDirector}>
            <option value="standard">Standard</option>
            <option value="alternative">Alternative</option>
          </select>
        </div>
      </div>
      <div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Previous gross NI'able pay</label>
          <input type="text" className="w-full border rounded p-1 text-xs" defaultValue="0.00" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Previous employee's NI</label>
          <input type="text" className="w-full border rounded p-1 text-xs" defaultValue="0.00" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Previous employer's NI</label>
          <input type="text" className="w-full border rounded p-1 text-xs" defaultValue="0.00" />
        </div>
      </div>
    </div>
  )
}

export default EmployeeNITab
