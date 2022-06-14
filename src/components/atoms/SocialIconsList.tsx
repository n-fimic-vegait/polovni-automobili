import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from 'react-icons/fa'

const SocialIconProps = {
  size: '1.5em',
  className: 'm-2 hover:opacity-50 cursor-pointer',
  color: 'lightgray',
}

export const SocialIconsList = () => {
  return (
    <>
      <a href='/'>
        <FaYoutube {...SocialIconProps} />
      </a>
      <a href='/'>
        <FaInstagram {...SocialIconProps} />
      </a>
      <a href='/'>
        <FaTwitter {...SocialIconProps} />
      </a>
      <a href='/'>
        <FaFacebook {...SocialIconProps} />
      </a>
      <a href='/'>
        <FaLinkedin {...SocialIconProps} />
      </a>
    </>
  )
}
