import * as React from 'react'
import { ButtonStyle } from './Button.style'
import { theme } from '../../../styles/theme'
import { Icon } from '../Icons/Icon'

export const Button = ({
                         className,
                         children,
                         variant,
                         onClick,
                         iconName = 'discord',
                         withIcon = true,
                         ...props
                       }) => {
  return (
    <ButtonStyle
      variant={variant}
      onClick={onClick}
      className={className}
      rel="noreferrer"
      {...props}
    >
      {withIcon && <Icon name={iconName} color={theme.colors.white} />}
      {children}
    </ButtonStyle>
  )
}
