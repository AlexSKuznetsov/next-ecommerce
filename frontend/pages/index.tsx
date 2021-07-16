import React from 'react'
import Head from 'next/head'
import 'twin.macro'
import { Button } from './../components'

function HomePage() {
  return (
    <>
      <Head>
        <title>Next js E-commerce</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Next js E-commerce boilerplate with modern setup"
        />
        <meta
          name="keywords"
          content="E-commerse, Boilerplate, Next js, TypeScript,  Storybook, Tailwind, Twin.macro, Styled Components, Testing library"
        />
      </Head>
      <div tw="mt-4 mx-4">
        <h1>Welcome to Next.js E-commerce boilerplate!</h1>
        <Button variant="primary" isSmall>
          Test button!
        </Button>
      </div>
    </>
  )
}

export default HomePage
