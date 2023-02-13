import TKSelect from "../../Reusables/TKSelect";
import { mobilePhone } from "../../utils/categoryData";

const MobileCategorySelection = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
    {mobilePhone.map((item, index) => {
      if (item.type === 'select') {
        return (
          <TKSelect key={index} placeholder={item.placeholder} arrList={item.list} enableSearch={item.enableSearch} />
        )
      }
    })}
  </div>
  );
}

export default MobileCategorySelection;