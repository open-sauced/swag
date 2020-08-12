/**@jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from 'theme-ui'
import Products from './components/products'
import CartDisplay from './components/cart-display'

const fakeData = [
  {
    name: 'Sauced Sticker',
    sku: 'sku_GBJ2Ep8246qeeT',
    price: 1,
    image: 'https://user-images.githubusercontent.com/5713670/86184000-183c3780-bae8-11ea-9a73-fa4ab58a65cc.png',
    currency: 'USD'
  },
  {
    name: 'Pizzaface Sticker',
    sku: 'sku_GBJ2WWfMaGNC2Z',
    price: 1,
    image: 'https://user-images.githubusercontent.com/5713670/86184491-2f2f5980-bae9-11ea-9517-79e5ddf22740.png',
    currency: 'USD'
  }
]

const App = () => {
  return (
    <Flex sx={{ justifyContent: 'space-evenly' }}>
      <Products products={fakeData} />
      <CartDisplay />
    </Flex>
  )
}
export default App

