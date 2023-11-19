import { Minus, Plus } from 'phosphor-react'
import { IconWrapper, InputContainer } from './styles'

interface AmountInputProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function AmountInput({
  quantity,
  onIncrease,
  onDecrease,
}: AmountInputProps) {
  return (
    <InputContainer>
      <IconWrapper disabled={quantity <= 1}>
        <Minus size={14} weight="fill" onClick={onDecrease} />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper>
        <Plus size={14} weight="fill" onClick={onIncrease} />
      </IconWrapper>
    </InputContainer>
  )
}
