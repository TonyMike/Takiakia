import InputMethod from '../../../Reusables/InputMethod'
import TKSelect from '../../../Reusables/TKSelect'

const select = 'adapter'
const adapter = [
  {
    type: 'select',
    placeholder: 'Connector 1 type'
  },
  {
    type: 'select',
    placeholder: 'Connector 2 type'
  },
  {
    type: 'select',
    placeholder: 'number of inputs'
  }
]
const cardReader = [
  {
    type: 'select',
    placeholder: 'Reader cards supported'
  },
  {
    type: 'select',
    placeholder: 'Card reader interface'
  },
  {
    type: 'select',
    placeholder: 'number of cards slots'
  }
]
const RenderSelect = (select: string) => {
  switch (select.toLowerCase()) {
    case 'adapter':
      return adapter.map((item, index) => {
        return (
          <InputMethod
            method={item.type}
            placeholder={item.placeholder}
            key={index}
          />
        )
      })
    case 'card reader':
      return cardReader.map((item, index) => {
        return (
          <InputMethod
            method={item.type}
            placeholder={item.placeholder}
            key={index}
          />
        )
      })
    default:
      return null
  }
}

const ComputerAccessories = () => {
  return (
    <div className='grid grid-cols-2 gap-6 my-5 '>
      <TKSelect placeholder='brandooo' />
      <TKSelect placeholder='type' />
      {RenderSelect('adapter')}
    </div>
  )
}

export default ComputerAccessories
