
import './App.css'; //css import

const App = () => {


  const users = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@hotmail.com', status: 'Active', dob: '1990-01-01' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@hotmail.com', status: 'Locked', dob: '1985-03-15' },
    { id: 3, firstName: 'Marc', lastName: 'Saade', email: 'marc@hotmail.com', status: 'Active', dob: '1992-07-22' },
    { id: 4, firstName: 'Ralph', lastName: 'Saade', email: 'ralph@hotmail.com', status: 'Locked', dob: '1998-06-17' },
    { id: 5, firstName: 'Melissa', lastName: 'Azar', email: 'melissa@hotmail.com', status: 'Active', dob: '1994-08-22' },
    { id: 6, firstName: 'Ali', lastName: 'Hajj', email: 'ali@hotmail.com', status: 'Active', dob: '2003-01-23' },
    { id: 7, firstName: 'Yara', lastName: 'Saade', email: 'yara@hotmail.com', status: 'Active', dob: '2003-10-16' },
    { id: 8, firstName: 'Tony', lastName: 'Eid', email: 'tony@hotmail.com', status: 'Active', dob: '1998-02-22' },
  
  ];

  const filteredUsers = users;

  return (
    <div className="container"> 
      {/* Navbar */}
      <nav className="bg-[#3251D0] p-4 flex justify-between items-center"> 
        <h1 className="text-white text-2xl font-bold">User Management</h1>
        <div className="space-x-4">
          <button className="text-white px-4 py-2 rounded-md bg-blue-600 hover:bg-white-700">
            Create User
          </button>
          <button className="text-white px-4 py-2 rounded-md bg-red-600 hover:bg-white-700">
            Logout
          </button>
          <button className="text-white px-4 py-2 rounded-md bg-blue-600 hover:bg-white-700">
            Toggle Theme
          </button>
          <button className="px-4 py-2 rounded-md ">
            <img src="/moon.png" alt="Moon Icon" className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <input
        type="text"
        placeholder="Search by name or email"
        value=""
        readOnly
        className="w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
      />


      {/* User Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded-lg shadow-lg border border-gray-200"
          >
            {/* User Initial */}
            <div className="flex justify-center items-center bg-blue-500 text-white rounded-full h-16 w-16 text-xl font-bold mb-4">
              {user.firstName.charAt(0)}{user.lastName.charAt(0)}
            </div>

            {/* User Details */}
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold">{user.firstName} {user.lastName}</h3>
              <p className="text-gray-600">{user.email}</p>
              <p className={`text-sm ${user.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
                {user.status}
              </p>
              <p className="text-sm text-gray-500">DOB: {user.dob}</p>
            </div>

            {/* Edit and Delete Buttons */}
            <div className="flex justify-between">
              <button className="bg-[#3251D0] text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none">
                Edit
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
