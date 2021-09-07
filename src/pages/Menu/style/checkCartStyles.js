import styled from 'styled-components'

export const BlackBackground = styled.div`
  z-index: 11;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`

export const CartBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 20;
  height: 550px;
  background-color: #fff;
  color: #6A5959;
  border-radius: 5px;
  min-width: 800px;
  box-shadow: 0 0 5px rgba(255,255,255,0.2);
  transform: translate(-50%,-50%);
  user-select: none;
  @media (max-width: 1200px){
    min-width: 600px;
  }
  @media (max-width: 900px){
    min-width: 450px;
  }
  @media (max-width: 600px){
    min-width: 260px;
    height: 515px;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  height: 500px;
  @media (max-width: 600px){
    margin: 10px;
  }
`

export const Title = styled.div`
  font-size: 25px;
  margin: 20px;
  align-self: start;
  @media (max-width: 600px){
    font-size: 20px;
  }
`

export const Cart = styled.div`
  min-width: 800px;
  border-radius: 5px;
  margin: 10px;
  border: 1px solid #D8D8D8;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  height: 400px;
  @media (max-width: 1200px){
    min-width: 600px;
  }
  @media (max-width: 900px){
    min-width: 450px;
  }
  @media (max-width: 600px){
    min-width: 260px;
    height: 515px;
  }
`

export const Alert = styled.div`
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  background-color: #eee;
  padding: 10px;
  opacity: 0.5;
`
export const Item = styled.div`
  padding: 10px;
  margin: 5px;
  border-bottom: 1px solid #D8D8D8;
`

export const ItemTitle = styled.div`
  font-size: 20px;
`

export const Quantity = styled.span`
  float: right;
  padding: 0 10px;
`

export const ItemTotal = styled.div`
  font-size: 22px;
`

export const RemoveIcon = styled.div`
  float: right;
  font-size: 22px;
  cursor: pointer;
  color: #C50406;
  padding: 0 10px;
`

export const Total = styled.span`
  font-size: 25px;
  align-self: start;
  margin: 20px;
`

export const Bottom = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
`

export const MealButton = styled.button`
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #222;
  border-radius: 2px;
  padding: 10px 30px;
  font-weight: 500;
  font-size: 16px;
  @media (max-width: 600px){
    display: none;
  }
`

export const OrderButton = styled.button`
  border-radius: 2px;
  padding: 10px 30px;
  font-weight: 500;
  margin-left: 50px;
  font-size: 16px;
  cursor: not-allowed;
  background-color: #eee;
  color: #f24;
  border: none;
  @media (max-width: 600px){
    margin-left: 0;
  }
`

export const StopButton = styled.button`
  cursor: pointer;
  background-color: #FFBB0F;
  border: 1px solid #FFBB0F;
  border-radius: 2px;
  padding: 10px 30px;
  font-weight: 500;
  margin-left: 50px;
  font-size: 16px;
  @media (max-width: 600px){
    margin-left: 0;
  }

`
