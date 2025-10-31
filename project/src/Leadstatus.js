/*import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function LeadStatus() {
  const [statuses, setStatuses] = useState([
    { id: 1, name: "Closed" },
    { id: 2, name: "Open" },
    { id: 3, name: "Pending" },
    { id: 4, name: "Special" },
  ]);

  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");

  const filtered = statuses.filter((status) =>
    status.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    setStatuses(statuses.filter((status) => status.id !== id));
    setSelected(selected.filter((sid) => sid !== id));
  };

  const handleSelectAll = () => {
    if (selected.length === filtered.length) {
      setSelected([]);
    } else {
      setSelected(filtered.map((status) => status.id));
    }
  };

  const handleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((sid) => sid !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    // 🌟 Background container added here
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      { White Card }
      <div className="w-[90%] md:w-[95%] xl:w-[90%] bg-white rounded-lg border border-gray-200 shadow-md min-h-[600px]">

        { Header }
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-2xl font text-gray-800">
            Lead <span className="font-semibold">Status</span>
          </h2>
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md text-lg md:text-lg">
            Add Lead Status
          </button>
        </div>

        { Search Bar }
        <div className="flex flex-col sm:flex-row justify-end items-center px-8 py-6 gap-3">
          <input
            type="text"
            placeholder="Lead Status"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
                <th className="w-[7%] py-3 text-left px-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-blue-600"
                    checked={
                      selected.length === filtered.length && filtered.length > 0
                    }
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="w-[8%] py-3 text-left font-semibold px-4">
                  SR. NO.
                </th>
                <th className="w-[20%] py-3 text-left font-semibold px-4">
                  LEAD STATUS
                </th>
                <th className="w-[8%] py-3 text-center font-semibold">
                  EDIT
                </th>
                <th className="w-[10%] py-3 text-center font-semibold">
                  DELETE
                </th>
                <th className="w-[6%] py-3 text-center font-semibold">
                  VIEW LEADS
                </th>
              </tr>
            </thead>

            <tbody className="text-lg">
              {filtered.map((status, index) => (
                <tr
                  key={status.id}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="border py-3 text-left px-4">
                    {status.name === "Special" ? (
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-blue-600"
                        checked={selected.includes(status.id)}
                        onChange={() => handleSelect(status.id)}
                      />
                    ) : (
                      <span className="text-gray-400">--</span>
                    )}
                  </td>
                  <td className="border py-3 text-left px-6 w-24">{index + 1}</td>
                  <td className="border py-3 px-4 text-left">{status.name}</td>
                  <td className="border py-3 text-center">
                    {status.name === "Special" ? (
                      <button className="text-gray-600 hover:text-blue-600">
                        <Pencil size={18} />
                      </button>
                    ) : (
                      <span className="text-gray-400">--</span>
                    )}
                  </td>
                  <td className="border py-3 text-center">
                    {status.name === "Special" ? (
                      <button
                        onClick={() => handleDelete(status.id)}
                        className="text-gray-600 hover:text-red-600"
                      >
                        <Trash2 size={18} />
                      </button>
                    ) : (
                      <span className="text-gray-400">--</span>
                    )}
                  </td>
                  <td className="border py-3 text-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm">
                      View Leads
                    </button>
                  </td>
                </tr>
              ))}

              { Delete Button Row }
              <tr>
                <td colSpan="6" className="border-t py-5 px-6 text-left">
                  <button className="bg-red-500 hover:bg-red-700 text-white px-12 py-2 rounded-md text-sm md:text-base">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}*/
