import React from 'react'

const NoSSR: React.FC = (props) => {
  return <>{props.children}</>
}

export default NoSSR;