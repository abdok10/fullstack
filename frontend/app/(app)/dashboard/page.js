import Header from '@/app/(app)/Header'

export const metadata = {
    title: 'Profile Page',
}

const Dashboard = ({children}) => {
    return (
        <>
            <Header title="Dashboard" />
            <div className="py-12">
                <div className="max-w-[1450px] mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-slate-950 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 border-b border-gray-200">
                            <h1 className="text-xl">you are logged in</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard