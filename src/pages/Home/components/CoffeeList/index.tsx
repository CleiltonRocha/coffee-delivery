import { coffeeMenu } from '../../../../data/coffee'

import { CoffeeCard } from '../Card'
import { CoffeeMenu } from './styles'

export function CoffeeList() {
  return (
    <CoffeeMenu>
      {coffeeMenu.map((coffee) => {
        return <CoffeeCard key={coffee.id} coffee={coffee} />
      })}
    </CoffeeMenu>
  )
}
