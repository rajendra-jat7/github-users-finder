const Pagination = ({ totalPages, currentPage, onPageChange }) => (
  <div className='flex justify-center mt-8 gap-2 flex-wrap'>
    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i + 1}
        onClick={() => onPageChange(i + 1)}
        className={`px-4 py-2 rounded font-semibold transition ${
          currentPage === i + 1
            ? 'bg-blue-500 text-white'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
      >
        {i + 1}
      </button>
    ))}
  </div>
);

export default Pagination;
