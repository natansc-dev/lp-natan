import { ReactNode } from 'react'
import Link from 'next/link'
import * as S from './styles'

type ButtonProps = {
  url: string
  label: string
  icon: ReactNode
  bg: string
  color: string
}

export const Button = ({ label, icon, url, bg, color }: ButtonProps) => {
  return (
    <Link href={url}>
      <S.Button background={bg} color={color}>
        <span>
          {icon}
          {label}
        </span>
      </S.Button>
    </Link>
  )
}
