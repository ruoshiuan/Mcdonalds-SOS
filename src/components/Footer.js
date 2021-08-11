import React from 'react'
import '../css/footer.css'
import { Icon } from '@iconify/react'
import facebookWithCircle from '@iconify-icons/entypo-social/facebook-with-circle'
import youtubeWithCircle from '@iconify-icons/entypo-social/youtube-with-circle'
import instagramWithCircle from '@iconify-icons/entypo-social/instagram-with-circle'
import exclamationCircle from '@iconify-icons/fa-solid/exclamation-circle'

const Footer = () => {
  return (
    <>
      <footer>
        <main>
          <div className="footerTop">
            <div className="footerLink">
              <Icon icon={ facebookWithCircle } className="footerIcon" />
              <Icon icon={ youtubeWithCircle } className="footerIcon" />
              <Icon icon={ instagramWithCircle } className="footerIcon" />
            </div>
            <div className="footerText">
              <div>官方網站</div>
              <div>24hr歡樂送</div>
              <div>麥當勞報報</div>
              <div>自助點餐</div>
            </div>
          </div>
          <div className="footerBottom">
            <Icon icon={ exclamationCircle } className="triangleAlert" />
            <p>This is a copy work of McDonald’s Japan mobile ordering application, without any purpose of profit.</p>
          </div>
        </main>
      </footer>

    </>
  )
}

export default Footer
