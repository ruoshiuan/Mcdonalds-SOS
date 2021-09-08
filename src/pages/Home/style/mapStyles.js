import styled from 'styled-components'
export const Myplace = styled.button`
  border-radius: 2px;
  padding: 10px 20px;
  font-weight: 500;
  border: none;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
  background-color: #C50406;
  color: #fff;
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
  @media (max-width: 600px) {
    width: 80px;
    padding: 10px;
  }
`
export const CompassIcon = styled.div`
  font-size: 18px;
  padding: 5px;
  color: #fff;
`
export const OverDistance = styled.span`
  color: #DA0406;
`
