import styled, { keyframes } from 'styled-components'

const MoveUp = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`
const Appear = keyframes`
  0% {
    transform: rotate(0deg) scale(0.8)
  }
  100% {
    transform: rotate(68deg) scale(1)
  }
`
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${MoveUp} 3s both;
`

export const ThanksCorner = styled.div`
  text-align: center;
  padding: 50px;
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
  min-width: 500px;
  color: #6A5959;
  font-size: 22px;
  box-shadow: 0 5px 30px rgba(106, 89, 89,0.1);
  overflow: hidden;
  position: relative;
  &:before {
    content: "";
    width: 200px;
    height: 200px;
    left: -50px;
    top: -50px;
    z-index: -1;
    background-color: #fcecbd;
    position: absolute;
    transform: rotate(68deg);
    animation: ${Appear} 3s both;
  };
  &:after {
    content: "";
    z-index: -1;
    width: 200px;
    height: 200px;
    right: -50px;
    bottom: -10px;
    transform: rotate(68deg);
    background-color: #fffac9;
    position: absolute;
    animation: ${Appear} 3s both;
  };
  @media (max-width: 600px) {
    min-width: 250px;
    margin: 10px;
    padding: 20px;
  }
`

export const Banner = styled.img`
  padding: 10px;
  @media (max-width: 600px) {
    width: 250px;
  }
`

export const Number = styled.div`
  font-size: 50px;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 40px;
    font-weight: 600;
  }
`

export const Alert = styled.div`
  margin: 50px;
  text-align: center;
  min-width: 500px;
  padding: 10px 50px;
  color: #61392f;
  font-size: 18px;
  background-color: #fcecbd;
  border: 6px double #fff;
  @media (max-width: 600px) {
    margin: 20px 0;
    min-width: 250px;
    padding: 10px;
  }
`

export const ReceiptCorner = styled.div`
  display: flex;
  min-width: 600px;
  color: #6A5959;
  font-size: 18px;
  line-height: 30px;
  box-shadow: 0 5px 30px rgba(106, 89, 89,0.1);
  position: relative;
  @media (max-width: 600px) {
    min-width: 300px;
  }
`

export const CornerLeft = styled.div`
  width: 200px;
  @media (max-width: 600px) {
    display: none;
  }
`

export const CompleteImage = styled.img`
  width: 200px;
  height: 100%;
  @media (max-width: 600px) {
    width: 200px;
    height: 100%
  }
`

export const CornerRight = styled.div`
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    min-width: 300px;
    padding: 10px;
  }
`

export const MealImage = styled.div`
  width: 245px;
  height: 123px;
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    width: 200px;
    height: 100px;
  }
`

export const DinnerType = styled.div`
  padding: 5px;
  border-radius: 4px;
`

export const Button = styled.button`
  cursor: pointer;
  background-color: #FFBB0F;
  border: 1px solid #FFBB0F;
  border-radius: 2px;
  padding: 10px 30px;
  font-weight: 500;
  margin: 30px 0;
  font-size: 16px;
  text-decoration: none;
`
