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
export const NoResultAlert = styled.div`
  text-align: center;
  color: #6A5959;
`
export const PaginationNum = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  user-select: none;
  padding: 10px;
`
export const PaginationNumList = styled.li`
  padding: 5px 10px;
  border: 1px solid #6A5959;
  border-radius: 2px;
  cursor: pointer;
  margin: 0 5px;
`
export const PrevBtn = styled.button`
  display: flex;
  justify-content: center;
  user-select: none;
  padding: 10px;
  background-color: white;
  border: none;
  cursor: pointer;
`
export const NextBtn = styled.button`
  display: flex;
  justify-content: center;
  user-select: none;
  padding: 10px;
  background-color: white;
  border: none;
  cursor: pointer;
`
export const DefaultIndex = styled.li`
  display: flex;
  justify-content: center;
  user-select: none;
  padding: 10px;
  cursor: pointer;
`
export const ActiveIndex = styled.li`
  display: flex;
  justify-content: center;
  user-select: none;
  padding: 10px ;
  background-color: #6A5959;
  color: #fff;
  cursor: pointer;
`
