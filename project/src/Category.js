import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function CategoryTable() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics" },
    { id: 2, name: "Food" },
    { id: 3, name: "g" },
    { id: 4, name: "Laptops" },
    { id: 5, name: "Mobile Phones" },
    { id: 6, name: "Sarees" },
  ]);

  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");

  const filtered = categories.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
    setSelected(selected.filter((sid) => sid !== id));
  };

  const handleSelectAll = () => {
    if (selected.length === filtered.length) {
      setSelected([]);
    } else {
      setSelected(filtered.map((cat) => cat.id));
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
    // ✅ Background Container
    <div className="min-h-screen bg-gray-100 flex items-start justify-center py-10">
      <div className="w-[90%] md:w-[95%] xl:w-[90%] bg-white rounded-lg border border-gray-200 shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50 rounded-t-lg">
          <h2 className="text-2xl font text-gray-800">
            <span className="font-semibold">Categories</span>
          </h2>
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-2 rounded-md text-lg md:text-lg">
            Add Category
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row justify-end items-center px-8 py-6 gap-3 bg-gray-50">
          <input
            type="text"
            placeholder="Category Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-md px-4 py-2.5 w-full sm:w-60 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-md text-lg md:text-base w-full sm:w-auto">
            Search
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto px-6 pb-6">
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
                  CATEGORY NAME
                </th>
                <th className="w-[8%] py-3 text-center font-semibold">EDIT</th>
                <th className="w-[10%] py-3 text-center font-semibold">
                  DELETE
                </th>
                <th className="w-[12%] py-3 text-center font-semibold">
                  VIEW LEADS
                </th>
              </tr>
            </thead>

            <tbody className="text-lg">
              {filtered.map((cat, index) => (
                <tr
                  key={cat.id}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="border py-3 text-left px-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-blue-600"
                      checked={selected.includes(cat.id)}
                      onChange={() => handleSelect(cat.id)}
                    />
                  </td>
                  <td className="border py-3 text-left px-6 w-24">
                    {index + 1}
                  </td>
                  <td className="border py-3 px-4 text-left">{cat.name}</td>
                  <td className="border py-3 text-center">
                    <button className="text-gray-600 hover:text-blue-600">
                      <Pencil size={18} />
                    </button>
                  </td>
                  <td className="border py-3 text-center">
                    <button
                      onClick={() => handleDelete(cat.id)}
                      className="text-gray-600 hover:text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                  <td className="border py-3 text-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded text-sm">
                      View Leads
                    </button>
                  </td>
                </tr>
              ))}

              {/* Delete Button Row */}
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
}
