import React from 'react'
import { BlackBackground, LoadingBox, DotBox, Dot } from './style/loadingStyles'
const LoadingEffect = () => {
  return (
    <>
    <BlackBackground />
    <LoadingBox>
      <h3>訂單處理中，請稍候...</h3>
      <DotBox>
        <Dot />
        <Dot />
        <Dot />
      </DotBox>
    </LoadingBox>
    </>
  )
}

export default LoadingEffect
