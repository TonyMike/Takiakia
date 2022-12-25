import { linksType, nairaProps, StateProps } from '../@types/types'

export const SupportLinks: linksType[] = [
  {
    title: 'support@takiakia.com',
    href: ''
  },
  {
    title: 'Tips for safety',
    href: ''
  },
  {
    title: 'Contact Us',
    href: '/pages/contactUs'
  },
  {
    title: 'FAQ',
    href: ''
  }
]

export const AboutLinks: linksType[] = [
  {
    title: 'About Takiakia',
    href: ''
  },

  {
    title: 'Terms and Conditions',
    href: ''
  },
  {
    title: 'Privacy Policy',
    href: ''
  },
  {
    title: 'Cookie Policy',
    href: ''
  }
]

export const ResourcesLinks: linksType[] = [
  {
    title: 'Our Blog',
    href: ''
  },
  {
    title: 'Twitter',
    href: ''
  },
  {
    title: 'Takiakia on Facebook',
    href: ''
  },
  {
    title: 'Instagram',
    href: ''
  }
]

export const NavLinks: linksType[] = [
  { title: 'Home', href: '/' },
  { title: 'About us', href: '/pages/about' },
  { title: 'Blog', href: '' },
  { title: 'FAQ', href: '/pages/faq' }
]

export const NairaIcon = ({ fontSize }: nairaProps) => {
  return (
    <span
      style={{ fontWeight: 500 }}
      className={`text-[${fontSize}px] lg:text-[${fontSize + 7}]`}
    >
      &#8358;
    </span>
  )
}

export const States: StateProps[] = [
  'Abia',
  'Adamawa',
  'Akwa Ibom',
  'Anambra',
  'Bauchi',
  'Bayelsa',
  'Benue',
  'Borno',
  'Cross River',
  'Delta',
  'Ebonyi',
  'Edo',
  'Ekiti',
  'Enugu',
  'FCT - Abuja',
  'Gombe',
  'Imo',
  'Jigawa',
  'Kaduna',
  'Kano',
  'Katsina',
  'Kebbi',
  'Kogi',
  'Kwara',
  'Lagos',
  'Nasarawa',
  'Niger',
  'Ogun',
  'Ondo',
  'Osun',
  'Oyo',
  'Plateau',
  'Rivers',
  'Sokoto',
  'Taraba',
  'Yobe',
  'Zamfara'
]
