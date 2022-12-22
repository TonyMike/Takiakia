import FilterProductList from '../ProductList/FilterProductList'
import FilterCategory from './FilterCategory'

const FIlterBody = () => {
  return (
    <div className='h-96 bg-[#fdfdfd] rounded-tl-2xl py-6 px-3 rounded-tr-2xl relative top-[-10px]'>
      <FilterCategory />
      <FilterProductList />
    </div>
  )
}

export default FIlterBody
