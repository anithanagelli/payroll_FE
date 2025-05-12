"use client"

import { ChevronRight, FolderOpen, Save, Settings, Clock, Printer, LogOut } from "lucide-react"

const FileMenu = ({ activeSubmenu, handleSubmenuClick, setShowNewDataDialog, setActiveMenu, setActiveSubmenu }) => {
  return (
    <div className="absolute top-full left-0 w-60 bg-white border shadow-md z-20 mt-1">
      <div
        className={`flex items-center justify-between px-3 py-1.5 ${activeSubmenu === "new" ? "bg-blue-100" : "hover:bg-gray-100"}`}
        onClick={() => handleSubmenuClick("new")}
      >
        <div className="flex items-center">
          <span className="text-sm">New</span>
        </div>
        <ChevronRight size={14} />
      </div>
      <div className="flex items-center justify-between px-3 py-1.5 hover:bg-gray-100">
        <div className="flex items-center">
          <FolderOpen size={14} className="mr-2" />
          <span className="text-sm">Open</span>
        </div>
        <span className="text-xs text-gray-500">Ctrl+O</span>
      </div>
      <div className="flex items-center justify-between px-3 py-1.5 hover:bg-gray-100 border-b">
        <div className="flex items-center">
          <Save size={14} className="mr-2" />
          <span className="text-sm">Save</span>
        </div>
        <span className="text-xs text-gray-500">Ctrl+S</span>
      </div>

      <div className="flex items-center justify-between px-3 py-1.5 hover:bg-gray-100">
        <div className="flex items-center">
          <Settings size={14} className="mr-2" />
          <span className="text-sm">Utilities</span>
        </div>
        <ChevronRight size={14} />
      </div>
      <div className="flex items-center justify-between px-3 py-1.5 hover:bg-gray-100">
        <div className="flex items-center">
          <Clock size={14} className="mr-2" />
          <span className="text-sm">Recent Files</span>
        </div>
        <ChevronRight size={14} />
      </div>
      <div className="flex items-center justify-between px-3 py-1.5 hover:bg-gray-100 border-t">
        <div className="flex items-center">
          <Printer size={14} className="mr-2" />
          <span className="text-sm">Print</span>
        </div>
        <span className="text-xs text-gray-500">Ctrl+P</span>
      </div>
      <div className="flex items-center justify-between px-3 py-1.5 hover:bg-gray-100">
        <div className="flex items-center">
          <Printer size={14} className="mr-2" />
          <span className="text-sm">Print All Reports</span>
        </div>
        <ChevronRight size={14} />
      </div>
      <div className="flex items-center justify-between px-3 py-1.5 hover:bg-gray-100 border-t">
        <div className="flex items-center">
          <LogOut size={14} className="mr-2" />
          <span className="text-sm">Exit</span>
        </div>
      </div>

      {/* New Submenu */}
      {activeSubmenu === "new" && (
        <div className="absolute top-6 left-60 w-64 bg-white border shadow-md z-30 mt-1">
          <div
            className="flex items-center px-3 py-1.5 hover:bg-gray-100"
            onClick={() => {
              setShowNewDataDialog(true)
              setActiveMenu(null)
              setActiveSubmenu(null)
            }}
          >
            <span className="text-sm">Create a new blank file</span>
          </div>
          <div className="flex items-center px-3 py-1.5 hover:bg-gray-100">
            <span className="text-sm">Create a file for next year</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default FileMenu
