import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
// import profileImage from './images.jpeg';

const Dashboard = () => {
  const { user, logout, updateUser } = useContext(AuthContext);
  const hours = new Date().getHours();
  const greeting = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening';
  const [darkMode, setDarkMode] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user);
  const [newPassword, setNewPassword] = useState('');

  const handleEditProfile = (e) => {
    e.preventDefault();
    updateUser(newName, newPassword);
    setIsEditing(false);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-black' : 'bg-[#c5d7eb] text-black'}`}>
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-[#000]">{greeting}, {user}!</h1>
          <button onClick={logout} className="bg-[#427aa1] text-white py-2 px-4 rounded hover:bg-[#eac7fc] transition">Logout</button>
        </div>

        {/* Profile and Quick Actions */}
        {/* <div className="flex justify-center mt-8 items-center pl-2">
          <img src={profileImage} alt="Profile" className="w-24 h-24 rounded-full" />
          <div>
            <h2 className="text-2xl font-bold text-[#eac7fc]">{user}</h2>
          </div>
        </div> */}

        {/* Quick Actions */}
        {/* <div className="flex justify-center space-x-4 mt-4">
          <button onClick={() => setIsEditing(true)} className="bg-[#427aa1] text-white py-2 px-4 rounded hover:bg-[#eac7fc] transition">
            Edit Profile
          </button>
        </div> */}

        {/* Edit Profile Modal */}
        {isEditing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
              <form onSubmit={handleEditProfile}>
                <div className="mb-4">
                  <label className="block mb-2">Name</label>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="border border-gray-300 rounded p-2 w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="border border-gray-300 rounded p-2 w-full"
                    required
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <button type="submit" className="bg-[#427aa1] text-white py-2 px-4 rounded hover:bg-[#eac7fc] transition">Save</button>
                  <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-300 text-black py-2 px-4 rounded">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Recent Activity */}
        <div className="mt-8 bg-white p-6 rounded shadow-lg">
          <h3 className="text-xl font-bold text-[#000]">Recent Activity</h3>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Logged in at 10:00 AM</li>
            <li>Updated profile</li>
            <li>Viewed the analytics page</li>
          </ul>
        </div>

        {/* Widgets */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-bold text-[#000]">Tasks Completed</h3>
            <p className="text-2xl">24</p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-bold text-[#000]">Notifications</h3>
            <p className="text-2xl">3</p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-bold text-[#000]">Messages</h3>
            <p className="text-2xl">12</p>
          </div>
        </div>

        {/* Theme Switch */}
        <div className="mt-8">
          <button onClick={() => setDarkMode(!darkMode)} className="bg-[#427aa1] text-white py-2 px-4 rounded hover:bg-[#eac7fc] transition">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
