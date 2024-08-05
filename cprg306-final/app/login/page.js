`use client`
export default function Page(){
    return(
    <div className=" flex justify-center items-center h-screen pb-36">
        <div className=" border-2 border-stone-800 rounded-xl p-3 bg-yellow-200 bg-opacity-40">
            <p className=" text-3xl font-medium font-serif text-center mb-3">Welcome to ABC App</p>
            <p className="text-xl font-serif text-center m-2">Login</p>
            <input className=" border-2 border-stone-700 w-full mb-1 rounded-md font-serif" type="text" placeholder="Login"></input>
            <br />
            <input className="border-2 border-stone-700 w-full mb-2 rounded-md font-serif" type="password" placeholder="Password"></input>
            <br />
            <div className="flex justify-center mb-2"><button className="border-2 border-stone-700 p-0.5 rounded-lg">Submit</button></div>
            <div className="border-2 border-stone-800 rounded-full"></div>
            <div className="flex justify-center">
                <button className="p-0.5 border-2 border-stone-700 m-2 rounded-md">GitHub</button>
                <button className="p-0.5 border-stone-700 border-2 m-2 rounded-md">Google Account</button>
            </div>
        </div>
    </div>);
}

