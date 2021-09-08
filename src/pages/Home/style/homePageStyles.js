import styled from 'styled-components'

export const Subtitle = styled.div`
  display: flex;
  justify-content: space-between;
`

export const KeywordBtn = styled.button`
  border-radius: 4px;
  font-weight: 500;
  border: 1px solid #eee;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  padding: 0;
  width: 100px;
  height: 60px;
  background-color: #fff;
  color: #222;
  box-shadow: 0 0 5px rgba(0,0,0,0.15);
  @media (max-width: 600px) {
    box-shadow: none;
    width: 50px;
    height: 50px;
    border: none;
  }
`

export const SmallAlert = styled.div`
  color: #DA0406;
  font-size: 14px;
  margin-left: 0;
`
