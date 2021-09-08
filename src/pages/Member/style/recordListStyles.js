import styled from 'styled-components'

export const Span = styled.span`
  border-bottom: 1px solid #3983bd;
  color: #3983bd;
  cursor: pointer;
  &:hover {
    color: #C50406;
    border-bottom: 1px solid #C50406;
  }
`

export const Table = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  width: 100%;
  margin: 0;
  padding: 0;
  table-layout: fixed;
  text-align: center;
  @media (max-width: 600px) {
    border: 0;
  }
`

export const TableH = styled.th`
  background-color: #222;
  padding: 10px;
  color: #fff;
  @media (max-width: 600px) {
    border: none;
    display: none;
    width: 1px;
  }
`

export const TableR = styled.tr`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  @media (max-width: 600px) {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 10px;
  }
`

export const TableD = styled.td`
  padding: 10px;
  @media (max-width: 600px) {
    border-bottom: 1px solid #ddd;
    display: block;
    text-align: right;
    &:before {
      content: attr(data-label);
      float: left;
    }
  }
`
