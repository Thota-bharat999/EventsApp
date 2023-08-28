import './index.css'

const EventItem = props => {
  const {evenItemDetails, setEventRegisteredId, isActive} = props
  const {id, imageUrl, name, location} = evenItemDetails
  const className = isActive ? 'event-image active' : 'event-image'
  const onClickButton = () => {
    setEventRegisteredId(id)
  }
  return (
    <li className="item-container">
      <button className="button" type="button" onClick={onClickButton}>
        <img src={imageUrl} alt="event" className={className} />
      </button>
      <p className="name-of-the-dance">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
