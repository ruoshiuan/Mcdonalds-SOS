import styled from 'styled-components'

export const FooterContent = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 160px;
  font-size: 16px;
  color: #6A5959;
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: #f8f8f8;
`

export const FooterTop = styled.div`
  display: flex;
  border-bottom: 1px solid #d8d8d8;
  padding: 10px 0;
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`

export const FooterLink = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 900px) {
    width: 100%;
    padding: 0;
    justify-content: flex-end;
    height: 60px;
  }
`

export const FooterText = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  width: 50%;
  @media (max-width: 900px) {
    width: 100%;
    padding: 0;
    margin: 0;
    font-size: 14px;
  }
`

export const FooterIcon = styled.div`
  margin: 0 5px;
  font-size: 40px;
  @media (max-width: 900px) {
    font-size: 30px;
  }
`

export const FooterBottom = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  color: #666;
`

export const TriangleAlert = styled.div`
  color: #666;
  font-size: 16px;
  padding: 0 5px;
  @media (max-width: 900px) {
    color: #666;
    font-size: 20px;
    padding: 0 5px;
  }
`
