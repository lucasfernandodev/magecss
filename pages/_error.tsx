import ErrorTemplate from '@/components/Templates/Error'
import { NextPageContext } from 'next'

type Props = {
  statusCode: string;
}
const Error = ({ statusCode } : Props) => {
  return <ErrorTemplate code={statusCode}/>
}

Error.getInitialProps = ({ res, err } : NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error