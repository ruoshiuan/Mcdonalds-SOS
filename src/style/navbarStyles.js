import styled from 'styled-components'

export const FixedNavbar = styled.nav`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  z-index: 10;
  max-width: 100%;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(109, 113, 114, 0.3);
`

export const NavbarContent = styled.div`
  height: 60px;
  width: 1200px;
  background-color: #fff;
  user-select: none;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 1600px) {
    width: 80%;
  }
`

export const BrandIcon = styled.img`
  margin: 10px 2px;
  width: 45px;
  height: 38px;
  align-self: center;
  @media (max-width: 600px) {
    width: 37px;
    height: 30px
  }
`
export const MainTitle = styled.h1`
  position: relative;
  font-weight: 400;
  font-size: 30px;
  flex: auto;
  margin-left: 10px;
  color: #6A5959;
  align-self: center;
  letter-spacing: 1px;
  @media (max-width: 600px) {
    font-size: 28px;
  }
`

export const Items = styled.div`
  color: #6A5959;
  cursor: pointer;
  margin: 12px;
`

export const Usercircle = styled.div`
  top: 0;
  font-size: 36px;
  transform: translateY(-2px);
  @media (max-width: 600px) {
    font-size: 34px;
  }
`
