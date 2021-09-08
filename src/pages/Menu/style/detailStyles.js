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

export const DetailBox = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  z-index: 20;
  background-color: #fff;
  color: #6A5959;
  padding: 10px 20px;
  text-align: center;
  border-radius: 5px;
  width: 450px;
  box-shadow: 0 0 5px rgba(255,255,255,0.2);
  transform: translate(-50%,-40%);
  user-select: none;
  @media (max-width: 600px){
    width: 300px;
  }
`

export const Description = styled.div`
  font-size: 14px;
  text-align: left;
`

export const Title = styled.div`
  font-size: 20px;
  line-height: 45px;
`

export const CloseIcon = styled.div`
  float: right;
  font-size: 20px;
  cursor: pointer;
  align-self: flex-end;
`

export const CountBar = styled.div`
  display: flex;
  flex-direaction: column;
  justify-content: center;
  align-item: center;
  font-size: 22px;
  padding: 5px;
`

export const CountIcon = styled.div`
  margin: 0 20px;
  cursor: pointer;
`

export const Button = styled.button`
  border-radius: 2px;
  padding: 10px 20px;
  font-weight: 500;
  border: none;
  margin: 10px 0;
  background-color: #FFBB0F;
  color: #222;
  cursor: pointer;
`
