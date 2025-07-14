const SearchBar = ({ search, onChange }) => (
  <div className='flex justify-center mb-6'>
    <input
      type='text'
      placeholder='Search by login or ID...'
      className='px-4 py-2 w-80 bg-gray-400 text-black rounded shadow-md'
      value={search}
      onChange={onChange}
    />
  </div>
);

export default SearchBar;
