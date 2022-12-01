import notFound from '../assets/images/notFound.png'

const NotFoundView: React.FC = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <img src={notFound} alt="404 Page Not Found" style={{ height: "768px" }} />
      </div>
    </div>
  )
}

export default NotFoundView