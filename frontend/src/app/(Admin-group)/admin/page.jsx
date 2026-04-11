import React from "react"
import { FaDollarSign } from "react-icons/fa6";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { VscPassFilled } from "react-icons/vsc";

const reports = [
  {
    title: "Total Balance",
    value: "$54,321.65",
    icon: FaDollarSign,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Total Invoices",
    value: "520",
    icon: LiaFileInvoiceSolid,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Paid Invoices",
    value: "210",
    icon: VscPassFilled,
    color: "bg-purple-100 text-purple-600"
  }
]





export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Admin Dashboard
      </h1>

      {/* Reports Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reports.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <h2 className="text-2xl font-bold text-gray-800 mt-1">
                    {item.value}
                  </h2>
                </div>

                <div className={`p-3 rounded-xl ${item.color}`}>
                  <Icon size={26} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
