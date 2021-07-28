import style from './style.module.css';
import DateFormatter from '../DateFormatter';
import Label from '../../Label';


const PublishTime = ({data} : {data : string}) => {
    return(
        <Label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <rect x="4" y="5" width="16" height="16" rx="2"></rect>
          <line x1="16" y1="3" x2="16" y2="7"></line>
          <line x1="8" y1="3" x2="8" y2="7"></line>
          <line x1="4" y1="11" x2="20" y2="11"></line>
          <rect x="8" y="15" width="2" height="2"></rect>
        </svg>
        <span>
          Publicado em <DateFormatter dateString={data} />
        </span>
      </Label>
    )
};

export default PublishTime;