export default function Page(){
    return(
        <div className="flex justify-center items-center h-screen">
            <div>
                <div className="border-2 rounded-lg bg-white bg-opacity-20">
                    {/* Users tab */}
                    <div className="border-2 m-4 rounded-lg bg-opacity-50 bg-white border-black">
                        <div className="p-2">
                            <div className="flex justify-center">
                                <p className="text-2xl">Users:</p>
                            </div>
                            <div className="overflow-scroll">
                                <div className="flex flex-col border-2 border-black rounded-lg p-2 bg-green-700 mb-2">
                                    {/* Should be a different component*/}
                                    <div className="flex justify-between mb-2">
                                        <p className="mr-2 font-mono">ID:</p>
                                        <p className="font-mono italic">TEST_ID</p>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <p className="mr-2 font-mono">First Name:</p>
                                        <p className="font-mono italic">TEST_NAME</p>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <p className="mr-2 font-mono">Last Name:</p>
                                        <p className="font-mono italic">TEST_LAST_NAME</p>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <p className="mr-2 font-mono">Email:</p>
                                        <p className="font-mono italic">TEST_EMAIL</p>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <p className="mr-2 font-mono">Password:</p>
                                        <p className="font-mono italic">PASSWORD</p>
                                    </div>
                                    {/* After pressing the button it will open the component with input form */}
                                    <div className="flex justify-center">
                                        <button className="px-0.5 border-2 border-black bg-green-900 rounded-lg text-slate-200 shadow-sm shadow-gray-600 hover:shadow hover:shadow-black active:animate-pulse font-mono">Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col m-4 border-2 rounded-lg bg-opacity-50 bg-white border-black">
                        {/* Different view on component */}
                        {/* When the user clicks on edit button */}
                        {/* Use conditional rendering for this! */}
                        <div className="p-2 bg-green-700 rounded-lg border-2 border-gray-600 m-2">
                            <div className="flex flex-row justify-between mb-2 w-full">
                                <label className="mr-2 font-mono">ID:</label>
                                <input className="border-2 border-black rounded-lg" type="text"></input>
                            </div>
                            <div className="flex flex-row justify-between mb-2 w-full">
                                <label className="mr-2 font-mono">First Name:</label>
                                <input className="border-2 border-black rounded-lg" type="text"></input>
                            </div>
                            <div className="flex flex-row justify-between mb-2 w-full">
                                <label className="mr-2 font-mono">Last Name:</label>
                                <input className="border-2 border-black rounded-lg" type="text"></input>
                            </div>
                            <div className="flex flex-row justify-between mb-2 w-full">
                                <label className="mr-2 font-mono">Email:</label>
                                <input className="border-2 border-black rounded-lg" type="email"></input>
                            </div>
                            <div className="flex flex-row justify-between mb-2 w-full">
                                <label className="mr-2 font-mono">Password:</label>
                                <input className="border-2 border-black rounded-lg" type="password"></input>
                            </div>
                            <div className="flex justify-center">
                                <button className="px-0.5 border-2 border-black bg-green-900 rounded-lg text-slate-200 shadow-sm shadow-gray-600 hover:shadow hover:shadow-black active:animate-pulse font-mono">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}