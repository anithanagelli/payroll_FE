"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUserPlus,
  faCreditCard,
  faCalendarAlt,
  faList,
  faUsers,
  faUserMinus,
} from "@fortawesome/free-solid-svg-icons"

const EmployeesMenu = ({ handleEmployeesMenuClick }) => {
  return (
    <div className="absolute top-full left-[120px] w-60 bg-white border shadow-md z-20 mt-1">
      <div
        className="flex items-center px-3 py-1.5 hover:bg-gray-100"
        onClick={() => handleEmployeesMenuClick("Employee Details")}
      >
        <FontAwesomeIcon icon={faUsers} className="mr-2 text-xs" />
        <span className="text-sm">Employee Details</span>
        <span className="text-xs text-gray-500 ml-auto">Ctrl+E</span>
      </div>
      <div
        className="flex items-center px-3 py-1.5 hover:bg-gray-100"
        onClick={() => handleEmployeesMenuClick("Add new Employee")}
      >
        <FontAwesomeIcon icon={faUserPlus} className="mr-2 text-xs" />
        <span className="text-sm">Add new Employee</span>
      </div>
      <div
        className="flex items-center px-3 py-1.5 hover:bg-gray-100"
        onClick={() => handleEmployeesMenuClick("Expenses & Benefits")}
      >
        <FontAwesomeIcon icon={faCreditCard} className="mr-2 text-xs" />
        <span className="text-sm">Expenses & Benefits</span>
      </div>
      <div
        className="flex items-center px-3 py-1.5 hover:bg-gray-100"
        onClick={() => handleEmployeesMenuClick("Calendar")}
      >
        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-xs" />
        <span className="text-sm">Calendar</span>
      </div>
      <div
        className="flex items-center px-3 py-1.5 hover:bg-gray-100"
        onClick={() => handleEmployeesMenuClick("Employee List")}
      >
        <FontAwesomeIcon icon={faList} className="mr-2 text-xs" />
        <span className="text-sm">Employee List</span>
      </div>
      <div
        className="flex items-center px-3 py-1.5 hover:bg-gray-100"
        onClick={() => handleEmployeesMenuClick("Employee Count")}
      >
        <FontAwesomeIcon icon={faUsers} className="mr-2 text-xs" />
        <span className="text-sm">Employee Count</span>
      </div>
      <div
        className="flex items-center px-3 py-1.5 hover:bg-gray-100"
        onClick={() => handleEmployeesMenuClick("Joiners and Leavers")}
      >
        <FontAwesomeIcon icon={faUserMinus} className="mr-2 text-xs" />
        <span className="text-sm">Joiners and Leavers</span>
      </div>
    </div>
  )
}

export default EmployeesMenu
