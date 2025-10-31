/*import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function LeadSourceTable() {
  const [leadSources, setLeadSources] = useState([
    { id: 1, name: "Facebook" },
    { id: 2, name: "Google" },
    { id: 3, name: "Instagram" },
    { id: 4, name: "Internet" },
  ]);

  const [selected, setSelected] = useState([]);

  const handleDelete = (id) => {
    setLeadSources(leadSources.filter((source) => source.id !== id));
  };

  const handleSelectAll = () => {
    if (selected.length === leadSources.length) {
      setSelected([]);
    } else {
      setSelected(leadSources.map((source) => source.id));
    }
  };

  const handleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((selectedId) => selectedId !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <div className="w-[90%] md:w-[95%] xl:w-[90%] mx-auto bg-white rounded-lg mt-10 border border-gray-200 min-h-[600px]">
      { Header }
      <div className="flex items-center justify-between px-8 py-4 border-b">
        <h2 className="text-2xl font-semibold text-gray-800">Lead Source</h2>
        <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md text-lg md:text-lg">
          Add Lead Source
        </button>
      </div>

      { Search Bar }
      <div className="flex flex-col sm:flex-row justify-end items-center px-8 py-6 gap-3">
        <input
          type="text"
          placeholder="Lead Source"
          className="border rounded-md px-4 py-2.5 w-full sm:w-60 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md text-sm md:text-base w-full sm:w-auto">
          Search
        </button>
      </div>

      { Table }
      <div className="overflow-x-auto px-6">
        <table className="w-full border-x border-b border-gray-200 text-lg text-gray-700">
          
          <thead className="bg-gray-200 border-b border-gray-200">
            <tr>
              <th className="w-[8%] py-3 text-left px-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-blue-600"
                  checked={
                    selected.length === leadSources.length &&
                    leadSources.length > 0
                  }
                  onChange={handleSelectAll}
                />
              </th>
              <th className="w-[8%] py-3 text-left font-semibold px-4">
                SR. NO.
              </th>
              <th className="w-[20%] py-3 text-left font-semibold px-4">
                LEAD SOURCE
              </th>
              <th className="w-[8%] py-3 text-center font-semibold">
                EDIT
              </th>
              <th className="w-[10%] py-3 text-center font-semibold">
                DELETE
              </th>
              <th className="w-[14.5%] py-3 text-center font-semibold">
                VIEW LEADS
              </th>
            </tr>
          </thead>

          { Table Body }
          <tbody className="text-lg">
            {leadSources.map((source, index) => (
              <tr
                key={source.id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="border py-3 text-left px-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-blue-600"
                    checked={selected.includes(source.id)}
                    onChange={() => handleSelect(source.id)}
                  />
                </td>
                <td className="border py-3 text-left px-6 w-24">{index + 1}</td>
                <td className="border py-3 px-4">{source.name}</td>
                <td className="border py-3 text-center">
                  <button className="text-gray-600 hover:text-blue-600">
                    <Pencil size={18} />
                  </button>
                </td>
                <td className="border py-3 text-center">
                  <button
                    onClick={() => handleDelete(source.id)}
                    className="text-gray-600 hover:text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
                <td className="border py-3 text-center">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded text-sm">
                    View Leads
                  </button>
                </td>
              </tr>
            ))}

            { Delete Button Row }
            <tr>
              <td colSpan="6" className="border-t py-5 px-6 text-left">
                <button className="bg-red-500 hover:bg-red-700 text-white px-12 py-2 rounded-md text-lg md:text-base">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}*/
