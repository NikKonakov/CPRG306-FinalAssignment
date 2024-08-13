"use client";

import { useEffect, useState } from 'react';
import { useAuth } from '../_utils/firebaseConfig';
import { getMonthData } from '../_utils/firestoreService';

export default function HomePage() {
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [editMode, setEditMode] = useState(false);
    const [newRecordMode, setNewRecordMode] = useState(false);
    const [recordData, setRecordData] = useState({ month: '', income: '', expenses: '' });

    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            async function fetchExpenses() {
                const currentMonth = new Date().getMonth() + 1;
                const yearId = new Date().getFullYear();
                const expenses = await getMonthData(user.uid, yearId, currentMonth);
                setTotalExpenses(expenses?.total || 0);
            }
            fetchExpenses();
        }
    }, [user]);

    function handleYearChange(e) {
        setSelectedYear(e.target.value);
        // Fetch data for the selected year
    }

    function handleEdit(recordId) {
        setEditMode(true);
        // Fetch and populate fields with the current record data
    }

    function handleSave() {
        // Save the updated data to Firestore
        setEditMode(false);
    }

    function handleAddRecord() {
        setNewRecordMode(true);
        setRecordData({ month: '', income: '', expenses: '' });
    }

    function handleSaveNewRecord() {
        // Save the new record to Firestore
        setNewRecordMode(false);
    }

    return (
        <div className="flex flex-col justify-center items-center flex-wrap h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome back, {user?.firstName}!</h1>
            <p className="text-2xl mb-6">Your expenses for last month: ${totalExpenses}</p>
            <div className="w-full max-w-2xl">
                <label className="block text-lg mb-2">
                    Selected Year:
                    <input
                        type="number"
                        value={selectedYear}
                        onChange={handleYearChange}
                        className="w-full mt-2 p-2 border rounded"
                    />
                </label>
                {editMode ? (
                    <div className="mt-4">
                        <label className="block text-lg mb-2">Month:</label>
                        <input
                            type="text"
                            value={recordData.month}
                            onChange={(e) => setRecordData({ ...recordData, month: e.target.value })}
                            className="w-full mt-2 p-2 border rounded"
                        />
                        <label className="block text-lg mb-2">Income:</label>
                        <input
                            type="number"
                            value={recordData.income}
                            onChange={(e) => setRecordData({ ...recordData, income: e.target.value })}
                            className="w-full mt-2 p-2 border rounded"
                        />
                        <label className="block text-lg mb-2">Expenses:</label>
                        <input
                            type="number"
                            value={recordData.expenses}
                            onChange={(e) => setRecordData({ ...recordData, expenses: e.target.value })}
                            className="w-full mt-2 p-2 border rounded"
                        />
                        <button
                            onClick={handleSave}
                            className="bg-blue-500 text-white p-2 rounded mt-4"
                        >
                            Save
                        </button>
                    </div>
                ) : newRecordMode ? (
                    <div className="mt-4">
                        <label className="block text-lg mb-2">Month:</label>
                        <input
                            type="text"
                            value={recordData.month}
                            onChange={(e) => setRecordData({ ...recordData, month: e.target.value })}
                            className="w-full mt-2 p-2 border rounded"
                        />
                        <label className="block text-lg mb-2">Income:</label>
                        <input
                            type="number"
                            value={recordData.income}
                            onChange={(e) => setRecordData({ ...recordData, income: e.target.value })}
                            className="w-full mt-2 p-2 border rounded"
                        />
                        <label className="block text-lg mb-2">Expenses:</label>
                        <input
                            type="number"
                            value={recordData.expenses}
                            onChange={(e) => setRecordData({ ...recordData, expenses: e.target.value })}
                            className="w-full mt-2 p-2 border rounded"
                        />
                        <button
                            onClick={handleSaveNewRecord}
                            className="bg-green-500 text-white p-2 rounded mt-4"
                        >
                            Save
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={handleAddRecord}
                        className="bg-gray-700 text-white p-2 rounded mt-4"
                    >
                        Add a new record
                    </button>
                )}
            </div>
        </div>
    );
}
