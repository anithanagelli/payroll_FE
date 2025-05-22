"use client"

import { useState } from "react"
import { X } from "lucide-react"

const EmployeePayDetails = ({ employee, onClose }) => {
  const [activeTab, setActiveTab] = useState("Basic")
  const taxYear = "2025-26"
  const months = [
    "Apr-2025",
    "May-2025",
    "Jun-2025",
    "Jul-2025",
    "Aug-2025",
    "Sep-2025",
    "Oct-2025",
    "Nov-2025",
    "Dec-2025",
    "Jan-2026",
    "Feb-2026",
    "Mar-2026",
  ]

  // Sample data for the table
  const monthlyData = months.map((month) => ({
    month,
    taxCode: "1257L",
    niLetter: "X",
    basicPay: "2916.66",
  }))

  const tabs = [
    "Basic",
    "Hourly",
    "Additions",
    "Deductions",
    "Pensions",
    "Attachments",
    "SSP & SMP",
    "Holiday Pay",
    "Adjustments",
    "Rounding",
    "Loans",
    "Notes",
    "Tax & NIC",
  ]

  // Sample data for the summary section
  const summaryData = {
    basicPay: "2916.66",
    hourlyPay: "0.00",
    holidayPay: "0.00",
    otherAdditions: "0.00",
    incomeTax: "373.60",
    niEe: "0.00",
    pension: "0.00",
    otherDeductions: "0.00",
  }

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      <div className="flex justify-between items-center p-2 border-b bg-gray-100">
        <h3 className="text-sm font-medium">
          {employee ? `${employee.surname}, ${employee.forename}` : "Employee New"}
        </h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={16} />
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex items-center p-1 border-b bg-gray-100">
        <div className="flex space-x-1">
          {/* Icons would go here */}
          <button className="p-1 rounded hover:bg-gray-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <polyline points="7 3 7 8 15 8"></polyline>
            </svg>
          </button>
          <button className="p-1 rounded hover:bg-gray-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="9" x2="15" y2="15"></line>
              <line x1="15" y1="9" x2="9" y2="15"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-3 py-1 text-xs whitespace-nowrap ${activeTab === tab ? "bg-gray-200" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table Headers */}
      <div className="flex border-b bg-gray-100 text-xs">
        <div className="w-24 p-1 border-r font-medium"></div>
        <div className="w-16 p-1 border-r font-medium text-center">Tax Code</div>
        <div className="w-16 p-1 border-r font-medium text-center">NI Letter</div>
        <div className="w-24 p-1 border-r font-medium text-center">Basic Pay</div>
        <div className="w-24 p-1 border-r font-medium text-center">Hourly Pay</div>
        <div className="w-24 p-1 border-r font-medium text-center">Additions</div>
        <div className="w-24 p-1 border-r font-medium text-center">Deductions</div>
        <div className="w-24 p-1 border-r font-medium text-center">SSP, SMP, SPP & SAP</div>
        <div className="flex-1 p-1 font-medium text-center">Notes</div>
      </div>

      {/* Table Body */}
      <div className="flex-1 overflow-auto">
        {monthlyData.map((row, index) => (
          <div key={row.month} className={`flex text-xs ${index % 2 === 0 ? "bg-green-50" : "bg-yellow-50"}`}>
            <div className="w-24 p-1 border-r">{row.month}</div>
            <div className="w-16 p-1 border-r text-center">{row.taxCode}</div>
            <div className="w-16 p-1 border-r text-center">{row.niLetter}</div>
            <div className="w-24 p-1 border-r text-right">{row.basicPay}</div>
            <div className="w-24 p-1 border-r text-right">0.00</div>
            <div className="w-24 p-1 border-r text-right">0.00</div>
            <div className="w-24 p-1 border-r text-right">0.00</div>
            <div className="w-24 p-1 border-r text-right">0.00</div>
            <div className="flex-1 p-1"></div>
          </div>
        ))}
      </div>

      {/* Summary Footer */}
      <div className="border-t bg-gray-100 p-1">
        <div className="grid grid-cols-4 gap-2 text-xs">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <span className="font-medium">Basic Pay</span>
              <span className="text-right">{summaryData.basicPay}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Hourly pay</span>
              <span className="text-right">{summaryData.hourlyPay}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-xs">Click here to show calculation</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <span className="font-medium">Holiday Pay</span>
              <span className="text-right">{summaryData.holidayPay}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Other Additions</span>
              <span className="text-right">{summaryData.otherAdditions}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <span className="font-medium">Income Tax</span>
              <span className="text-right">{summaryData.incomeTax}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Nat Ins</span>
              <span className="text-right">{summaryData.niEe}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <span className="font-medium">Pension</span>
              <span className="text-right">{summaryData.pension}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Other Deductions</span>
              <span className="text-right">{summaryData.otherDeductions}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeePayDetails
