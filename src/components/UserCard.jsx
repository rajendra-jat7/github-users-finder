const UserCard = ({ user }) => (
  <div className='bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700'>
    <div className='flex flex-col items-center'>
      <img
        src={user.avatar_url}
        alt={user.login}
        className='w-24 h-24 rounded-full border-4 border-gray-600'
      />
      <h2 className='text-2xl font-bold mt-4'>{user.login}</h2>
      <p className='text-bold text-gray-400'>ID: {user.id}</p>
    </div>
    <div className='mt-4 space-y-2 text-sm'>
      <p>
        <span className='text-gray-300 font-bold'>Profile :</span>{' '}
        <a
          href={user.html_url}
          target='_blank'
          rel='noreferrer'
          className='inline-block bg-gray-100 text-black px-3 py-1 rounded hover:bg-gray-400 transition'
        >
          Visit GitHub
        </a>
      </p>
      <p>
        <span className='text-gray-300 font-bold'>Type :</span> {user.type}
      </p>
      <p>
        <span className='text-gray-300 font-bold'>Site Admin :</span>{' '}
        {user.site_admin ? 'Yes' : 'No'}
      </p>
      <p>
        <span className='text-gray-300 font-bold'>Repos :</span>{' '}
        <a
          href={user.repos_url}
          target='_blank'
          rel='noreferrer'
          className='inline-block bg-gray-100 text-black px-3 py-1 rounded hover:bg-gray-400 transition'
        >
          View Repositories
        </a>
      </p>
    </div>
  </div>
);

export default UserCard;
