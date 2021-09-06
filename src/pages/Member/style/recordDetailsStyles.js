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
export const RecordCard = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  z-index: 20;
  background-color: #fff;
  color: #6A5959;
  padding: 0px 20px;
  border-top: 10px solid #fff;
  border-bottom: 10px solid #fff;
  border-radius: 5px;
  width: 450px;
  height: 400px;
  overflow-y: scroll;
  box-shadow: 0 0 5px rgba(255,255,255,0.8);
  transform: translate(-50%,-40%);
  user-select: none;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    position: fixed;
    top: 40%;
    left: 50%;
    z-index: 20;
    width: 300px;
    height: 400px;
    transform: translate(-50%,-40%);
  }
`
export const RecordCardTop = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 2px dotted #ddd;
  line-height: 30px;
`

export const TopTitle = styled.div`
  font-size: 22px;
  padding: 5px 0;
`

export const Span = styled.span`
  background-color:#C50406;
  color: #fff;
  padding: 0 5px;
  margin-right: 5px;
`

export const Table = styled.table`
  border-bottom: 1px solid #ccc;
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
  background-color: #C50406;
  padding: 10px;
  color: #fff;
  @media (max-width: 600px) {
    border: none;
    display: none;
    width: 1px;
  }
`

export const TableR = styled.tr`
  background-color: #fff;
  border-bottom: 1px solid #C50406;
  @media (max-width: 600px) {
    border-bottom: 3px solid #C50406;
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

export const Total = styled.div`
  align-self: flex-end;
  font-size: 20px;
  padding: 20px;
  margin: 10px;
`

export const Button = styled.button`
  align-self: center;
  cursor: pointer;
  background-color: #222;
  border: none;
  color: #fff;
  border-radius: 2px;
  padding: 10px 30px;
  font-size: 16px;
  &:before {
    content: '✘';
    padding-right: 5px;
  }
`
