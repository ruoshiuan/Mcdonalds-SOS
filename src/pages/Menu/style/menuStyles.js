import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(260px,1fr));
  gap: 20px;
  color: #6A5959;
`

export const Item = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
  border-radius: 5px;
  cursor: pointer;
`

export const Image = styled.img`
  align-self: center;
`

export const MealName = styled.div`
  padding: 5px;
  margin: 5px;
  font-size: 18px;
`

export const Price = styled.div`
  margin: 5px;
`

export const Span = styled.span`
  font-size: 24px;
`
