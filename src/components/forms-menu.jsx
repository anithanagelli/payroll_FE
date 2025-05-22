"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFileAlt,
  faFileInvoice,
  faFileContract,
  faFileMedical,
  faFileSignature,
  faCar,
  faMoneyBillWave,
  faUserPlus,
  faUserMinus,
} from "@fortawesome/free-solid-svg-icons"

const FormsMenu = ({ employee, onClose, onSelectForm }) => {
  const [activeTab, setActiveTab] = useState("Basic")
  const taxYear = "2025-26"
  const currentPeriod = "April 2025 (paid 30-Apr-2025)"

  // Sample forms list
  const formsList = [
    { id: "P11", icon: faFileAlt, name: "Deductions Worksheet P11" },
    { id: "P60", icon: faFileInvoice, name: "End of Year P60" },
    { id: "EOY", icon: faFileContract, name: "Employee End of Year Summary" },
    { id: "P11D", icon: faFileMedical, name: "Expenses & Benefits P11D" },
    { id: "P11DS", icon: faFileSignature, name: "Expenses & Benefits Summary" },
    { id: "P11Db", icon: faFileSignature, name: "Employee's Declaration P11D(b)" },
    { id: "P46Car", icon: faCar, name: "Car Change Notification P46(Car)" },
    { id: "P32", icon: faMoneyBillWave, name: "Employer's Payments P32" },
    { id: "P45", icon: faUserMinus, name: "Employee Leaving Statement (P45)" },
    { id: "P46", icon: faUserPlus, name: "Blank New Employee Form" },
  ]

  // Sample data for the table (same as in employee-pay-details.jsx)
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

  const handleFormSelect = (formId) => {
    onSelectForm(formId)
  }

  return (
    <div className="fixed inset-0 flex z-50">
      {/* Forms Menu Sidebar */}
      <div className="w-64 bg-white border-r flex flex-col">
        <div className="p-2 border-b bg-gray-100 flex justify-between items-center">
          <h3 className="text-sm font-medium">Forms</h3>
        </div>
        <div className="flex-1 overflow-auto">
          {formsList.map((form) => (
            <div
              key={form.id}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer border-b"
              onClick={() => handleFormSelect(form.id)}
            >
              <FontAwesomeIcon icon={form.icon} className="mr-2 text-blue-600" />
              <span className="text-xs">{form.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Content Area */}
      <div className="flex-1 bg-white flex flex-col">
        <div className="flex justify-between items-center p-2 border-b bg-gray-100">
          <h3 className="text-sm font-medium">{formsList.find((f) => f.id === "P11")?.name || "Form"}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={16} />
          </button>
        </div>

        {/* Current Period Header */}
        <div className="flex items-center justify-between border-b bg-gray-300 p-1">
          <button className="p-1 rounded hover:bg-gray-100">
            <ChevronLeft size={14} />
          </button>
          <div className="text-xs text-center">Current pay period: {currentPeriod}</div>
          <button className="p-1 rounded hover:bg-gray-100">
            <ChevronRight size={14} />
          </button>
        </div>

        {/* RTI Returns Notice */}
        <div className="flex gap-2 p-1 justify-center text-red-600 text-sm border-b">
          <span className="text-red-500">⚠️</span>
          <div className="cursor-pointer">There are RTI returns due - click here for details.</div>
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
    </div>
  )
}

export default FormsMenu
