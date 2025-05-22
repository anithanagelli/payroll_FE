//dashboard.jsx
import { useState } from "react"
import fileImg from "/assets/folder_4673908.png"
import payImg from "/assets/checklist_7163024.png"
import formImg from "/assets/online-payment_9742048.png"
import d4 from "/assets/content-analysis-illustr-400x400.png"
import d5 from "/assets/download.jpg"
import d13 from "/assets/images (3).jpg"
import d15 from "/assets/images (5).jpg"
import d16 from "/assets/images.jpg"
import d1 from "/assets/images.png"
import logo from "/assets/payroll6.jpg"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserTie, faFileLines, faWrench } from "@fortawesome/free-solid-svg-icons"
import NewDataDialog from "../file/new-data-dialog.jsx"
import PayrollManagerDialog from "../file/payroll-manager-dialog.jsx"
import EmployerDetailsContainer from "../employer/employer-details-container.jsx"
import FileMenu from "../file/file-menu.jsx"
import EmployerMenu from "../employer/employer-menu.jsx"
import EmployeesMenu from "../employee/employees-menu.jsx"
import AddEmployeeDialog from "../employee/add-employee-dialog.jsx"
import NoEmployeesDialog from "../employee/no-employees-dialog.jsx"
import EmployeeDetailsContainer from "../employee/employee-details-container.jsx"
import EmployeeListDialog from "../employee/employee-list-dialog.jsx"

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState(null)
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  const [showNewDataDialog, setShowNewDataDialog] = useState(false)
  const [showPayrollManagerDialog, setShowPayrollManagerDialog] = useState(false)
  const [employerName, setEmployerName] = useState("")
  const [taxYear, setTaxYear] = useState("2025-26")
  const [headerText, setHeaderText] = useState("PayrollPro- Middleware Talents Ltd - 2025-26")

  // Employer Details States
  const [showEmployerMenu, setShowEmployerMenu] = useState(false)
  const [showEmployerDetailsInContainer, setShowEmployerDetailsInContainer] = useState(false)
  const [activeEmployerTab, setActiveEmployerTab] = useState("Employer")

  // Employees States
  const [showEmployeesMenu, setShowEmployeesMenu] = useState(false)
  const [showNoEmployeesDialog, setShowNoEmployeesDialog] = useState(false)
  const [showAddEmployeeDialog, setShowAddEmployeeDialog] = useState(false)
  const [showEmployeeListDialog, setShowEmployeeListDialog] = useState(false)
  const [employees, setEmployees] = useState([])
  const [selectedEmployee, setSelectedEmployee] = useState(null)
  const [showEmployeeDetailsInContainer, setShowEmployeeDetailsInContainer] = useState(false)

  const handleMenuClick = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null)
      setActiveSubmenu(null)
    } else {
      setActiveMenu(menu)
      setActiveSubmenu(null)
    }

    // Close other menus
    if (menu !== "employees") setShowEmployeesMenu(false)
    if (menu !== "employer") setShowEmployerMenu(false)
  }

  const handleSubmenuClick = (submenu) => {
    if (activeSubmenu === submenu) {
      setActiveSubmenu(null)
    } else {
      setActiveSubmenu(submenu)
    }
  }

  const handleClickOutside = () => {
    if (activeMenu) {
      setActiveMenu(null)
      setActiveSubmenu(null)
    }
    setShowEmployerMenu(false)
    setShowEmployeesMenu(false)
  }

  const handleEmployerMenuClick = (option) => {
    if (option === "Employer Details") {
      setShowEmployerDetailsInContainer(true)
      setShowEmployeeDetailsInContainer(false)
      setActiveEmployerTab("Employer")
    }
    setShowEmployerMenu(false)
  }

  const handleEmployeesMenuClick = (option) => {
    if (option === "Add new Employee") {
      if (employees.length === 0) {
        setShowNoEmployeesDialog(true)
      } else {
        setShowAddEmployeeDialog(true)
      }
    } else if (option === "Employee Details") {
      if (employees.length === 0) {
        setShowNoEmployeesDialog(true)
      } else if (employees.length === 1) {
        // If there's only one employee, select it directly
        setSelectedEmployee(employees[0])
        setShowEmployeeDetailsInContainer(true)
        setShowEmployerDetailsInContainer(false)
      } else {
        // If there are multiple employees, show the list to select one
        setShowEmployeeListDialog(true)
      }
    }
    setShowEmployeesMenu(false)
  }

  const handleAddNewEmployee = (employee) => {
    // Generate a unique ID for the employee
    const newEmployee = {
      ...employee,
      id: Date.now().toString(),
    }

    const updatedEmployees = [...employees, newEmployee]
    setEmployees(updatedEmployees)
    setShowAddEmployeeDialog(false)

    // Automatically select the newly added employee and show details
    setSelectedEmployee(newEmployee)
    setShowEmployeeDetailsInContainer(true)
    setShowEmployerDetailsInContainer(false)
  }

  const handleSelectEmployee = (employee) => {
    setSelectedEmployee(employee)
    setShowEmployeeListDialog(false)
    setShowEmployeeDetailsInContainer(true)
    setShowEmployerDetailsInContainer(false)
  }

  const handleRTIClick = () => {
    setShowEmployerDetailsInContainer(true)
    setShowEmployeeDetailsInContainer(false)
    setActiveEmployerTab("Employer")
  }

  const handleNoEmployeesResponse = (response) => {
    setShowNoEmployeesDialog(false)
    if (response === "yes") {
      setShowAddEmployeeDialog(true)
    }
  }

  return (
          <div className="bg-white shadow-sm rounded-sm flex flex-1 flex-col min-h-screen">
            <div className="flex items-center justify-between px-2 py-1 bg-gray-800">
              <div className="flex items-center">
                <button  onClick={handleClickOutside}>
                  <img src={logo || "/placeholder.svg"} style={{ width: "100px", height: "50px" }} />
                </button>

                <span className="text-sm font-medium text-white">{headerText}</span>
              </div>
            </div>

            <div className="flex items-center px-2 py-1 border-b text-xs relative" style={{ margin: "5px" }}>
              <button
                className={`px-2 py-0.5 ${activeMenu === "file" ? "bg-blue-100" : "hover:bg-gray-200"} rounded-none bg-transparent border-none`}
                onClick={() => handleMenuClick("file")}
              >
                File
              </button>
              <button className="px-2 py-0.5 rounded-none bg-transparent border-none">Pay</button>
              <button className="px-2 py-0.5 rounded-none bg-transparent border-none">Forms</button>
              <button className="px-2 py-0.5 rounded-none bg-transparent border-none">Analysis</button>
              <button
                className={`px-2 py-0.5 ${showEmployeesMenu ? "bg-blue-100" : "hover:bg-gray-200"} rounded-none bg-transparent border-none`}
                onClick={() => {
                  setShowEmployeesMenu(!showEmployeesMenu)
                  setShowEmployerMenu(false)
                }}
              >
                Employees
              </button>
              <button
                className={`px-2 py-0.5 ${showEmployerMenu ? "bg-blue-100" : "hover:bg-gray-200"} rounded-none bg-transparent border-none`}
                onClick={() => {
                  setShowEmployerMenu(!showEmployerMenu)
                  setShowEmployeesMenu(false)
                }}
              >
                Employer
              </button>
              <button className="px-2 py-0.5 rounded-none bg-transparent border-none">Pensions</button>
              <button className="px-2 py-0.5 rounded-none bg-transparent border-none">Agent</button>
              <button className="px-2 py-0.5 rounded-none bg-transparent border-none">CIS</button>
              <button className="px-2 py-0.5 rounded-none bg-transparent border-none">Tools</button>
              <button className="px-2 py-0.5 rounded-none bg-transparent border-none">Help</button>

              {/* File Menu Dropdown */}
              {activeMenu === "file" && (
                <FileMenu
                  activeSubmenu={activeSubmenu}
                  handleSubmenuClick={handleSubmenuClick}
                  setShowNewDataDialog={setShowNewDataDialog}
                  setActiveMenu={setActiveMenu}
                  setActiveSubmenu={setActiveSubmenu}
                />
              )}

              {/* Employer Menu Dropdown */}
              {showEmployerMenu && <EmployerMenu handleEmployerMenuClick={handleEmployerMenuClick} />}

              {/* Employees Menu Dropdown */}
              {showEmployeesMenu && <EmployeesMenu handleEmployeesMenuClick={handleEmployeesMenuClick} />}
            </div>

            <div className="flex items-center px-2 py-1 border-b">
              <div className="flex space-x-1">
                <button
                  className="px-2 py-0.5 rounded-none bg-transparent border-none"
                  onClick={() => handleMenuClick("file")}
                >
                  <img src={fileImg || "/placeholder.svg"} style={{ width: "15px", height: "15px" }} />
                </button>
                <button className="px-2 py-0.5 rounded-none bg-transparent border-none">
                  <img src={formImg || "/placeholder.svg"} style={{ width: "15px", height: "15px" }} />
                </button>
                <button className="px-2 py-0.5 rounded-none bg-transparent border-none">
                  <img src={payImg || "/placeholder.svg"} style={{ width: "15px", height: "15px" }} />
                </button>
                <button className="px-2 py-0.5 rounded-none bg-transparent border-none">
                  <img src={d4 || "/placeholder.svg"} style={{ width: "15px", height: "15px" }} />
                </button>
                <button className="px-2 py-0.5 rounded-none bg-transparent border-none"
                onClick={() => {
                  setShowEmployeesMenu(!showEmployeesMenu)
                  setShowEmployerMenu(false)
                }}
                >
                  <img src={d5 || "/placeholder.svg"} style={{ width: "15px", height: "15px" }} />
                </button>
                <button className="px-2 py-0.5 rounded-none bg-transparent border-none"
                onClick={() => {
                  setShowEmployerMenu(!showEmployerMenu)
                  setShowEmployeesMenu(false)
                }}>
                  {" "}
                  <FontAwesomeIcon icon={faUserTie} />
                </button>
                <button className="px-2 py-0.5 rounded-none bg-transparent border-none">
                  <img src={d13 || "/placeholder.svg"} style={{ width: "15px", height: "15px" }} />
                </button>
                <button className="px-2 py-0.5 rounded-none bg-transparent border-none">
                  <img src={d16 || "/placeholder.svg"} style={{ width: "15px", height: "15px" }} />
                </button>
                <button className="px-2 py-0.5 rounded-none bg-transparent border-none">
                  {" "}
                  <FontAwesomeIcon icon={faFileLines} />{" "}
                </button>
                <button className="px-2 py-0.5 rounded-none bg-transparent border-none">
                  {" "}
                  <FontAwesomeIcon icon={faWrench} />{" "}
                </button>
                <button className="px-2 py-0.5 rounded-none bg-transparent border-none">
                  <img src={d15 || "/placeholder.svg"} style={{ width: "15px", height: "15px" }} />
                </button>
              </div>
            </div>

            <div className="p-2">
              <div className="flex items-center justify-between border-b bg-gray-300 pb-1 mb-2">
                <button className="p-1 rounded hover:bg-gray-100">
                  <ChevronLeft size={14} />
                </button>
                <div className="text-xs text-center">Current pay period: May 2025 (paid 31-May-2025)</div>
                <button className="p-1 rounded hover:bg-gray-100">
                  <ChevronRight size={14} />
                </button>
              </div>
              <div className="h-60" onClick={handleClickOutside}>
                <div className="cursor-pointer flex gap-2 pr-4 mr-5 justify-center text-red-600 text-sm"
                //  onClick={handleRTIClick}
                 >
                  <img src={d1 || "/placeholder.svg"} style={{ width: "30px", height: "15px" }} />
                  There are RTI returns due - click here for details.
                </div>
                {/* Employer Details Container */}
              {showEmployerDetailsInContainer && (
                <div className="mt-4">
                  <EmployerDetailsContainer
                    activeEmployerTab={activeEmployerTab}
                    setActiveEmployerTab={setActiveEmployerTab}
                    setShowEmployerDetailsInContainer={setShowEmployerDetailsInContainer}
                  />
                </div>
              )}

              {/* Employee Details Container */}
              {showEmployeeDetailsInContainer && selectedEmployee && (
                <div className="mt-4">
                  <EmployeeDetailsContainer
                    employee={selectedEmployee}
                    setShowEmployeeDetailsInContainer={setShowEmployeeDetailsInContainer}
                  />
                </div>
              )}

            
            {/* New Data File Dialog */}
      {showNewDataDialog && (
        <NewDataDialog
          setShowNewDataDialog={setShowNewDataDialog}
          setShowPayrollManagerDialog={setShowPayrollManagerDialog}
          employerName={employerName}
          setEmployerName={setEmployerName}
          taxYear={taxYear}
          setTaxYear={setTaxYear}
        />
      )}


 {/* Payroll Manager Dialog */}
      {showPayrollManagerDialog && (
        <PayrollManagerDialog
          setShowPayrollManagerDialog={setShowPayrollManagerDialog}
          employerName={employerName}
          taxYear={taxYear}
          setHeaderText={setHeaderText}
        />
      )}


      {/* No Employees Dialog */}
      {showNoEmployeesDialog && <NoEmployeesDialog onResponse={handleNoEmployeesResponse} />}

      {/* Add Employee Dialog */}
      {showAddEmployeeDialog && (
        <AddEmployeeDialog onCancel={() => setShowAddEmployeeDialog(false)} onSave={handleAddNewEmployee} />
      )}

      {/* Employee List Dialog */}
      {showEmployeeListDialog && (
        <EmployeeListDialog
          employees={employees}
          onSelect={handleSelectEmployee}
          onCancel={() => setShowEmployeeListDialog(false)}
        />
      )}
              </div>
            </div>
          </div>
  )
}

export default Dashboard
