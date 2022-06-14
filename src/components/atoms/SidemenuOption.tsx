import { FC, ReactNode } from 'react'

interface SidemenuOptionProps extends React.LiHTMLAttributes<HTMLLIElement> {
  className?: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
  children?: ReactNode
}

export const SidemenuOption: FC<SidemenuOptionProps> = ({
  className,
  iconLeft,
  iconRight,
  children,
}) => {
  return (
    <li
      className={
        className + ' hover:bg-gray-600 py-2 px-3 flex items-center gap-1'
      }
    >
      {iconLeft} {children} {iconRight}
    </li>
  )
}
