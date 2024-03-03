import dynamic from 'next/dynamic'
import React from 'react'

const NotFound = dynamic(() => import('@/components/notFound/NotFound'))

const NotFoundPage = () => {
  return (
    <>
        <NotFound/>
    </>
  )
}

export default NotFoundPage