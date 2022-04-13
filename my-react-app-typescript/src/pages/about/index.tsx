import React from 'react'
import {RenderDescComponent} from '../../components/Box';
import './index.scss'
export const About = () => {

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
    <div className={'container'}>
      <div className={'flex-wrap'}>
          {
            comList.map( v => <RenderDescComponent style={{ flex: '0 0 calc(33% - 20px)'}}>
              <div>{v.name}</div>
            </RenderDescComponent>)
          }

        </div>
      <div className={'flex-wrap'}>
        {
          comList.map( v => <RenderDescComponent style={{ flex: '0 0 calc(50% - 20px)'}}>
            <div>{v.name}</div>
          </RenderDescComponent>)
        }

      </div>
    </div>

  )
}

