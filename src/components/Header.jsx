import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'

export default function Header() {
  return (
    <Navbar className='border-b-2 flex justify-between w-full'>
        <Link to='/' className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
        rounded-lg text-white">Sahnd's</span>
        Blog
        </Link>
        <form>
            <div className=" items-center border rounded p-2 hidden sm:flex">
               
                <TextInput type="text" placeholder="Search..." className="w-full "/>
                <AiOutlineSearch size={20} color="gray" />
            </div>
            
        </form>
        <Button className="w-12 h-8 lg:hidden sm:hidden m-auto align-center justify-center rounded-2xl"  color='gray' pill>
            <AiOutlineSearch className='m-auto align-center justify-center rounded-2xl'/>
        </Button>

        <div className="flex gap-2">
            <Button className="w-12 h-8 hidden sm:inline rounded-xl m-auto" color='gray'>
                <FaMoon size={18} color="black" className="m-auto items-center justify-center"/>
            </Button>

            <Link to='/sign-in'>
            <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-700 to-blue-500 
            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 
            font-bold rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 ">Sign In</button>
            </Link>
        </div>
    </Navbar>
  )
}
