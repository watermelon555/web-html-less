import React, {CSSProperties, ReactElement} from 'react';
import './index.scss'

interface Named {
  children?: ReactElement,
  className?: string,
  style?: CSSProperties
}

export const RenderDescComponent = (props: Named) => {
  const {children, className, style} = props
  return (
    <div className={`project-desc ${className}`} style={{...style}}>
      {children}
    </div>
  )
}
