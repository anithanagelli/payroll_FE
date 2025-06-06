//class1a-nic-tab.jsx
const Class1ANICTab = () => {
  return (
    <div>
      <div className="mb-3">
        <label className="block text-xs mb-1 font-medium">
          Enter adjustments if there are amounts not covered by entries for individual employees:
        </label>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
      <div className="mb-3">
        <label className="block text-xs mb-1 font-medium">Amount to be added</label>
      </div>
      <div className="mb-3">
        <label className="block text-xs mb-1">Amount</label>
        <input type="text" className="w-full border rounded p-1 text-xs" />
      </div>
      <div className="mb-3">
        <label className="block text-xs mb-1">Description</label>
        <input type="text" className="w-full border rounded p-1 text-xs" />
      </div>
      </div>
      <div>
      <div className="mb-3">
        <label className="block text-xs mb-1 font-medium">Amount to be deducted</label>
      </div>
      <div className="mb-3">
        <label className="block text-xs mb-1">Amount</label>
        <input type="text" className="w-full border rounded p-1 text-xs" />
      </div>
      <div className="mb-3">
        <label className="block text-xs mb-1">Description</label>
        <input type="text" className="w-full border rounded p-1 text-xs" />
      </div>
      </div>
    </div>
    </div>
  )
}

export default Class1ANICTab
