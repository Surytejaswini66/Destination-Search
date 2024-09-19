// Write your code here
const DestinationItem = props => {
  const {namee, image} = props
  return (
    <div>
      <li>
        <img src={image} />
        <p>{namee}</p>
      </li>
    </div>
  )
}
export default DestinationItem
