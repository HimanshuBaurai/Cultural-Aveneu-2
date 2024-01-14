import React from 'react'
import { images } from '../../constants';
import './Footer.scss';

const Footer = () => {
    return (
        <footer id='footer'>
            <div className='leftFooter'>
                <h2 className='head-text' style={{color:'grey'}}>G20</h2>
                <p className='p-text'>Where the world's largest economies come together to discuss global issues and shape the future of the global economy</p>
                <a href='https://www.g20.org/en/'>
                    <img src={images.logoG20} />
                </a>
            </div>
            <div className='midFooter'>
                <h1>Code Commandoes Team</h1>
                <p>Vihaan 6.0</p>
                <p>Copyrights 2023 &copy; Himanshu Baurai</p>
            </div>
            <div className='rightFooter'>
                <h4>Follow us on</h4>
                <a href="https://www.instagram.com/himanshu_baurai?r=nametag">Instagram</a>
                <a href='https://www.facebook.com/'>Facebook</a>
                <a href='https://twitter.com/'>Twitter</a>
            </div>
        </footer>
    )
}


export default Footer