import dynamic from 'next/dynamic'
import React, { FC } from 'react'

const CardItems = dynamic(() => import('@/components/client/cardItems/CardItems'))

const Card: FC = () => {
  return (
    <section>
      <CardItems/>
    </section>
  )
}

export default Card