import { useFormContext } from 'react-hook-form'
import { AddressFormContainer } from './styles'

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <AddressFormContainer>
      <input
        type="text"
        placeholder="CEP"
        className="cep"
        {...register('cep')}
      />
      <input
        type="text"
        placeholder="Rua"
        className="street"
        {...register('street')}
      />
      <input type="text" placeholder="Número" {...register('number')} />
      <input
        type="text"
        placeholder="Complemento"
        className="complement"
        {...register('complement')}
      />
      <input type="text" placeholder="Bairro" {...register('neightbourhood')} />
      <input type="text" placeholder="Cidade" {...register('city')} />
      <input type="text" placeholder="UF" {...register('uf')} />
    </AddressFormContainer>
  )
}
