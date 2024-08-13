"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../_utils/firebaseConfig';
import { getAllUsers, updateUser } from '../_utils/firestoreService';

export default function AdminPage() {
    const { user } = useAuth();
    const router = useRouter();
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState(null);
    const [updatedUserData, setUpdatedUserData] = useState({});

    useEffect(() => {
        if (!user || !user.isAdmin) {
            router.push('/login');
        } else {
            async function fetchUsers() {
                const usersList = await getAllUsers();
                setUsers(usersList);
            }
            fetchUsers();
        }
    }, [user]);

    const handleEdit = (userData) => {
        setEditUser(userData);
        setUpdatedUserData(userData);
    };

    const handleSave = async () => {
        try {
            await updateUser(editUser.id, updatedUserData);
            setEditUser(null);
            setUsers(users.map(u => (u.id === editUser.id ? updatedUserData : u)));
        } catch (error) {
            console.error("Failed to update user:", error);
        }
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">Admin Page</h1>
            <div className="flex flex-col space-y-4">
                {users.map(user => (
                    <div key={user.id} className="p-4 bg-white shadow rounded">
                        {editUser && editUser.id === user.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={updatedUserData.name}
                                    onChange={(e) => setUpdatedUserData({ ...updatedUserData, name: e.target.value })}
                                    className="w-full p-2 border rounded mb-2"
                                />
                                <input
                                    type="email"
                                    value={updatedUserData.email}
                                    onChange={(e) => setUpdatedUserData({ ...updatedUserData, email: e.target.value })}
                                    className="w-full p-2 border rounded mb-2"
                                />
                                <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded">
                                    Save
                                </button>
                            </div>
                        ) : (
                            <div className="flex justify-between items-center">
                                <div>
                                    <p>Name: {user.name}</p>
                                    <p>Email: {user.email}</p>
                                </div>
                                <button onClick={() => handleEdit(user)} className="bg-yellow-500 text-white p-2 rounded">
                                    Edit
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
