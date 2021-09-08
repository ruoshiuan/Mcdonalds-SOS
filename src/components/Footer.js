import React from 'react'
import { FooterContent, FooterTop, FooterLink, FooterText, FooterIcon, FooterBottom, TriangleAlert } from '../style/footerStyles'
import { Icon } from '@iconify/react'
import facebookWithCircle from '@iconify-icons/entypo-social/facebook-with-circle'
import youtubeWithCircle from '@iconify-icons/entypo-social/youtube-with-circle'
import instagramWithCircle from '@iconify-icons/entypo-social/instagram-with-circle'
import exclamationCircle from '@iconify-icons/fa-solid/exclamation-circle'

const Footer = () => {
  return (
    <>
      <FooterContent>
        <main>
          <FooterTop>
            <FooterLink>
              <FooterIcon><Icon icon={ facebookWithCircle } /></FooterIcon>
              <FooterIcon><Icon icon={ youtubeWithCircle } /></FooterIcon>
              <FooterIcon><Icon icon={ instagramWithCircle } /></FooterIcon>
            </FooterLink>
            <FooterText>
              <div>官方網站</div>
              <div>24hr歡樂送</div>
              <div>麥當勞報報</div>
              <div>自助點餐</div>
            </FooterText>
          </FooterTop>
          <FooterBottom>
            <TriangleAlert><Icon icon={ exclamationCircle } /></TriangleAlert>
            <p>This is a copy work of McDonald’s Japan mobile ordering application, without any purpose of profit.</p>
          </FooterBottom>
        </main>
      </FooterContent>

    </>
  )
}

export default Footer
