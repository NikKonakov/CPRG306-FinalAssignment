`use client`
export default function Page(){
    return(
    <div className=" flex justify-center items-center h-screen pb-36">
        <div className=" border-2 border-stone-800 rounded-xl p-3 bg-yellow-200 bg-opacity-40 shadow-md shadow-slate-700">
            <p className=" text-3xl font-medium font-serif text-center mb-3">Welcome to ABC App</p>
            <p className="text-xl font-serif text-center m-2">Login</p>
            <div className="flex flex-col">
                <input className=" border-2 border-stone-700 mb-1 rounded-md font-serif justify-center shadow-sm shadow-black" type="text" placeholder="Login" required></input>
                <input className="border-2 border-stone-700 w-full mb-2 rounded-md font-serif justify-center shadow-sm shadow-black" type="password" placeholder="Password" required></input>
            </div>
            <br />
            <div className="flex">
                <button className="flex justify-start text-xs text-blue-600 font-light underline visited:text-purple-900 hover:text-purple-500 active:bg-purple-700 active:animate-ping visited:italic">Forgot Password?</button>
                <button className="flex justify-end ml-auto text-xs text-blue-600 font-light underline visited:text-purple-900 visited:italic hover:text-purple-500 active:bg-purple-700 active:animate-ping">Sign Up</button>
            </div>
            <div className="flex justify-center mb-2"><button className="border-2 border-green-900 p-0.5 rounded-lg bg-gradient-to-br from-green-800 to-lime-400 hover:from-green-600 hover:to-lime-400 active:animate-ping">Submit</button></div>
            <div className="border-2 border-stone-800 rounded-full"></div>
            <div className="flex justify-center flex-row flex-wrap">
                <p className="flex justify-center w-full m-auto">Other Sign-In Options</p>
                <button className="p-0.5 border-2 border-stone-700 m-2 rounded-md bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900 text-slate-200 hover:text-white font-mono active:animate-ping">GitHub</button>
                <button className="p-0.5 border-yellow-400 border-2 m-2 rounded-md text-black font-mono bg-gradient-to-r from-green-600 via-yellow-300 to-red-600 hover:text-white active:animate-ping">Google Account</button>
            </div>
        </div>
    </div>);
}

