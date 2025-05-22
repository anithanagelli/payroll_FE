//auto-enrolment-tab.jsx
const AutoEnrolmentTab = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="">
        <label className="block text-xs mb-1">Staging date / Duties start date</label>
        <input type="text" className="w-full border rounded p-1 text-xs" />
      </div>
      <div className="">
        <label className="block text-xs mb-1">Re-enrolment date</label>
        <input type="text" className="w-full border rounded p-1 text-xs" />
      </div>
      <div className="">
        <label className="block text-xs mb-1">Defer/postpone until</label>
        <input type="text" className="w-full border rounded p-1 text-xs" />
      </div>
      
      <div className="">
        <label className="block text-xs mb-1 font-medium">NEST</label>
      </div>
      <div className="grid grid-cols-2 gap-4">
      <div className="">
        <label className="block text-xs mb-1">Online filing username</label>
        <input type="text" className="w-full border rounded p-1 text-xs" />
      </div>
      <div className="">
        <label className="block text-xs mb-1">Online filing password</label>
        <input type="password" className="w-full border rounded p-1 text-xs" />
      </div>
      <div>
      <div className="">
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <span className="text-xs">Use the same username and password in all data files</span>
        </div>
      </div>
      <div className="">
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <span className="text-xs">Report frequency as "Tax Monthly" instead of "Monthly"</span>
        </div>
      </div>
      <div className="">
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <span className="text-xs">Report frequency as "Tax Weekly" instead of "Weekly"</span>
        </div>
      </div>
      <div className="mb-3">
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <span className="text-xs">Ask for Payment Due Date</span>
        </div>
      </div>
      </div>
      <div className="mb-3">
        <label className="block text-xs mb-1">
          Monthly earnings period (this only applies to monthly paid employees)
        </label>
        <select className="w-full border rounded p-1 text-xs">
          <option>31</option>
          <option>30</option>
          <option>28</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="block text-xs mb-1">
          Adjust weekly/2-weekly/4-weekly earnings period relative to pay date by
        </label>
        <select className="w-full border rounded p-1 text-xs">
          <option>0</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>
      </div>
    </div>
  )
}

export default AutoEnrolmentTab
