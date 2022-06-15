import { FC, ReactNode } from 'react'

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
      <a href={href} className='py-2 px-3 w-full'>
        {iconLeft} {children} {iconRight}
      </a>
    </li>
  )
}
