import { parseISO, format } from 'date-fns'
import pt from 'date-fns/locale/pt-BR';
type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'dd MMMM, yyyy', {locale : pt})}</time>
}

export default DateFormatter
