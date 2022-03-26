import './styles.scss'
type Props = {
  text: string
}
const NotFoundUser = ({text} : Props) => {
  return (
    <div className='notfond-user'>
        <h1>{text}</h1>
        <img src="https://i.ibb.co/CVvnjvN/bored.jpg" alt="not found" />
    </div>
  )
}

export default NotFoundUser
