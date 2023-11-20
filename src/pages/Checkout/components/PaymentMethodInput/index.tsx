import { InputHTMLAttributes, ReactNode } from 'react'
import { Option } from './styles'
import { useFormContext } from 'react-hook-form'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  icon: ReactNode
}

export function PaymentMethodInput({
  id,
  label,
  icon,
  ...props
}: PaymentMethodInputProps) {
  const { register } = useFormContext()
  return (
    <Option>
      <input id={id} {...props} type="radio" {...register('paymentMethod')} />
      <label htmlFor={id}>
        {icon}
        {label}
      </label>
    </Option>
  )
}
