import { ReactNode } from 'react'
import * as style from './Dimmed.css'

interface Props {
  children?: ReactNode
}

export const Dimmed = ({ children }: Props) => {
  return <div className={style.container}>{children}</div>
}
