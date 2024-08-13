"use client";

import { query, getDoc, getDocs, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuth, db } from '../../_utils/firebaseConfig.js';
import { setDoc, doc, addDoc, collection } from 'firebase/firestore';

import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function Page() {
    const [selectedYear, setSelectedYear] = useState((new Date().getFullYear()).toString());
    const [recordData, setRecordData] = useState({ month: '', income: '', expenses: '', docID: '' });

    const { user } = useAuth();

    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams()

    function isEditMode() {
        return (searchParams.size > 0 && searchParams.get("mnth") !== undefined)
    }

    useEffect(() => {
        if (isEditMode()) {
            async function getUserData(){
                const q = query(collection(db, "expenses"), where("email", "==", user.email), where("month", "==", searchParams.get("mnth")), where("year", "==", searchParams.get("year")));
                const querySnapshot = await getDocs(q);
                if (querySnapshot.empty == false){
                    var expArr = []; 
                    var expIdArr = [];
                    querySnapshot.forEach((doc) => {
                        expArr.push(doc.data())
                        expIdArr.push(doc.id)
                    })
                    var userData = expArr[0];
                    setRecordData({month: userData.month, income: userData.income, expenses: userData.expenses, docID: expIdArr[0]})
                } else {console.log("useEffect: Query - No data has been found")}
            } 

            getUserData()
        }
    }, [pathname, searchParams])

    function handleYearChange(e) {
        setSelectedYear(e.target.value);
    }

    async function handleSave() {
        if (isEditMode()) {
            // update
            await setDoc(doc(db, "expenses", recordData.docID),{
                email: user.email,
                year: selectedYear,
                month: recordData.month,
                income: recordData.income,
                expenses: recordData.expenses
            })
        } else {
            await addDoc(collection(db, "expenses"),{
                email: user.email,
                year: selectedYear,
                month: recordData.month,
                income: recordData.income,
                expenses: recordData.expenses
            })
        }

        router.push('/home')
    }

    return (
        <div className="flex flex-col justify-center items-center flex-wrap h-screen bg-gray-100">
            <div className="w-full max-w-2xl">
                { isEditMode() ? (<div>
                    <label className="block text-lg mb-2">
                        Selected Year:
                        <input
                            disabled
                            type="number"
                            value={selectedYear}
                            onChange={handleYearChange}
                            className="w-full mt-2 p-2 border rounded"
                        />
                    </label>
                    <label className="block text-lg mb-2">Month:</label>
                    <input
                        disabled
                        type="text"
                        value={recordData.month}
                        onChange={(e) => setRecordData({ ...recordData, month: e.target.value })}
                        className="w-full mt-2 p-2 border rounded"
                    />
                    <label className="block text-lg mb-2">Income:</label>
                </div>)
            :
            <div>
                <label className="block text-lg mb-2">
                        Selected Year:
                        <input
                            type="number"
                            value={selectedYear}
                            onChange={handleYearChange}
                            className="w-full mt-2 p-2 border rounded"
                        />
                    </label>
                    <label className="block text-lg mb-2">Month:</label>
                    <input
                        type="text"
                        value={recordData.month}
                        onChange={(e) => setRecordData({ ...recordData, month: e.target.value })}
                        className="w-full mt-2 p-2 border rounded"
                    />
                    <label className="block text-lg mb-2">Income:</label>
            </div>
            }
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
                    className="bg-green-500 text-white p-2 rounded mt-4"
                >
                    Save
                </button>
            </div>
        </div>
    );
}