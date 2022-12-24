import FilterProductList from '../ProductList/FilterProductList'
import FilterCategory from './FilterCategory'

const FIlterBody = () => {
  return (
    <div className=' bg-[#fdfdfd] rounded-tl-2xl flex md:space-x-5  md:px-10 flex-col md:flex-row py-6 px-3 rounded-tr-2xl relative top-[-10px]'>
      <FilterCategory />
      <FilterProductList />
    </div>
  )
}

export default FIlterBody
