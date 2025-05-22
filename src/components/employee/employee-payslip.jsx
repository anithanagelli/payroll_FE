"use client"

import { useState } from "react"
import { X, Printer, Save, ChevronLeft, ChevronRight } from "lucide-react"

const EmployeePayslip = ({ employee, onClose }) => {
  const [currentPeriod, setCurrentPeriod] = useState("Apr-2025")

  // Sample payslip data
  const payslipData = {
    companyName: "The Payroll Company",
    employeeName: employee ? `${employee.surname}, ${employee.forename}` : "Employee New",
    payPeriod: "Apr-2025",
    payDate: "30-Apr-2025",
    payType: "Monthly",
    paymentMethod: "BACS",
    taxCode: "1257L",
    niNumber: "JZ 46 42 25 B",
    niTableLetter: "X",
    payments: {
      basicPay: "2,916.66",
      totalPayments: "2,916.66",
    },
    deductions: {
      incomeTax: "373.60",
      nationalInsurance: "0.00",
      totalDeductions: "373.60",
    },
    yearToDate: {
      taxableGrossPay: "2,916.66",
      incomeTax: "373.60",
      employeeNIC: "0.00",
      employerNIC: "0.00",
    },
    netPay: "2,543.06",
  }

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      <div className="flex justify-between items-center p-2 border-b bg-gray-100">
        <h3 className="text-sm font-medium">Employee Payslip</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={16} />
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex items-center p-1 border-b bg-gray-100">
        <div className="flex space-x-1">
          <button className="p-1 rounded hover:bg-gray-200">
            <Printer size={16} />
          </button>
          <button className="p-1 rounded hover:bg-gray-200">
            <Save size={16} />
          </button>
          <div className="flex items-center ml-4">
            <button className="p-1 rounded hover:bg-gray-200">
              <ChevronLeft size={16} />
            </button>
            <span className="mx-2 text-xs">Period: {currentPeriod}</span>
            <button className="p-1 rounded hover:bg-gray-200">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Payslip Content */}
      <div className="flex-1 p-4 bg-green-50 flex items-center justify-center overflow-auto">
        <div className="bg-white border border-green-500 rounded-md w-full max-w-3xl p-4">
          {/* Company Header */}
          <div className="border border-green-500 rounded-md p-2 mb-4 text-center">
            <h2 className="text-lg font-medium">{payslipData.companyName}</h2>
          </div>

          <div className="flex gap-4">
            {/* Employee Details */}
            <div className="border border-green-500 rounded-md p-2 w-1/2">
              <div className="font-medium mb-1">{payslipData.employeeName}</div>
              <div className="grid grid-cols-2 text-sm">
                <div>Pay Period</div>
                <div>{payslipData.payPeriod}</div>
                <div>Pay Date</div>
                <div>{payslipData.payDate}</div>
                <div>Pay Type</div>
                <div>{payslipData.payType}</div>
                <div>Payment Method</div>
                <div>{payslipData.paymentMethod}</div>
                <div>Tax Code</div>
                <div>{payslipData.taxCode}</div>
                <div>NI Number</div>
                <div>{payslipData.niNumber}</div>
                <div>NI Table Letter</div>
                <div>{payslipData.niTableLetter}</div>
              </div>
            </div>

            {/* Payments and Deductions */}
            <div className="w-1/2">
              <div className="border border-green-500 rounded-md p-2 mb-4">
                <div className="text-right font-medium mb-1">Payments</div>
                <div className="grid grid-cols-2 text-sm">
                  <div>Basic Pay</div>
                  <div className="text-right">{payslipData.payments.basicPay}</div>
                  <div className="font-medium">Total Payments</div>
                  <div className="text-right font-medium">{payslipData.payments.totalPayments}</div>
                </div>
              </div>

              <div className="border border-green-500 rounded-md p-2">
                <div className="text-right font-medium mb-1">Deductions</div>
                <div className="grid grid-cols-2 text-sm">
                  <div>Income Tax</div>
                  <div className="text-right">{payslipData.deductions.incomeTax}</div>
                  <div>National Insurance</div>
                  <div className="text-right">{payslipData.deductions.nationalInsurance}</div>
                  <div className="font-medium">Total Deductions</div>
                  <div className="text-right font-medium">{payslipData.deductions.totalDeductions}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            {/* Year to Date */}
            <div className="border border-green-500 rounded-md p-2 w-1/2">
              <div className="font-medium mb-1">Year to Date</div>
              <div className="grid grid-cols-2 text-sm">
                <div>Taxable Gross Pay</div>
                <div className="text-right">{payslipData.yearToDate.taxableGrossPay}</div>
                <div>Income Tax</div>
                <div className="text-right">{payslipData.yearToDate.incomeTax}</div>
                <div>Employee NIC</div>
                <div className="text-right">{payslipData.yearToDate.employeeNIC}</div>
                <div>Employer NIC</div>
                <div className="text-right">{payslipData.yearToDate.employerNIC}</div>
              </div>
            </div>

            {/* Net Pay */}
            <div className="w-1/2 flex flex-col">
              <div className="border border-green-500 rounded-md p-2 mt-auto">
                <div className="grid grid-cols-2 text-sm">
                  <div className="font-medium">Net Pay</div>
                  <div className="text-right font-medium">{payslipData.netPay}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeePayslip
