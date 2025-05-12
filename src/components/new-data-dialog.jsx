"use client"

const NewDataDialog = ({
  setShowNewDataDialog,
  setShowPayrollManagerDialog,
  employerName,
  setEmployerName,
  taxYear,
  setTaxYear,
}) => {
  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-md shadow-lg w-80">
        <div className="flex justify-between items-center p-2 border-b">
          <h3 className="text-sm font-medium">New Data File</h3>
          <button onClick={() => setShowNewDataDialog(false)} className="text-gray-500 hover:text-gray-700">
            ×
          </button>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <label className="block text-sm mb-1">Employer Name</label>
            <input
              type="text"
              className="w-full border rounded p-1 text-sm"
              value={employerName}
              onChange={(e) => setEmployerName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Tax Year</label>
            <select
              className="w-full border rounded p-1 text-sm"
              value={taxYear}
              onChange={(e) => setTaxYear(e.target.value)}
            >
              <option value="2025-26">2025-26</option>
              <option value="2024-25">2024-25</option>
              <option value="2023-24">2023-24</option>
            </select>
          </div>
          <div className="flex justify-between mt-6">
            <button className="border rounded px-4 py-1 text-sm">Help</button>
            <div>
              <button
                className="border rounded px-4 py-1 text-sm mr-2"
                onClick={() => {
                  setShowNewDataDialog(false)
                  setShowPayrollManagerDialog(true)
                }}
              >
                OK
              </button>
              <button className="border rounded px-4 py-1 text-sm" onClick={() => setShowNewDataDialog(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewDataDialog
