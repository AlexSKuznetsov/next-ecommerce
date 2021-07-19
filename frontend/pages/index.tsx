import React from 'react'
import 'twin.macro'
import { Button } from './../components'

function HomePage() {
  return (
    <div tw="mt-4 mx-4">
      <h1>Welcome to Next.js E-commerce boilerplate!</h1>
      <Button variant="primary" isSmall>
        Test button
      </Button>
    </div>
  )
}

export default HomePage
