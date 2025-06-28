import logo from '../assets/vite.svg'

const Header = ({ searchTerm, setSearchTerm }) => {
    return (
        <>
            <header className='flex flex-col sm:flex-row md:items-center lg:items-center xl:items-center justify-between w-full bg-blue-300 sticky top-0 p-2 gap-2 z-10'>
                <div className="flex items-center gap-2">
                    <img className='h-10 mr-2' src={logo} alt="posts logo" />
                    <h1 className='text-xl md:text-3xl font-semibold'>Posts</h1>
                </div>

                <div className='flex items-center sm:border-t-red-800 gap-2 w-full sm:w-auto'>
                    <label htmlFor="search" className='hidden gap-1 md:block lg:inline-flex items-center text-lg sm:text-2xl whitespace-nowrap text-gray-800'>                  
                    Search :
                    </label>
                    <input
                        type="text"
                        id="search"
                        placeholder="Search by post and tag..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-1 rounded border border-gray-800 w-full sm:w-[250px]"
                    />
                </div>
            </header>

        </>
    )
}

export default Header