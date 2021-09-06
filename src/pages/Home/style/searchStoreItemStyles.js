import styled from 'styled-components'
import img from '../images/machouse.png'

export const Card = styled.div`
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`

export const CardContent = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  line-height: 25px;
`

export const Photo = styled.div`
  height: 200px;
  max-width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  &:before {
    content: '';
    width: 100%;
    height: 200px;
    position: absolute;
    display: block;
    z-index: -1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${img});
  }
`

export const HideInfoOff = styled.div`
  background-color: rgba(34,34,34,0.8);
  max-width: 100%;
  height: 0;
  overflow: hidden;
  transition: height ease-in 0.15s;
`

export const HideInfoOn = styled.div`
  background-color: rgba(34,34,34,0.8);
  max-width: 100%;
  overflow: hidden;
  transition: height ease-in 0.15s;
  height: 200px;
`
export const HideInfoTime = styled.div`
  padding: 15px;
  color: #fff;
  font-size: 15px;
`
export const TopInfo = styled.div`
  height: 100px;
`

export const StoreName = styled.div`
  text-overflow : ellipsis;
  overflow : hidden;
  white-space : nowrap;
  color: #5B1809;
  font-size: 16px;
  font-weight: 600;
`

export const DistanceInfo = styled.div`
  width: 95px;
  background-color: #fff;
  font-size: 14px;
  position: absolute;
  padding: 5px;
  top: 0;
  right: 10px;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 0 5px #ddd;
`

export const MapMarkerAlt = styled.span`
  padding: 0 3px;
`

export const DistanceAlert = styled.span`
  color: #DA0406;
`

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #D8D8D8;
  border-bottom: 1px solid #D8D8D8;
  padding: 10px 5px;
  margin-top: 5px;
  color: #6A5959;
  user-select: none;
`

export const IconifyIcon = styled.div`
  font-size: 25px;
  padding: 4px;
  margin: 2px;
  border: 1px solid #6A5959;
  border-radius: 4px;
`

export const SmallIcon = styled.img`
  margin: 2px;
  image-rendering: crisp-edges;
  border: 1px solid #6A5959;
  padding: 4px;
  width: 25px;
  height: 25px;
  border-radius: 4px;
`

export const OpenTimeInfo = styled.div`
  border-bottom: 1px solid #6A5959;
  margin-left: auto;
  cursor: pointer;
  color: #6A5959;
  font-size: 14px;
`

export const CloseTimeInfo = styled.div`
  border-bottom: 1px solid #DA0406;
  margin-left: auto;
  cursor: pointer;
  color: #DA0406;
  font-size: 14px;
`

export const OrderBtn = styled.button`
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 2px;
  padding: 10px 0;
  font-weight: 500;
  border: none;
  width: 90%;
  position: relative;
  font-size: 16px;
  background-color: #FFBB0F;
  color: #222;
  cursor: pointer;
`

export const NoOrderBtn = styled.button`
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 2px;
  padding: 10px 0;
  font-weight: 500;
  border: none;
  width: 90%;
  position: relative;
  font-size: 16px;
  background-color: #eee;
  color: #DA0406;
  cursor: pointer;
`
