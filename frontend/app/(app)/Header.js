const Header = ({ title }) => {
    return (
        <header className="bg-white shadow dark:bg-slate-950">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h2 className="font-bold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {title}
                </h2>
            </div>
        </header>
    )
}

export default Header