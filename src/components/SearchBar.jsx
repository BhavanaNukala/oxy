function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-4">

      <label className="form-label fw-semibold">
        Search Products
      </label>

      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

    </div>
  )
}

export default SearchBar