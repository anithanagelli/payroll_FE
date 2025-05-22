//terms-tab.jsx
const TermsTab = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="mb-3 mt-3">
        <label className="block text-xs mb-1">Hours worked per week</label>
        <input type="text" className="w-full border rounded p-1 text-xs" defaultValue="35.00" />
      </div>
      <div className="">
        <div className="flex items-center mt-8">
          <input type="checkbox" className="mr-2" />
          <span className="text-xs">Paid overtime</span>
        </div>
      </div>
      <div className="">
        <label className="block text-xs mb-1">Weeks notice required</label>
        <input type="text" className="w-full border rounded p-1 text-xs" defaultValue="4" />
      </div>
      <div className="">
        <label className="block text-xs mb-1">Days sickness on full pay</label>
        <input type="text" className="w-full border rounded p-1 text-xs" defaultValue="20" />
      </div>
      <div className="">
        <label className="block text-xs mb-1">Male retirement age</label>
        <input type="text" className="w-full border rounded p-1 text-xs" defaultValue="66" />
      </div>
      <div className="">
        <label className="block text-xs mb-1">Female retirement age</label>
        <input type="text" className="w-full border rounded p-1 text-xs" defaultValue="66" />
      </div>
      <div className="">
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <span className="text-xs">May join pension scheme</span>
        </div>
      </div>
      <div className="">
        <label className="block text-xs mb-1">Days holiday per year</label>
        <input type="text" className="w-full border rounded p-1 text-xs" defaultValue="28.0" />
      </div>
      <div className=" mt-0">
        <label className="block text-xs mb-1">Max. days to carry over</label>
        <input type="text" className="w-full border rounded p-1 text-xs" defaultValue="28.0" />
      </div>
    </div>
  )
}

export default TermsTab
