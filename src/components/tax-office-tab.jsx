const TaxOfficeTab = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div className="mt-2 mb-3">
          <label className="block text-xs mb-1">HMRC References</label>
        </div>
        <div className="">
          <label className="block text-xs mb-1">PAYE reference</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="">
          <label className="block text-xs mb-1">Accounts office reference</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="">
          <label className="block text-xs mb-1">Payment method</label>
          <select className="w-full border rounded p-1 text-xs">
            <option>Cheque</option>
            <option>BACS</option>
            <option>Direct Debit</option>
          </select>
        </div>
        <div className="">
          <label className="block text-xs mb-1">Unique Tax Ref.</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="">
          <label className="block text-xs mb-1">Corporation Tax Ref.</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Payroll Giving Ref.</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="mb-3">
          <div className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-xs">SBR qualified this year</span>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-xs">SBR qualified last year</span>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-xs">No RTI due warnings</span>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" checked />
            <span className="text-xs">Claim NIC Allowance</span>
          </div>
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Child Support Ref.</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
      </div>
      <div>
        <div className="mb-3 mt-3">
          <label className="block text-xs mb-1">Tax office (not required - for information only)</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">PAYE district</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Tax office address</label>
          <textarea className="w-full border rounded p-1 text-xs h-20"></textarea>
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Postcode</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Telephone</label>
          <input type="text" className="w-full border rounded p-1 text-xs" />
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">Apprenticeship Levy</label>
          <div className="flex items-center">
            <label className="block text-xs mr-2">Annual Allowance</label>
            <input type="text" className="border rounded p-1 text-xs w-24" defaultValue="15000.00" />
          </div>
          <button className="border rounded px-2 py-1 text-xs mt-2">Change levy allowance</button>
        </div>
      </div>
    </div>
  )
}

export default TaxOfficeTab
