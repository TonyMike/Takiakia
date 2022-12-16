import { TfiMenuAlt } from 'react-icons/tfi'

const Category = () => {
  const categories = [
    { name: 'Phones & Tablets', icon: 'text' },
    { name: 'Electronics', icon: 'text' },
    { name: 'fashion', icon: 'text' },
    { name: 'Sport', icon: 'text' },
    { name: 'Beauty', icon: 'text' },
    { name: 'Home & Appliances', icon: 'text' },
    { name: 'Furnitures', icon: 'text' },
    { name: 'vehichles', icon: 'text' },
    { name: 'Property', icon: 'text' },
    { name: 'Musical Instrument', icon: 'text' }
  ]
  return (
    <div className=' bg-white shadow-md '>
      <h3 className='flex pl-5 pr-20  py-5 md:pl-10 items-center space-x-2'>
        <span className='mb-1'>
          <TfiMenuAlt />
        </span>
        <span className='text-[20px] '>Categories</span>
      </h3>

      {/* category list */}
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              key={index}
              className='capitalize pl-5 p-20 pr-1 py-2 md:pl-10 text-[15px] text-[#3d3d3d] hover:bg-pink hover:text-white transition-all ease-in-out duration-200 cursor-pointer hover:ease-in '
            >
              {category.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Category
