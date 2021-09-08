import styled, { keyframes } from 'styled-components'

export const BlackBackground = styled.div`
  z-index: 11;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`
export const LoadingBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 20;
  width: 250px;
  height: 200px;
  background-color: #fff;
  color: #6A5959;
  border-radius: 5px;
  transform: translate(-50%,-60%);
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 10px 0 #C50406;
`

export const DotBox = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const MoveDot = keyframes`
0%, 80%, 100%{
  transform: scale(0)
}
40% {
  transform: scale(1)
}
`

export const Dot = styled.div`
  width: 20px;
  height: 20px;
  background-color: hsl(359, 96%, 39%);
  border-radius: 50px;
  animation: 1.5s ${MoveDot} infinite ease-in-out both;
  &:nth-child(2){
    animation-delay: 0.20s;
  }
  &:nth-child(3){
    animation-delay: 0.30s;
`
