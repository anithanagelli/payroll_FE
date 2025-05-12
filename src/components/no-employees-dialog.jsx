"use client"

const NoEmployeesDialog = ({ onResponse }) => {
  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-md shadow-lg w-80">
        <div className="flex justify-between items-center p-2 border-b">
          <h3 className="text-sm font-medium">Payroll Manager</h3>
          <button onClick={() => onResponse("cancel")} className="text-gray-500 hover:text-gray-700">
            ×
          </button>
        </div>
        <div className="p-4">
          <p className="text-sm mb-4">You do not have any employees created. Would you like to create one?</p>

          <div className="flex justify-between mt-4">
            <button className="border rounded px-4 py-1 text-sm" onClick={() => onResponse("help")}>
              Help
            </button>
            <div>
              <button className="border rounded px-4 py-1 text-sm mr-2 bg-blue-50" onClick={() => onResponse("yes")}>
                Yes
              </button>
              <button className="border rounded px-4 py-1 text-sm mr-2" onClick={() => onResponse("no")}>
                No
              </button>
              <button className="border rounded px-4 py-1 text-sm" onClick={() => onResponse("cancel")}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoEmployeesDialog
