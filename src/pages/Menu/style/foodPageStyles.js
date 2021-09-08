import styled from 'styled-components'

export const Subtitle = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ResetButton = styled.button`
  align-self: center;
  width: 100px;
  padding: 10px;
  border: 1px solid #222;
  background-color: #fff;
  outline: none;
  cursor: pointer;
  border-radius: 2px;
  margin: 5px;
  @media (max-width: 600px){
    font-size: 12px;
    width: 50px;
  }
`

export const MenuBar = styled.div`
  font-size: 22px;
  color: #6A5959;
  margin-top: 30px;
  border-bottom: 1px solid #6A5959;
  overflow: hidden;
  display: flex;
`

export const Title = styled.div`
  text-align: center;
  width: 120px;
  padding: 10px 0;
  margin-right: 10px;
  cursor: pointer;
`

export const SelectedTitle = styled.div`
  text-align: center;
  width: 120px;
  padding: 10px 0;
  margin-right: 10px;
  cursor: pointer;
  border-bottom: 5px solid #C50406;
`

export const Bottom = styled.div`
  background-color: #E1DDDD;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 10;
`
export const BottomBar = styled.div`
  height: 70px;
  width: 1100px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  left: 0;
  @media (max-width: 1600px){
    width: 80%;
  };
`

export const Cart = styled.div`
  display: flex;
  flex-direction: row;
  color: #222;
`

export const CartIcon = styled.div`
  font-size: 40px;
  @media (max-width: 600px){
    font-size: 35px;
  }
`

export const ItemCount = styled.div`
  font-size: 20px;
  width: 30px;
  height: 30px;
  padding: 5px;
  background-color: #FFBB0F;
  border-radius: 50px;
  text-align: center;
  align-self: center;
  justify-self: center;
  @media (max-width: 600px){
    font-size: 18px;
    padding: 2px;
  }
`

export const ItemTotal = styled.div`
  margin-left: 50px;
  font-size: 28px;
  display: flex;
  justify-contents: center;
  align-items: center;
  @media (max-width: 600px){
    margin-left: 30px;
    font-size: 25px;
  }
`

export const Button = styled.button`
  border-radius: 2px;
  padding: 10px 20px;
  font-weight: 500;
  border: none;
  font-size: 16px;
  background-color: #FFBB0F;
  color: #222;
  cursor: pointer;
  float: right;
  @media (max-width: 600px){
    border-radius: 2px;
    padding: 10px 15px;
    font-weight: 500;
    font-size: 16px;
  }
`
