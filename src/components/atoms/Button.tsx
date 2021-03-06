import { FC, ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
  children?: ReactNode
}

export const Button: FC<ButtonProps> = ({
  className,
  iconLeft,
  iconRight,
  children,
}) => {
  return (
    <button className={className + ' block p-2 my-3 rounded-md'}>
      {iconLeft && <div className='inline'>{iconLeft}</div>}
      <div className='inline'>{children} </div>
      {iconRight && <div className='inline'> {iconRight}</div>}
    </button>
  )
}
