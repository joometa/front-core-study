import React from 'react'
import * as style from './Alert.css'
import { Text, Dimmed, Flex, Button } from './'

interface Props {
  open?: boolean
  title: React.ReactNode
  desc?: React.ReactNode
  buttonLabel?: string
  onButtonClick: () => void
}

export const Alert = ({
  open,
  title,
  desc,
  buttonLabel,
  onButtonClick,
}: Props) => {
  if (!open) return null

  return (
    <Dimmed>
      <div className={style.container}>
        <Text typography="t4" bold display="block" style={{ marginBottom: 6 }}>
          {title}
        </Text>
        {desc ? <Text typography="t7">{desc}</Text> : <></>}
        <Flex justify="flex-end">
          <Button
            onClick={onButtonClick}
            weak
            style={{ marginTop: 12, border: 'none' }}
          >
            {buttonLabel}
          </Button>
        </Flex>
      </div>
    </Dimmed>
  )
}
