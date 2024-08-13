"use client";

import { useEffect, useState } from 'react';
import { getFirestore, query, getDocs, collection, where } from "firebase/firestore";
import { useAuth, db } from '../_utils/firebaseConfig.js';
import { useRouter } from "next/navigation";
import Expenses from './expenses.js'
import Popup from 'reactjs-popup';

export default function Page(){

    const [monthsIncome, setMonthsIncome] = useState(0);
    const [monthsExpenses, setMonthsExpenses] = useState(0);
    const router = useRouter();
    const [expenses, setExpenses] = useState([]);
    const { user } = useAuth();

    function calculateMontly(months, operation){
        var data = expenses
        data.sort(({month:a}, {month:b}) => b-a)
        if(operation == 0) {
            var expens = 0;
            for (var i = 0; i < months; i++) {
                expens += parseInt(data[i].expenses)
            }

            return expens > 0 ? (expens/months) : 0;
        } if (operation == 1){
            var incm = 0;
            for (var i = 0; i < months; i++) {
                incm += parseInt(data[i].income)
            }

            return incm > 0 ? (incm/months) : 0;
        } else {
            return 0
        }
    }

    function handleIncomeChange(e) {
        setMonthsIncome(calculateMontly(e.target.value, 1))
    }

    function handleExpensesChange(e) {
        setMonthsExpenses(calculateMontly(e.target.value, 0));
    }

    useEffect(() => {
        if (user) {
            async function fetchExpenses() {
                const q = query(collection(db, "expenses"), where("email", "==", user.email));
                const querySnapshot = await getDocs(q);
                var expArr = []; 
                querySnapshot.forEach((doc) => {
                    expArr.push(doc.data())
                })
                expArr.sort(({month:a}, {month:b}) => a-b);
                setExpenses(expArr);
            }

            fetchExpenses();
        }
    }, [user]);

    return(
        <div className="flex flex-col justify-center items-center flex-wrap h-screen">
                <p className="text-5xl font-mono p-4 text-white">Simple Finance</p>
            <div className="border-2 mb-32 rounded-lg bg-white">
                <div className="bg-lime-50 basis-12 m-4 border-2 border-gray-600 rounded-lg p-4 shadow-sm shadow-gray-600">
                    <p className="text-xl font-mono">Welcome back, {user.displayName}!</p>
                </div>
                <div className="bg-lime-50 basis-12 m-4 border-2 border-gray-600 rounded-lg p-4 shadow-sm shadow-gray-600">
                    <div>
                        <p className="text-xl font-medium ml-1 mt-1">Selected Year: 2024</p> {/*Select year dropdown menu will be here */}
                        <div>
                            <p className="text-lg mt-4 ml-4">Records:</p>
                            <Expenses expenses={expenses} />
                            <button onClick={() => {router.push('/home/record')}} className="border-2 rounded-lg px-1 border-gray-600 mx-48 mt-4 font-mono text-md bg-white shadow-sm shadow-gray-600 hover:shadow hover:shadow-black active:animate-ping">
                                Add a new record
                            </button>
                        </div>
                        <div>
                            <p className="text-lg mt-4 ml-4">Calculate:</p>
                            <form className="my-1" action="">
                                <label>Average monthly income for</label>
                                <input className="border-2 border-gray-500 rounded-md mx-1 bg-gray-50" type="number" id="AveMonthIncome"  defaultValue="0" min="0" max={expenses.length} onChange={handleIncomeChange}/>
                                <label>months</label>
                                <Popup trigger=
                                    {<input className="mx-2 border-2 border-gray-500 rounded-lg px-0.5 bg-gray-50 shadow-sm shadow-gray-600 hover:shadow hover:shadow-black active:animate-ping hover:cursor-pointer" type="button" value="Show" />}
                                    position="right center" modal nested>
                                    <div className=" font-serif bg-lime-100 basis-12 m-4 border-2 border-gray-600 rounded-lg p-4 shadow-sm shadow-gray-600">Your Average Income: {monthsIncome}</div>
                                </Popup>
                            </form>
                            <form className="my-1" action="">
                                <label>Average monthly expenses for</label>
                                <input className="border-2 border-gray-500 rounded-md mx-1 bg-gray-50" type="number" id="AveMonthExpences"  defaultValue="0" min="0" max={expenses.length} onChange={handleExpensesChange}/>
                                <label>months</label>
                                <Popup trigger=
                                    {<input className="mx-2 border-2 border-gray-500 rounded-lg px-0.5 bg-gray-50 shadow-sm shadow-gray-600 hover:shadow hover:shadow-black active:animate-ping hover:cursor-pointer" type="button" value="Show" />}
                                    position="right center" modal nested>
                                    <div className=" font-serif bg-lime-100 basis-12 m-4 border-2 border-gray-600 rounded-lg p-4 shadow-sm shadow-gray-600">Your Average Expenses: {monthsExpenses}</div>
                                </Popup>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}