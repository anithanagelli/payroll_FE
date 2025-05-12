"use client"

const PayrollManagerDialog = ({ setShowPayrollManagerDialog, employerName, taxYear, setHeaderText }) => {
  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-md shadow-lg w-90 h-[250px]">
        <div className="flex justify-between items-center p-2 border-b">
          <h3 className="text-sm font-medium">Payroll Manager</h3>
          <button onClick={() => setShowPayrollManagerDialog(false)} className="text-gray-500 hover:text-gray-700">
            ×
          </button>
        </div>
        <div className="p-4">
          <p className="text-sm mb-3">This new file will be saved with the following name:</p>

          <div className="mb-3">
            <label className="block text-sm mb-1">
              <span className="font-bold">File name:</span>{" "}
              <span className="text-sm ml-4">
                {employerName} {taxYear}
              </span>
            </label>
          </div>

          <div className="mb-3">
            <p className="text-sm">and in the default folder:</p>
            <div className="mb-2">
              <label className="block text-sm mb-1">
                <span className="font-bold">Folder: </span> L:\PAYROLL BACKUPS\PAYROLL BACKUP\Payroll\
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              Tick here if you wish to change these details (not recommended)
            </label>
          </div>

          <div className="flex justify-end mt-4">
            <button
              className="border rounded px-4 py-1 text-sm mr-2"
              onClick={() => {
                setShowPayrollManagerDialog(false)
                // Update the header text with the file name
                const newFileName = employerName
                  ? `Payroll Manager 100 - ${employerName} - ${taxYear}`
                  : `Payroll Manager 100 - ${employerName} - ${taxYear}`
                setHeaderText(newFileName)
              }}
            >
              OK
            </button>
            <button className="border rounded px-4 py-1 text-sm" onClick={() => setShowPayrollManagerDialog(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PayrollManagerDialog
