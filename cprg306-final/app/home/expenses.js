"use client";

import { useRouter } from "next/navigation";
import { IDtoMonth } from "../_utils/utils";

export default function Expenses({expenses}) {
    const router = useRouter();

    const rows = [];
    expenses.sort(({month:a}, {month:b}) => a-b);
    expenses.forEach((exp) => {
        rows.push(<div className="flex">
                    <p className=" font-serif m-0.5 flex">Month - {IDtoMonth(parseInt(exp.month))} - Income: {exp.income}; Expenses: {exp.expenses}; </p> 
                    <button className="mx-2 border-2 border-gray-500 rounded-lg px-0.5 bg-gray-50 shadow-sm shadow-gray-600 hover:shadow hover:shadow-black active:animate-ping hover:cursor-pointer"  onClick={()=>(router.push(`/home/record?mnth=${exp.month}&year=${exp.year}`))}>Edit</button>
                </div>);
    })

    return(
        <div>
            {rows}
        </div>
    );
}