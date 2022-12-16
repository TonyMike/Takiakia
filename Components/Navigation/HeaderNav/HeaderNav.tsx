import { RiMenu3Fill } from 'react-icons/ri'

const HeaderNav = () => {
  const links = ['Home', 'About us', 'Blog', 'FAQ']
  return (
    <header className=' sticky top-0 bg-white md:bg-lightPurple z-10'>
      {/* mobile header */}
      <nav className='md:hidden flex justify-between items-center py-4 px-5 sm:px-10 '>
        <h2>Logo</h2>
        <div className='flex items-center space-x-3'>
          <button className='text-[12px] font-monteserrat border-pink border-[1px] rounded-[25px] px-3 py-2 text-pink'>
            Sell Now
          </button>
          <button>
            <RiMenu3Fill fontSize={30} />
          </button>
        </div>
      </nav>
      {/* desktop header */}
      <nav className='hidden md:flex justify-between items-center px-20 py-3'>
        <div className='Josefin text-4xl'>logo</div>
        <ul className='flex'>
          {links.map(link => {
            return (
              <li className='mx-5 cursor-pointer' key={link}>
                {link}
              </li>
            )
          })}
        </ul>
        <button className='pink-btn ease-in-out duration-300 hover:scale-105'>
          Sell Now
        </button>
      </nav>
    </header>
  )
}

export default HeaderNav
