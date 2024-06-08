const AuthCard = ({ logo, children }) => (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-slate-950">
        <div>{logo}</div>

        <div className="w-full sm:max-w-md mt-6 px-6 py-4 border border-dashed border-white dark:text-gray-200 overflow-hidden sm:rounded-lg">
            {children}
        </div>
    </div>
)

export default AuthCard
