import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {

  return (
    <footer className="footer flex justify-center bg-gray-400">
      <div className="footer-div flex justify-around items-center m-5">
        <p className="footer-text">© 2024 Katsuyama City.<br />All Rights Reserved.</p>
        <div className="social-icons-div flex space-x-2">
          <SocialIcon url="https://www.instagram.com/katsuyama_official/" />
          <SocialIcon url="https://www.facebook.com/ktSAGICHO/" />
          <SocialIcon url="https://www.youtube.com/user/ktkouhou" />
          <SocialIcon url="https://www.city.katsuyama.fukui.jp/" />
        </div>
      </div>
    </footer>
  );
}
