const BankTab = () => {
  return (
    <div className="grid grid-cols-1">
      <div className="">
        <label className="block text-xs mb-1">Account name</label>
        <input type="text" className="w-full border rounded p-1 text-xs" />
      </div>
      <div className="">
        <label className="block text-xs mb-1">Account number</label>
        <input type="text" className="w-full border rounded p-1 text-xs" />
      </div>
      <div className="">
        <label className="block text-xs mb-1">Payment ref.</label>
        <input type="text" className="w-full border rounded p-1 text-xs" />
      </div>
      <div className="">
        <label className="block text-xs mb-1">Bank name</label>
        <input type="text" className="w-full border rounded p-1 text-xs" />
      </div>
      <div className="">
        <label className="block text-xs mb-1">Branch name</label>
        <input type="text" className="w-full border rounded p-1 text-xs" />
      </div>
      <div className="">
        <label className="block text-xs mb-1">Sort code</label>
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
        <label className="block text-xs mb-1">Payment lead days</label>
        <input type="text" className="w-full border rounded p-1 text-xs" defaultValue="0" />
      </div>
      <div className="">
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <span className="text-xs">Include these details in RTI returns</span>
        </div>
      </div>
    </div>
  )
}

export default BankTab
