import React from 'react';
import {RenderDescComponent} from '../../components/Box';
import './index.scss'

export const Grid = () => {
  const comList = [
    {
      name: '1234'
    },
    {
      name: '1234'
    },
    {
      name: '1234'
    },
    {
      name: '1234'
    },
  ]
  return (
    <div className={'grid-container'}>
      <div className={'grid-wrap'}>
        {
          comList.map( v => <RenderDescComponent>
            <div>{v.name}</div>
          </RenderDescComponent>)
        }

      </div>
      <div className={'grid-wrap-two'}>
        {
          comList.map( v => <RenderDescComponent>
            <div>{v.name}</div>
          </RenderDescComponent>)
        }

      </div>
    </div>
  )
}
