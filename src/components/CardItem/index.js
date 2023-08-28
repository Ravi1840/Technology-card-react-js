// Write your code here.

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={className}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
