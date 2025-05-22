//employer-details-container.jsx
import { X } from "lucide-react"
import EmployerTab from "./employer-tab.jsx"
import TaxOfficeTab from "./tax-office-tab.jsx"
import BankTab from "../employee/bank-tab.jsx"
import TermsTab from "../employee/terms-tab.jsx"
import Class1ANICTab from "../employer/class1a-nic-tab.jsx"
import AutoEnrolmentTab from "../employee/auto-enrolment-tab.jsx"

const EmployerDetailsContainer = ({ activeEmployerTab, setActiveEmployerTab, setShowEmployerDetailsInContainer }) => {
  return (
    <div className="bg-white rounded-md shadow-lg border mx-auto max-w-[800px] w-full mt-10 px-4">
      <div className="flex justify-between items-center p-2 border-b">
        <h3 className="text-sm font-medium">Employer Details</h3>
        <button onClick={() => setShowEmployerDetailsInContainer(false)} className="text-gray-500 hover:text-gray-700">
          <X size={16} />
        </button>
      </div>

      {/* Tabs */}
       <div className="flex overflow-x-auto whitespace-nowrap border-b scrollbar-hide">
        <button
          className={`px-3 py-1 text-xs ${activeEmployerTab === "Employer" ? "bg-gray-200" : ""}`}
          onClick={() => setActiveEmployerTab("Employer")}
        >
          Employer
        </button>
        <button
          className={`px-3 py-1 text-xs ${activeEmployerTab === "Tax Office" ? "bg-gray-200" : ""}`}
          onClick={() => setActiveEmployerTab("Tax Office")}
        >
          Tax Office
        </button>
        <button
          className={`px-3 py-1 text-xs ${activeEmployerTab === "Bank" ? "bg-gray-200" : ""}`}
          onClick={() => setActiveEmployerTab("Bank")}
        >
          Bank
        </button>
        <button
          className={`px-3 py-1 text-xs ${activeEmployerTab === "Terms" ? "bg-gray-200" : ""}`}
          onClick={() => setActiveEmployerTab("Terms")}
        >
          Terms
        </button>
        <button
          className={`px-3 py-1 text-xs ${activeEmployerTab === "Class 1A NIC adjustments" ? "bg-gray-200" : ""}`}
          onClick={() => setActiveEmployerTab("Class 1A NIC adjustments")}
        >
          Class 1A NIC adjustments
        </button>
        <button
          className={`px-3 py-1 text-xs ${activeEmployerTab === "Auto-Enrolment pensions" ? "bg-gray-200" : ""}`}
          onClick={() => setActiveEmployerTab("Auto-Enrolment pensions")}
        >
          Auto-Enrolment pensions
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeEmployerTab === "Employer" && <EmployerTab />}
        {activeEmployerTab === "Tax Office" && <TaxOfficeTab />}
        {activeEmployerTab === "Bank" && <BankTab />}
        {activeEmployerTab === "Terms" && <TermsTab />}
        {activeEmployerTab === "Class 1A NIC adjustments" && <Class1ANICTab />}
        {activeEmployerTab === "Auto-Enrolment pensions" && <AutoEnrolmentTab />}
      </div>

      {/* Dialog Footer */}
      <div className="flex justify-end p-2 border-t">
        {/* <div>
          <button className="border rounded px-3 py-1 text-xs mr-2">Notes</button>
          <button className="border rounded px-3 py-1 text-xs">Print</button>
        </div> */}
        <div>
          {/* <button className="border rounded px-3 py-1 text-xs mr-2">Help</button> */}
          <button
            className="border rounded px-3 py-1 text-xs mr-2 bg-blue-50"
            onClick={() => setShowEmployerDetailsInContainer(false)}
          >
            OK
          </button>
          <button className="border rounded px-3 py-1 text-xs" onClick={() => setShowEmployerDetailsInContainer(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmployerDetailsContainer
