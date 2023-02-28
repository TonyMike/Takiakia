import { inputMethodProps } from '../@types/types'
import InputText from './InputText'
import TKSelect from './TKSelect'

const InputMethod = ({ method, placeholder }: inputMethodProps) => {
  const result =
    method === 'select' ? (
      <TKSelect placeholder={placeholder} />
    ) : (
      <InputText placeholder={placeholder} />
    )

  return result
}

export default InputMethod
