import { Coffee } from '../pages/Home/components/Card'

import coffee from '../assets/coffee.png'
import coffee1 from '../assets/Coffee-1.png'
import coffee3 from '../assets/Coffee-2.png'
import coffee2 from '../assets/Coffee-3.png'
import coffee4 from '../assets/Coffee-4.png'
import coffee5 from '../assets/Coffee-5.png'
import coffee6 from '../assets/Coffee-6.png'
import coffee7 from '../assets/Coffee-7.png'
import coffee8 from '../assets/Coffee-8.png'
import coffee9 from '../assets/Coffee-9.png'
import coffee10 from '../assets/Coffee-10.png'
import coffee11 from '../assets/Coffee-11.png'
import coffee12 from '../assets/Coffee-12.png'
import coffee13 from '../assets/Coffee-13.png'

export const coffeeMenu: Coffee[] = [
  {
    id: crypto.randomUUID(),
    imgUrl: coffee,
    tags: ['Tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: coffee1,
    tags: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: coffee2,
    tags: ['Tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa ',
    value: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: coffee3,
    tags: ['Tradicional', 'Gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: coffee4,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: coffee5,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: coffee6,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: coffee7,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: coffee8,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: coffee9,
    tags: ['Especial', 'Com Leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: coffee10,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: coffee11,
    tags: ['Especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: coffee12,
    tags: ['Especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: coffee13,
    tags: ['Especial', 'Alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: 9.9,
  },
]
