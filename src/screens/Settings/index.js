import { Typography } from 'antd'
import React from 'react'
const {Title} = Typography
const Settings = () => {
  return (
    <div 
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <Title>
            Settings
        </Title>
    </div>
  )
}

export default Settings