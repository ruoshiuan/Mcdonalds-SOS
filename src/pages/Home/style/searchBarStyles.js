import styled from 'styled-components'
import img from '../images/banner.jpg'
export const Form = styled.form`
  display: flex;
  height: 45vh;
  margin: 20px 0;
  justify-content: center;
  align-items: center;
  position: relative;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-image: url(${img});
    background-size: cover;
    background-position: 100% 50%;
    outline: 2px solid rgba(255,255,255,0.6);
    outline-offset: -16px;
  }
  @media (max-width: 600px) {
    height: 35vh;
  }
`

export const SearchBarInput = styled.input`
  width: 80%;
  height: 60px;
  padding-left: 20px;
  font-size: 20px;
  border: 1px solid #d8d8d8;
  color: #6A5959;
  border-radius: 5px;
  background-color: rgba(255,255,255,0.85);
  position: relative;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  &:focus {
    background-color: rgba(255,255,255,0.95);
  }
  @media (max-width: 600px) {
    width: 70%;
    height: 50px;
    padding-left: 10px;
    font-size: 16px;
    border: 1px solid #d8d8d8;
    color: #6A5959;
  }
`
export const SearchIconStyle = styled.div`
  font-size: 26px;
  z-index: 5;
  margin-left: -70px;
  color: #222;
  padding: 10px;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 25px;
    margin-left: -55px;
    background-color: transparent;
    cursor: pointer;
  }
`
