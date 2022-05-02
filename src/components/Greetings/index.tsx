import { Button } from '../Button'
import { Container } from './styles'
import Web3 from "web3";

var web3 = new Web3( 'https://bsc-dataseed.binance.org/');
export function Greetings() {
  console.log(web3);
  return (
    <Container>
    </Container>
  )
}
 
