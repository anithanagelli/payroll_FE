//employee-list-dialog.jsx
import { useState } from 'react';
import { X } from "lucide-react"

const EmployeeListDialog = ({ employees, onSelect, onCancel }) => {
const [searchQuery, setSearchQuery] = useState('');

  const filteredEmployees = employees.filter(employee => 
    employee.surname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.forename.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-md shadow-lg w-[500px]">
        <div className="flex justify-between items-center p-2 border-b">
          <h3 className="text-sm font-medium">Select Employee</h3>
          <button onClick={onCancel} className="text-gray-500 hover:text-gray-700">
            <X size={16} />
          </button>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <input type="text" className="w-full border rounded p-1 text-sm" placeholder="Search employees..." value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}  />
          </div>
          <div className="max-h-60 overflow-y-auto border rounded">
            <table className="w-full text-xs">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">ID</th>
                  <th className="p-2 text-left">Surname</th>
                  <th className="p-2 text-left">Forename</th>
                  <th className="p-2 text-left">Department</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr
                    key={employee.id}
                    className="border-t hover:bg-gray-50 cursor-pointer"
                    onClick={() => onSelect(employee)}
                  >
                    <td className="p-2">{employee.id}</td>
                    <td className="p-2">{employee.surname}</td>
                    <td className="p-2">{employee.forename}</td>
                    <td className="p-2">{employee.department}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-end p-2 border-t">
          <button className="border rounded px-3 py-1 text-xs mr-2" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmployeeListDialog
