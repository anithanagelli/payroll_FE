"use client"

import { useState } from "react"
import { X } from "lucide-react"
import EmployeePersonalTab from "./employee-personal-tab.jsx"
import EmployeeEmploymentTab from "./employee-employment-tab.jsx"
import EmployeePayTab from "./employee-pay-tab.jsx"
import EmployeeTaxTab from "./employee-tax-tab.jsx"
import EmployeeNITab from "./employee-ni-tab.jsx"
import EmployeePensionTab from "./employee-pension-tab.jsx"

const EmployeeDetailsContainer = ({ employee, setShowEmployeeDetailsInContainer }) => {
  const [activeTab, setActiveTab] = useState("Personal")

  return (
    <div className="bg-white rounded-md shadow-lg border">
      <div className="flex justify-between items-center p-2 border-b">
        <h3 className="text-sm font-medium">
          Employee Details - {employee.surname}, {employee.forename}
        </h3>
        <button onClick={() => setShowEmployeeDetailsInContainer(false)} className="text-gray-500 hover:text-gray-700">
          <X size={16} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b">
        <button
          className={`px-3 py-1 text-xs ${activeTab === "Personal" ? "bg-gray-200" : ""}`}
          onClick={() => setActiveTab("Personal")}
        >
          Personal
        </button>
        <button
          className={`px-3 py-1 text-xs ${activeTab === "Employment" ? "bg-gray-200" : ""}`}
          onClick={() => setActiveTab("Employment")}
        >
          Employment
        </button>
        <button
          className={`px-3 py-1 text-xs ${activeTab === "Pay" ? "bg-gray-200" : ""}`}
          onClick={() => setActiveTab("Pay")}
        >
          Pay
        </button>
        <button
          className={`px-3 py-1 text-xs ${activeTab === "Tax" ? "bg-gray-200" : ""}`}
          onClick={() => setActiveTab("Tax")}
        >
          Tax
        </button>
        <button
          className={`px-3 py-1 text-xs ${activeTab === "NI" ? "bg-gray-200" : ""}`}
          onClick={() => setActiveTab("NI")}
        >
          NI
        </button>
        <button
          className={`px-3 py-1 text-xs ${activeTab === "Pension" ? "bg-gray-200" : ""}`}
          onClick={() => setActiveTab("Pension")}
        >
          Pension
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === "Personal" && <EmployeePersonalTab employee={employee} />}
        {activeTab === "Employment" && <EmployeeEmploymentTab employee={employee} />}
        {activeTab === "Pay" && <EmployeePayTab employee={employee} />}
        {activeTab === "Tax" && <EmployeeTaxTab employee={employee} />}
        {activeTab === "NI" && <EmployeeNITab employee={employee} />}
        {activeTab === "Pension" && <EmployeePensionTab employee={employee} />}
      </div>

      {/* Dialog Footer */}
      <div className="flex justify-between p-2 border-t">
        <div>
          <button className="border rounded px-3 py-1 text-xs mr-2">Notes</button>
          <button className="border rounded px-3 py-1 text-xs">Print</button>
        </div>
        <div>
          <button className="border rounded px-3 py-1 text-xs mr-2">Help</button>
          <button
            className="border rounded px-3 py-1 text-xs mr-2 bg-blue-50"
            onClick={() => setShowEmployeeDetailsInContainer(false)}
          >
            OK
          </button>
          <button className="border rounded px-3 py-1 text-xs" onClick={() => setShowEmployeeDetailsInContainer(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDetailsContainer
