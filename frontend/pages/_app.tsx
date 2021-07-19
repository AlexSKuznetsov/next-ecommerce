import { GlobalStyles } from 'twin.macro'

interface Props {
  Component: React.FC
  pageProps: any
}

const App = ({ Component, pageProps }: Props) => (
  <div>
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
)

export default App
