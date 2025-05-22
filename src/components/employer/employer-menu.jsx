//employer-menu.jsx
const EmployerMenu = ({ handleEmployerMenuClick }) => {
  return (
    <div className="absolute top-full left-[180px] w-60 bg-white border shadow-md z-20 mt-1">
      <div
        className="flex items-center px-3 py-1.5 hover:bg-gray-100"
        onClick={() => handleEmployerMenuClick("Employer Details")}
      >
        <span className="text-sm">Employer Details</span>
        {/* <span className="text-xs text-gray-500 ml-auto">Ctrl+R</span> */}
      </div>
      {/* <div className="flex items-center px-3 py-1.5 hover:bg-gray-100">
        <span className="text-sm">Departments</span>
      </div>
      <div className="flex items-center px-3 py-1.5 hover:bg-gray-100">
        <span className="text-sm">Statutory Pay Funding</span>
      </div>
      <div className="flex items-center px-3 py-1.5 hover:bg-gray-100">
        <span className="text-sm">Tax Refund Funding</span>
      </div>
      <div className="flex items-center px-3 py-1.5 hover:bg-gray-100">
        <span className="text-sm">CIS Suffered</span>
      </div>
      <div className="flex items-center px-3 py-1.5 hover:bg-gray-100">
        <span className="text-sm">Previous Year Overpayment to HMRC</span>
      </div> */}
    </div>
  )
}

export default EmployerMenu
