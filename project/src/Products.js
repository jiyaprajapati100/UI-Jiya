/*import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function ProductTable() {
  const [products, setProducts] = useState([
    { id: 1, name: "Bandhani" },
    { id: 2, name: "Galaxy S1" },
    { id: 3, name: "Galaxy S2" },
    { id: 4, name: "Lenovo Ideapad" },
  ]);

  const [selected, setSelected] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Delete single
  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    setSelected(selected.filter((sid) => sid !== id));
  };

  // ✅ Delete selected
  const handleDeleteSelected = () => {
    if (selected.length === 0) return;
    const remaining = products.filter((p) => !selected.includes(p.id));
    setProducts(remaining);
    setSelected([]);
  };

  // ✅ Select all
  const handleSelectAll = () => {
    if (selected.length === products.length) {
      setSelected([]);
    } else {
      setSelected(products.map((p) => p.id));
    }
  };

  // ✅ Select individual
  const handleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((sid) => sid !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  // ✅ Edit product
  const handleEdit = (id, name) => {
    setEditId(id);
    setEditName(name);
  };

  const handleUpdate = (id) => {
    setProducts(
      products.map((p) => (p.id === id ? { ...p, name: editName } : p))
    );
    setEditId(null);
    setEditName("");
  };

  const handleCancel = () => {
    setEditId(null);
    setEditName("");
  };

  // ✅ Add product
  const handleAdd = () => {
    if (newProduct.trim() === "") return;
    const newId = products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    setProducts([...products, { id: newId, name: newProduct }]);
    setNewProduct("");
    setShowModal(false);
  };

  // ✅ Filtered data for search
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      <div className="w-[90%] md:w-[95%] xl:w-[90%] mx-auto bg-white rounded-lg border border-gray-200 min-h-[600px] relative">
        { Header }
        <div className="flex items-center justify-between px-8 py-4 border-b">
          <h2 className="text-2xl font-semibold text-gray-800">Products</h2>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md text-lg md:text-lg"
          >
            Add Product
          </button>
        </div>

        { Search Bar }
        <div className="flex flex-col sm:flex-row justify-end items-center px-8 py-6 gap-3">
          <input
            type="text"
            placeholder="Search Product..."
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

        { Table }
        <div className="overflow-x-auto px-6">
          <table className="w-full border-x border-b border-gray-200 text-lg text-gray-700">
            <thead className="bg-gray-200 border-b border-gray-200">
              <tr>
                <th className="w-[8%] py-3 text-left px-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-blue-600"
                    checked={selected.length === products.length && products.length > 0}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="w-[8%] py-3 text-center font-semibold px-4">SR. NO.</th>
                <th className="w-[20%] py-3 text-center font-semibold px-4">PRODUCT NAME</th>
                <th className="w-[8%] py-3 text-center font-semibold">EDIT</th>
                <th className="w-[10%] py-3 text-center font-semibold">DELETE</th>
                <th className="w-[14.5%] py-3 text-center font-semibold">VIEW LEADS</th>
              </tr>
            </thead>

            <tbody className="text-lg">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((p, index) => (
                  <tr key={p.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="border py-3 text-left px-4">
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-blue-600"
                        checked={selected.includes(p.id)}
                        onChange={() => handleSelect(p.id)}
                      />
                    </td>
                    <td className="border py-3 text-left px-6 w-24">{index + 1}</td>

                    <td className="border py-3 px-4 text-left">
                      {editId === p.id ? (
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className="border px-3 py-1 rounded-md w-[60%]"
                        />
                      ) : (
                        p.name
                      )}
                    </td>

                    <td className="border py-3 text-center">
                      {editId === p.id ? (
                        <div className="flex justify-center items-center gap-2">
                          <button
                            onClick={() => handleUpdate(p.id)}
                            className="text-blue-700 font-medium"
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
                          onClick={() => handleEdit(p.id, p.name)}
                          className="text-gray-600 hover:text-blue-600"
                        >
                          <Pencil size={18} />
                        </button>
                      )}
                    </td>

                    <td className="border py-3 text-center">
                      <button
                        onClick={() => handleDelete(p.id)}
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
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-gray-500 py-6 text-lg">
                    No results found.
                  </td>
                </tr>
              )}

              { Delete Button Row }
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

        { Add Product Modal }
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
                  Add Product
                </h2>
              </div>

              <div className="px-10 py-9 bg-gray-200 flex flex-col items-start">
                <label className="block text-xl text-gray-800 font-medium mb-3">
                  Product Name
                </label>
                <input
                  type="text"
                  placeholder="Product Name"
                  value={newProduct}
                  onChange={(e) => setNewProduct(e.target.value)}
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
}*/
