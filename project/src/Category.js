import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function CategoryTable() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics" },
    { id: 2, name: "Food" },
    { id: 3, name: "Grocery" },
    { id: 4, name: "Laptops" },
    { id: 5, name: "Mobile Phones" },
    { id: 6, name: "Sarees" },
  ]);

  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);

  // ✅ Delete a category
  const handleDelete = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  // ✅ Edit category
  const handleEdit = (id, name) => {
    setEditId(id);
    setEditName(name);
  };

  const handleUpdate = (id) => {
    setCategories(
      categories.map((cat) => (cat.id === id ? { ...cat, name: editName } : cat))
    );
    setEditId(null);
    setEditName("");
  };

  const handleCancel = () => {
    setEditId(null);
    setEditName("");
  };

  // ✅ Add new category
  const handleAdd = () => {
    if (!newCategory.trim()) return;
    const newId = categories.length ? Math.max(...categories.map((c) => c.id)) + 1 : 1;
    setCategories([...categories, { id: newId, name: newCategory }]);
    setNewCategory("");
    setShowModal(false);
  };

  // ✅ Search filter
  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ✅ Select all
  const handleSelectAll = () => {
    if (selectedIds.length === filteredCategories.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredCategories.map((cat) => cat.id));
    }
  };

  // ✅ Select individual
  const handleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((sid) => sid !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // ✅ Delete selected
  const handleDeleteSelected = () => {
    setCategories(categories.filter((cat) => !selectedIds.includes(cat.id)));
    setSelectedIds([]);
  };

  return (
    <div className="w-[95%] md:w-[85%] max-w-[1600px] mx-auto bg-white rounded-md mt-10 border border-gray-200 shadow">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-3 border-b bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-700">Categories</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded text-sm"
        >
          Add Category
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex justify-end items-center px-6 py-3 bg-white gap-3">
        <input
          type="text"
          placeholder="Search Category"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-2 w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => setSearchQuery("")}
          className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-md text-sm font-medium"
        >
          Search
        </button>
      </div>

      {/* TABLE VIEW */}
      <div className="hidden md:block px-6 py-6 overflow-x-auto">
        <table className="w-full border border-gray-100 text-sm">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="px-3 py-2 text-left w-[10%]">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={
                    selectedIds.length === filteredCategories.length &&
                    filteredCategories.length > 0
                  }
                  onChange={handleSelectAll}
                />
              </th>
              <th className="px-3 py-2 text-left font-semibold tracking-wide">
                SR. NO.
              </th>
              <th className="px-3 py-2 text-left font-semibold tracking-wide">
                CATEGORY NAME
              </th>
              <th className="px-3 py-2 text-center font-semibold tracking-wide">
                EDIT
              </th>
              <th className="px-3 py-2 text-center font-semibold tracking-wide">
                DELETE
              </th>
              <th className="px-3 py-2 text-center font-semibold tracking-wide">
                VIEW LEADS
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredCategories.length > 0 ? (
              filteredCategories.map((cat, index) => (
                <tr key={cat.id} className="hover:bg-gray-50">
                  <td className="px-3 py-2 border text-left">
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                      checked={selectedIds.includes(cat.id)}
                      onChange={() => handleSelect(cat.id)}
                    />
                  </td>
                  <td className="px-3 py-2 border text-gray-700 text-left">
                    {index + 1}
                  </td>
                  <td className="px-2 py-2 border text-gray-700 text-left">
                    {editId === cat.id ? (
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="border px-2 py-1 rounded w-[70%]"
                      />
                    ) : (
                      cat.name
                    )}
                  </td>
                  <td className="px-3 py-2 border text-center">
                    {editId === cat.id ? (
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleUpdate(cat.id)}
                          className="text-blue-600 font-medium"
                        >
                          Update
                        </button>
                        <span>|</span>
                        <button
                          onClick={handleCancel}
                          className="text-gray-600 font-medium"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleEdit(cat.id, cat.name)}
                        className="text-gray-600 hover:text-blue-600"
                      >
                        <Pencil size={16} />
                      </button>
                    )}
                  </td>
                  <td className="px-3 py-2 border text-center">
                    <button
                      onClick={() => handleDelete(cat.id)}
                      className="text-gray-600 hover:text-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                  <td className="px-3 py-2 border text-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                      View Leads
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-4 text-gray-500 border"
                >
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Bottom Delete Button */}
        <div className="flex justify-start mt-4">
          <button
            onClick={handleDeleteSelected}
            disabled={selectedIds.length === 0}
            className={`px-6 py-2 rounded ${
              selectedIds.length === 0
                ? "bg-red-600 text-gray-200"
                : "bg-red-600 hover:bg-red-700 text-white"
            }`}
          >
            Delete
          </button>
        </div>
      </div>

      {/* MOBILE CARD VIEW */}
      <div className="block md:hidden px-4 py-6">
         {/* Header above list */}
  <div className="bg-gray-100 border border-gray-300 rounded-md mb-5 p-3 text-left">
    <p className="font-semibold text-gray-700 text-sm mb-1">SELECT ALL</p>
    <input type="checkbox" className="w-4 h-4 mb-2" />
    <p className="font-semibold text-gray-700 text-sm mt-2">VIEW LEAD</p>
  </div>
  
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat, index) => (
            <div
              key={cat.id}
              className="border border-gray-300 rounded-md bg-white mb-5 overflow-hidden"
            >
              {/* SR NO */}
              <div className="px-4 py-2 border-b border-gray-200">
                <p className="text-gray-800 text-sm font-semibold text-left">
                  SR NO :{" "}
                  <span className="font-normal text-gray-700">
                    {index + 1}
                  </span>
                </p>
              </div>

              {/* CATEGORY NAME */}
              <div className="px-4 py-2 border-b border-gray-200">
                <p className="text-gray-800 text-sm font-semibold text-left">
                  Category Name :{" "}
                  {editId === cat.id ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="border border-gray-300 rounded px-2 py-1 text-gray-700 w-28 text-sm ml-1"
                    />
                  ) : (
                    <span className="font-normal text-gray-700">{cat.name}</span>
                  )}
                </p>
              </div>

              {/* EDIT */}
              <div className="px-4 py-2 border-b border-gray-200">
                <p className="text-gray-800 text-sm font-semibold flex items-center gap-2">
                  Edit :
                  {editId === cat.id ? (
                    <span className="ml-2 flex gap-3">
                      <button
                        onClick={() => handleUpdate(cat.id)}
                        className="text-blue-600 font-medium text-sm"
                      >
                        Update
                      </button>
                      <span>|</span>
                      <button
                        onClick={handleCancel}
                        className="text-gray-600 font-medium text-sm"
                      >
                        Cancel
                      </button>
                    </span>
                  ) : (
                    <button
                      onClick={() => handleEdit(cat.id, cat.name)}
                      className="text-gray-600 hover:text-blue-600 ml-2"
                    >
                      <Pencil size={16} />
                    </button>
                  )}
                </p>
              </div>

              {/* DELETE */}
              <div className="px-4 py-2 border-b border-gray-200">
                <p className="text-gray-800 text-sm font-semibold flex items-center gap-2">
                  Delete :
                  <button
                    onClick={() => handleDelete(cat.id)}
                    className="text-gray-600 hover:text-red-600 ml-2"
                  >
                    <Trash2 size={16} />
                  </button>
                </p>
              </div>

              {/* VIEW LEADS BUTTON */}
              <div className="flex justify-start px-4 py-3 bg-white">
                <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-1.5 rounded text-sm">
                  View Leads
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No results found.</p>
        )}

        {/* Bottom Delete Button */}
        <div className="flex justify-start mt-4">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded">
            Delete
          </button>
        </div>
      </div>

      {/* Add Category Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] sm:w-[500px] mt-4 animate-[slideDown_0.4s_ease-out]">
            <style>
              {`
                @keyframes slideDown {
                  from { opacity: 0; transform: translateY(-25px); }
                  to { opacity: 1; transform: translateY(0); }
                }
              `}
            </style>

            <div className="border-b px-5 py-3">
              <h3 className="text-center text-gray-800 font-semibold text-base">
                Add Category
              </h3>
            </div>

            <div className="p-5 bg-[#f0f2f5] text-left">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category Name
              </label>
              <input
                type="text"
                placeholder="Category Name"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full max-w-[250px] focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
            </div>

            <div className="flex justify-end gap-3 px-5 pb-4 mt-3">
              <button
                onClick={handleAdd}
                className="bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium px-5 py-2 rounded-md"
              >
                Save
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="border border-gray-300 hover:bg-gray-100 text-gray-700 text-sm font-medium px-5 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
