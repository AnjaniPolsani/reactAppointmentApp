// Write your code here
// Write your code here
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {details, toggleStar} = props
  const {id, title, date, isStarred} = details
  const formattedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
  const onStarring = () => {
    toggleStar(id)
  }
  const starUrl = !isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
  return (
    <li>
      <p>{title}</p>
      <p>Date: {formattedDate}</p>
      <button onClick={onStarring} data-testid="star" type="button">
        <img src={starUrl} alt="star" />
      </button>
    </li>
  )
}
export default AppointmentItem
