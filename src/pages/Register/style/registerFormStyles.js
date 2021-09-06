import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  padding: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #6A5959;
`

export const Form = styled.form`
  display: flex;
  min-width: 360px;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`

export const Title = styled.h1`
  font-size: 25px;
  padding: 5px;
  border-bottom: 5px solid #C50406;
  position: relative;
  color: #4f4141;
  &:before {
    content: "";
    width: 300px;
    height: 1px;
    background-color: #6A5959;
    position: absolute;
    left: 50%;
    top: 110%;
    transform: translateX(-50%);
  }
`

export const Greet = styled.h2`
  font-size: 20px;
`

export const Alert = styled.div`
  font-size: 14px;
  margin-left: 0;
  font-weight: 500;
  color: #C50406;
`

export const Input = styled.input`
  margin: 5px 0;
  width: 250px;
  border: 1px solid #6A5959;
  height: 35px;
  border-radius: 2px;
  padding-left: 10px;
`

export const ErrorMsg = styled.div`
  color: #C50406;
  border-bottom: 1px solid #C50406;
`

export const Button = styled.button`
  width: 262px;
  padding: 10px 0;
  background-color: #222;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  margin: 10px;
`

export const Hint = styled.div`
  margin: 15px;
`

export const Switch = styled.span`
  cursor: pointer;
  text-decoration: #6A5959;
  &:hover {
    color: #222;
    border-bottom: 1px solid #222;
  }
`

export const GoogleButton = styled.button`
  width: 262px;
  padding: 10px 0;
  background-color: #DD4D3F;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  margin: 5px;
  font-size: 14px;
`
