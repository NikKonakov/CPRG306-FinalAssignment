`use client`
export default function Page(){
    return(
        <div className="flex flex-col justify-center items-center flex-wrap h-screen">
            <div className="bg-white basis-12 m-4 border-2 border-gray-600 rounded-lg p-0.5">
                <p className="text-xl font-mono mx-8">Welcome back, User!</p>
                <p className="mt-2 font-light">Your current subscription: BASIC</p>
                <p className="font-light">Your expenses for last month: 5412$</p>
            </div>
            <div className="bg-white basis-12 mb-32 border-2 border-gray-600 rounded-lg p-4">
                <div>
                    <p className="text-xl font-medium ml-1 mt-1">Seleced Year: 2024</p> {/*Select year dropdown menu will be here */}
                    <div>
                        <p className="text-lg mt-4 ml-4">Records:</p>
                        <div className="flex">
                            <p className=" font-serif m-0.5">May - Income: 20.000; Expenses: 19.500; Saved: 500$;</p>
                            <input className="border-2 border-gray-700 shadow-sm shadow-gray-500 rounded-lg self-start px-0.5 font-serif ml-1" type="button" value="Edit"></input>
                        </div>
                        <div className="flex">
                            <p className=" font-serif m-0.5">June - Income: 16.500; Expenses: 24.000; Debt: 7.500$ - 500$;</p>
                            <input className="border-2 border-gray-700 shadow-sm shadow-gray-500 rounded-lg self-start px-0.5 font-serif ml-1" type="button" value="Edit"></input>
                        </div>
                        <button className="border-2 rounded-lg px-1 border-gray-600 mx-48 mt-4 font-mono text-md">Add a new record</button>
                    </div>
                    <div>
                        <p className="text-lg mt-4 ml-4">Calculate:</p>
                        <form className="my-1" action="">
                            <label>Average montly income for</label>
                            <input className="border-2 border-gray-500 rounded-md mx-1 bg-gray-50" type="number" id="AveMonthIncome" defaultValue="1" min="1" max="12"/>
                            <label>months</label>
                            <input className="mx-2 border-2 border-gray-500 rounded-lg px-0.5 bg-gray-50" type="button" value="Submit" />
                        </form>
                        <form className="my-1" action="">
                            <label>Average montly expenses for</label>
                            <input className="border-2 border-gray-500 rounded-md mx-1 bg-gray-50" type="number" id="AveMonthExpences"  defaultValue="1" min="1" max="12"/>
                            <label>months</label>
                            <input className="mx-2 border-2 border-gray-500 rounded-lg px-0.5 bg-gray-50" type="button" value="Submit" />
                        </form>
                        <form className="my-1" action="">
                            <label>Average montly debt for</label>
                            <input className="border-2 border-gray-500 rounded-md mx-1 bg-gray-50" type="number" id="AveMonthDebt" defaultValue="1" min="1" max="12"/>
                            <label>months</label>
                            <input className="mx-2 border-2 border-gray-500 rounded-lg px-0.5 bg-gray-50" type="button" value="Submit" />
                        </form>
                        <form className="my-1" action="">
                            <label>Average montly savings for</label>
                            <input className="border-2 border-gray-500 rounded-md mx-1 bg-gray-50" type="number" id="AveMonthSavings" defaultValue="1" min="1" max="12"/>
                            <label>months</label>
                            <input className="mx-2 border-2 border-gray-500 rounded-lg px-0.5 bg-gray-50" type="button" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}