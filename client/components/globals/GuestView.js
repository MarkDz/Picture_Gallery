import styled from 'styled-components'
import img from './images/background.jpg'

const GuestView = styled.header`
  min-height: 100vh;
  background: url(${img}) center/cover no-repeat;
  background-size: 120%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default GuestView
