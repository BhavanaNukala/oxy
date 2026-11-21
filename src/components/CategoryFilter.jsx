// function CategoryFilter({ selectedCategory, setSelectedCategory }) {
//   const categories = [
//     "All",
//     "Electronics",
//     "Shoes",
//     "Clothing",
//     "Accessories"
//   ]

//   return (
//     <div className="mb-4">

//       <label className="form-label fw-semibold">
//         Filter by Category
//       </label>

//       <select
//         className="form-select form-select-lg"
//         value={selectedCategory}
//         onChange={(e) => setSelectedCategory(e.target.value)}
//       >

//         {categories.map((category) => (
//           <option key={category} value={category}>
//             {category}
//           </option>
//         ))}

//       </select>

//     </div>
//   )
// }

// export default CategoryFilter
function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
  categories,
}) {
  return (
    <div className="mb-4">

      <label className="form-label fw-semibold">
        Filter by Category
      </label>

      <select
        className="form-select form-select-lg"
        value={selectedCategory}
        onChange={(e) =>
          setSelectedCategory(e.target.value)
        }
      >

        <option value="All">
          All
        </option>

        {categories.map((category) => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}

      </select>

    </div>
  );
}

export default CategoryFilter;