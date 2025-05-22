//employer-tab.jsx
import { useState } from "react"

const EmployerTab = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    postcode: "",
    telephone: "",
    email: "",
    contactForename: "",
    contactSurname: "",
    popPassword: "",
    userReference: "",
    payeSchemeStart: "",
    payeSchemeCease: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/employers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        const data = await response.json()
        alert("Employer saved successfully")
        console.log("Saved:", data)
      } else {
        alert("Failed to save employer")
      } 
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        {[
          { label: "Employer name", name: "name" },
          { label: "Address", name: "address", type: "textarea" },
          { label: "Postcode", name: "postcode" },
          { label: "Telephone", name: "telephone" },
          { label: "E-mail", name: "email" },
          { label: "Contact forename", name: "contactForename" },
          { label: "Contact surname", name: "contactSurname" },
          { label: "POP password", name: "popPassword", type: "password" },
          { label: "User reference", name: "userReference" },
          { label: "Date PAYE scheme started", name: "payeSchemeStart" },
          { label: "Date PAYE scheme ceased", name: "payeSchemeCease" },
        ].map(({ label, name, type }) => (
          <div key={name} className="mb-3">
            <label className="block text-xs mb-1">{label}</label>
            {type === "textarea" ? (
              <textarea
                name={name}
                value={form[name]}
                onChange={handleChange}
                className="w-full border rounded p-1 text-xs"
              />
            ) : (
              <input
                type={type || "text"}
                name={name}
                value={form[name]}
                onChange={handleChange}
                className="w-full border rounded p-1 text-xs"
              />
            )}
            
          </div>
        ))}
        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-600 text-white px-4 py-1 rounded text-xs"
        >
          Save Employer
        </button>
      </div>

      <div>
        {/* Your right-side checkboxes remain the same */}
        <div className="mb-3">
          <label className="block text-xs mb-1">Click here to set a logo</label>
          <div className="border w-full h-10 bg-gray-50"></div>
        </div>
        <div className="mb-3">
          <label className="block text-xs mb-1">RTI batch processing</label>
          <div className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-xs">
              Tick this box if you want to file RTI returns for this file in a batch
            </span>
          </div>
        </div>
        <div className="mb-3">
          <div className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-xs">
              For the first FPS returns report that the previous works numbers / payroll IDs are unknown
            </span>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-xs">Ensure all employees have a unique works number / payroll ID</span>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-xs">
              Warn if hourly rates are below the National Minimum Wage, or when an employee reaches an age threshold
            </span>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-xs">Show age on the hourly tab of the Pay Details screen</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployerTab
