import { GlobalStyle } from './styles/GlobalStyle'
import { Greetings } from './components/Greetings'
import './i18n'

export function App() {
  return (
    <>
      <GlobalStyle />
      <Greetings />
    </>
  )
}