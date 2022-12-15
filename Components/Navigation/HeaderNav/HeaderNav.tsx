const HeaderNav = () => {
  const links = ['Home', 'About us', 'Blog', 'FAQ']
  return (
    <header className='sticky top-0 bg-lightPurple'>
      <nav className='flex justify-between items-center px-20 py-3'>
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
        <button className='pink-btn'>Sell Now</button>
      </nav>
    </header>
  )
}

export default HeaderNav
