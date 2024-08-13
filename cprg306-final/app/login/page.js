"use client";

import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            router.push("/home");
        } catch (error) {
            console.error("Error with Google sign-in:", error);
            alert("Google sign-in failed.");
        }
    };

    const handleGithubSignIn = async () => {
        const provider = new GithubAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            router.push("/home");
        } catch (error) {
            console.error("Error with GitHub sign-in:", error);
            alert("GitHub sign-in failed.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen pb-36">
            <div className="border-2 border-stone-800 rounded-xl p-3 bg-yellow-200 bg-opacity-40 shadow-md shadow-slate-700">
                <p className="text-3xl font-medium font-serif text-center mb-3">Welcome to ABC App</p>
                <p className="text-xl font-serif text-center m-2">Login</p>
                <div className="flex flex-col">
                    <button
                        className="border-2 border-stone-700 mb-1 rounded-md font-serif justify-center shadow-sm shadow-black p-2 bg-gradient-to-r from-green-600 via-yellow-300 to-red-600 hover:text-white"
                        onClick={handleGoogleSignIn}
                    >
                        Sign In with Google
                    </button>
                    <button
                        className="border-2 border-stone-700 w-full mb-2 rounded-md font-serif justify-center shadow-sm shadow-black p-2 bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900 text-slate-200 hover:text-white"
                        onClick={handleGithubSignIn}
                    >
                        Sign In with GitHub
                    </button>
                </div>
            </div>
        </div>
    );
}
