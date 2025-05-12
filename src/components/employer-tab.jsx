const EmployerTab = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div className="">
          <label className="block text-xs mb-1">Employer name</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="">
          <label className="block text-xs mb-1">Address</label>
          <textarea className="w-full border rounded p-1 text-xs"></textarea>
        </div>
        <div className="">
          <label className="block text-xs mb-1">Postcode</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="">
          <label className="block text-xs mb-1">Telephone</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="">
          <label className="block text-xs mb-1">E-mail</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="">
          <label className="block text-xs mb-1">Contact forename</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="">
          <label className="block text-xs mb-1">Contact surname</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="">
          <label className="block text-xs mb-1">POP password</label>
          <input type="password" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="">
          <label className="block text-xs mb-1">User reference</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="">
          <label className="block text-xs mb-1">Date PAYE scheme started</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="">
          <label className="block text-xs mb-1">Date PAYE scheme ceased</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
      </div>
      <div>
        <div className="">
          <label className="block text-xs mb-1">Click here to set a logo</label>
          <div className="border w-full h-10 bg-gray-50"></div>
        </div>
        <div className="">
          <label className="block text-xs mb-1">RTI batch processing</label>
          <div className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-xs">Tick this box if you want to file RTI returns for this file in a batch</span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-xs">
              For the first FPS returns report that the previous works numbers / payroll IDs are unknown
            </span>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-xs">Ensure all employees have a unique works number / payroll ID</span>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-xs">
              Warn if hourly rates are below the National Minimum Wage, or when an employee reaches an age threshold
            </span>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-xs">Show age on the hourly tab of the Pay Details screen</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployerTab
