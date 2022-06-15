import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface SidemenuOptionProps extends React.LiHTMLAttributes<HTMLLIElement> {
  className?: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
  children: ReactNode
  href: string
}

export const SidemenuOption: FC<SidemenuOptionProps> = ({
  className,
  iconLeft,
  iconRight,
  children,
  href,
}) => {
  return (
    <li className={className + ' hover:bg-gray-600 flex items-center gap-1'}>
      <Link to={href} className='py-2 px-3 w-full'>
        {iconLeft} {children} {iconRight}
      </Link>
    </li>
  )
}
