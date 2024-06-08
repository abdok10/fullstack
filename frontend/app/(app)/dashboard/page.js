import Header from '@/app/(app)/Header'
import HeaderDashboard from '../../../components/HeaderDashboard'

export const metadata = {
    title: 'Profile Page',
}

const Dashboard = () => {
    return (
        <>
            <Header title="Dashboard" />
            <div className="py-12">
                <div className="max-w-[1450px] mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-slate-950 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="w-[] border-b border-gray-200">
                            <HeaderDashboard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard