import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import UserCard from './UserCard';
import Pagination from './Pagination';

const GitHubUsersApp = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://api.github.com/users?per_page=100');
        const data = await res.json();
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      } catch (err) {
        console.error('Error:', err);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.login.toLowerCase().includes(search.toLowerCase()) ||
        user.id.toString().includes(search)
    );
    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [search, users]);

  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <div className='min-h-screen bg-gray-900 text-white p-6'>
      <h1 className='text-3xl font-bold mb-4 text-center'>GitHub Users</h1>

      <SearchBar search={search} onChange={(e) => setSearch(e.target.value)} />

      {loading ? (
        <p className='text-center'>Loading...</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {currentUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default GitHubUsersApp;
