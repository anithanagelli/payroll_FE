"use client"

const EmployeePersonalTab = ({ employee }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Surname</label>
          <input type="text" className="w-full border rounded p-1 text-xs" defaultValue={employee.surname} />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Forename</label>
          <input type="text" className="w-full border rounded p-1 text-xs" defaultValue={employee.forename} />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Title</label>
          <select className="w-full border rounded p-1 text-xs">
            <option value="">Select...</option>
            <option value="Mr" selected={employee.gender === "male"}>
              Mr
            </option>
            <option value="Mrs" selected={employee.gender === "female"}>
              Mrs
            </option>
            <option value="Miss" selected={employee.gender === "female"}>
              Miss
            </option>
            <option value="Ms" selected={employee.gender === "female"}>
              Ms
            </option>
            <option value="Dr">Dr</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Gender</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input type="radio" name="gender" className="mr-1" defaultChecked={employee.gender === "male"} />
              <span className="text-xs">Male</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="gender" className="mr-1" defaultChecked={employee.gender === "female"} />
              <span className="text-xs">Female</span>
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Date of birth</label>
          <input type="text" className="w-full border rounded p-1 text-xs" defaultValue={employee.dateOfBirth} />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Address</label>
          <textarea className="w-full border rounded p-1 text-xs h-20"></textarea>
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Postcode</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
      </div>
      <div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Telephone</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Mobile</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">E-mail</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">NI number</label>
          <input type="text" className="w-full border rounded p-1 text-xs" defaultValue={employee.niNumber} />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Works number / Payroll ID</label>
          <input type="text" className="w-full border rounded p-1 text-xs" defaultValue={employee.id} />
        </div>
        <div className="mb-3">
          <label className="flex items-center">
            <input type="checkbox" className="mr-1" defaultChecked={employee.isDirector} />
            <span className="text-xs">Director</span>
          </label>
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Department</label>
          <select className="w-full border rounded p-1 text-xs" defaultValue={employee.department}>
            <option value="Default">Default</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default EmployeePersonalTab
