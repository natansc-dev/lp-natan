import { ReactNode } from 'react'
import Link from 'next/link'
import * as S from './styles'

type ButtonProps = {
  url: string
  label: string
  icon: ReactNode
  color: string
}

export const Button = ({ label, icon, url, color }: ButtonProps) => {
  return (
    <Link href={url}>
      <S.Button color={color}>
        <span>
          {icon}
          {label}
        </span>
      </S.Button>
    </Link>
  )
}
