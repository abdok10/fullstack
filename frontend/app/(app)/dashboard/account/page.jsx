"use client";

import { useAuth } from "@/hooks/auth";
import Header from "../../Header";

function page() {
    const { user } = useAuth({ middleware: 'auth' })
    return (
        <>
            <Header title="Profile Page" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-slate-950 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 border-b border-gray-200">
                            <h1 className="text-xl">Welcome back <span className="font-bold">{user.name} !</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default page;
