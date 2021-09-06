import styled from 'styled-components'

export const Title = styled.div`
  color: #6A5959;
  padding: 20px 10px;
  border-bottom: 1px solid #eee;
`

export const Form = styled.form`
  color: #222;
  font-weight: 400;
  padding: 10px;
  font-size: 18px;
  @media (max-width: 600px) {
    padding: 0;
  }
`

export const SubTitle = styled.h3`
  font-weight: 400;
  color: #6A5959;
`

export const InputRadio = styled.input`
  width: 1.5em;
  height: 1.5em;
  background: #C50406;
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`

export const LabelTitle = styled.label`
  padding: 5px;
`

export const Span = styled.span`
  color: #C50406;
  font-size: 14px;
`
export const Cart = styled.div`
  min-width: 800px;
  padding: 0 20px;
  border-radius: 5px;
  border: 1px solid #D8D8D8;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  height: 390px;
  @media (max-width: 1200px) {
    min-width: 600px;
  }
  @media (max-width: 900px) {
    min-width: 450px;
    height: 350px;
    padding: 0;
  }
  @media (max-width: 600px) {
    min-width: 300px;
    height: 300px;
  }
`

export const Item = styled.div`
  padding: 10px;
  margin: 5px;
  color: #6A5959;
  border-bottom: 1px solid #D8D8D8;
`

export const ItemTitle = styled.div`
  font-size: 20px;
`

export const Quantity = styled.span`
  padding: 0 10px;
`

export const ItemTotal = styled.div`
  font-size: 22px;
  float: right;
  padding: 0 5px;
`

export const TotalPrice = styled.div`
  color: #6A5959;
  padding: 20px;
  font-weight: 500;
  font-size: 25px;
  text-align: right;
  margin-top: 20px;
  border-top: 1px solid #D8D8D8;
  @media (max-width: 600px) {
    padding: 10px 0;
  }
`

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`

export const OrderButton = styled.button`
  cursor: pointer;
  background-color: #FFBB0F;
  border: 1px solid #FFBB0F;
  border-radius: 2px;
  padding: 10px 30px;
  font-weight: 500;
  font-size: 16px;
  margin-left: 100px;
  @media (max-width: 900px) {
    margin-left: 50px;
  }
  @media (max-width: 600px) {
    margin-left: 20px;
  }
`

export const BackButton = styled.button`
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #222;
  border-radius: 2px;
  padding: 10px 30px;
  font-weight: 500;
  font-size: 16px;
`
