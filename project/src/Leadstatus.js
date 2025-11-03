import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function LeadStatus() {
  const [statuses, setStatuses] = useState([
    { id: 1, name: "Closed" },
    { id: 2, name: "Open" },
    { id: 3, name: "Pending" },
    { id: 4, name: "Special" },
  ]);

  const [selected, setSelected] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newStatus, setNewStatus] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Delete single
  const handleDelete = (id) => {
    setStatuses(statuses.filter((s) => s.id !== id));
    setSelected(selected.filter((sid) => sid !== id));
  };

  // Delete selected
  const handleDeleteSelected = () => {
    if (selected.length === 0) return;
    const remaining = statuses.filter((s) => !selected.includes(s.id));
    setStatuses(remaining);
    setSelected([]);
  };

  // Select all
  const handleSelectAll = () => {
    if (selected.length === filteredStatuses.length) {
      setSelected([]);
    } else {
      setSelected(filteredStatuses.map((s) => s.id));
    }
  };

  // Select individual
  const handleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((sid) => sid !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  // Edit
  const handleEdit = (id, name) => {
    setEditId(id);
    setEditName(name);
  };

  const handleUpdate = (id) => {
    setStatuses(
      statuses.map((s) => (s.id === id ? { ...s, name: editName } : s))
    );
    setEditId(null);
    setEditName("");
  };

  const handleCancel = () => {
    setEditId(null);
    setEditName("");
  };

  // Add new
  const handleAdd = () => {
    if (newStatus.trim() === "") return;
    const newId = statuses.length
      ? Math.max(...statuses.map((s) => s.id)) + 1
      : 1;
    setStatuses([...statuses, { id: newId, name: newStatus }]);
    setNewStatus("");
    setShowModal(false);
  };

  // Search filter
  const filteredStatuses = statuses.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      <div className="w-[90%] md:w-[95%] xl:w-[90%] mx-auto bg-white rounded-lg border border-gray-200 min-h-[600px] relative">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-4 border-b">
          <h2 className="text-2xl font-semibold text-gray-800">Lead Status</h2>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md text-lg md:text-lg"
          >
            Add Lead Status
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row justify-end items-center px-8 py-6 gap-3">
          <input
            type="text"
            placeholder="Lead Status"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border rounded-md px-4 py-2.5 w-full sm:w-60 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => setSearchQuery("")}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md text-sm md:text-base w-full sm:w-auto"
          >
            Search
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto px-6">
          <table className="w-full border-x border-b border-gray-200 text-lg text-gray-700">
            <thead className="bg-gray-200 border-b border-gray-200">
              <tr>
                <th className="w-[8%] py-3 text-left font-semibold px-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-blue-600"
                    checked={
                      selected.length === filteredStatuses.length &&
                      filteredStatuses.length > 0
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
                <th className="w-[8%] py-3 text-center font-semibold">EDIT</th>
                <th className="w-[10%] py-3 text-center font-semibold">
                  DELETE
                </th>
                <th className="w-[14.5%] py-3 text-center font-semibold">
                  VIEW LEAD
                </th>
              </tr>
            </thead>

            <tbody className="text-lg">
              {filteredStatuses.length > 0 ? (
                filteredStatuses.map((s, index) => (
                  <tr
                    key={s.id}
                    className={`hover:bg-gray-50 transition-colors duration-150 ${
                      editId === s.id ? "bg-gray-50" : ""
                    }`}
                  >
                    {/* Checkbox */}
                    <td className="border py-3 text-left px-4">
                      {index < 3 ? (
                        "--"
                      ) : (
                        <input
                          type="checkbox"
                          className="w-4 h-4 accent-blue-600"
                          checked={selected.includes(s.id)}
                          onChange={() => handleSelect(s.id)}
                        />
                      )}
                    </td>

                    {/* Serial Number */}
                    <td className="border py-3 text-left px-4">
                      {index + 1}
                    </td>

                    {/* Lead Status */}
                    <td className="border py-3 text-left px-4">
                      {editId === s.id ? (
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className="border border-gray-300 px-3 py-2 rounded-md w-[65%] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        s.name
                      )}
                    </td>

                    {/* Edit Column */}
                    <td className="border py-3 text-center">
                      {editId === s.id ? (
                        <div className="flex justify-center items-center gap-2">
                          <button
                            onClick={() => handleUpdate(s.id)}
                            className="text-blue-600 font-medium hover"
                          >
                            Update
                          </button>
                          <span className="text-gray-400">|</span>
                          <button
                            onClick={handleCancel}
                            className="text-gray-700 hover"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : s.name === "Special" ? (
                        <button
                          onClick={() => handleEdit(s.id, s.name)}
                          className="text-gray-600 hover:text-blue-600"
                        >
                          <Pencil size={18} />
                        </button>
                      ) : (
                        "--"
                      )}
                    </td>

                    {/* Delete Column */}
                    <td className="border py-3 text-center">
                      {s.name === "Special" ? (
                        <button
                          onClick={() => handleDelete(s.id)}
                          className="text-gray-600 hover:text-red-600"
                        >
                          <Trash2 size={18} />
                        </button>
                      ) : (
                        "--"
                      )}
                    </td>

                    {/* View Leads */}
                    <td className="border py-3 text-center">
                      <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded text-sm">
                        View Leads
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center text-gray-500 py-6 text-lg"
                  >
                    No results found.
                  </td>
                </tr>
              )}

              {/* Delete Button Row */}
              <tr>
                <td colSpan="6" className="border-t py-5 px-6 text-left">
                  <button
                    onClick={handleDeleteSelected}
                    className="bg-red-500 hover:bg-red-700 text-white px-12 py-2 rounded-md text-lg md:text-base"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-start items-start z-50">
            <style>
              {`
                @keyframes fadeSlideDown {
                  from { opacity: 0; transform: translateY(-25px); }
                  to { opacity: 1; transform: translateY(0); }
                }
              `}
            </style>

            <div
              className="bg-white rounded-lg shadow-lg w-[90%] sm:w-[38%] h-[30%] animate-[fadeSlideDown_0.4s_ease-out]"
              style={{
                marginTop: "5px",
                marginLeft: "650px",
              }}
            >
              <div className="border-b px-6 py-3 bg-white rounded-t-md">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">
                  Add Lead Status
                </h2>
              </div>

              <div className="px-10 py-9 bg-gray-200 flex flex-col items-start">
                <label className="block text-xl text-gray-800 font-medium mb-3">
                  Lead Status
                </label>
                <input
                  type="text"
                  placeholder="Enter Lead Status"
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  className="border border-gray-300 text-lg rounded-md px-3 py-2 w-[80%] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-end gap-3 px-6 py-5 bg-gray-100 border-t rounded-b-md">
                <button
                  onClick={handleAdd}
                  className="bg-blue-600 hover:bg-blue-700 text-lg text-white px-6 py-2 rounded-md transition duration-200"
                >
                  Save
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="border border-gray-400 text-lg text-gray-700 px-6 py-2 rounded-md hover:bg-gray-200 transition duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
