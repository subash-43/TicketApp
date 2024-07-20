const { faX } = require("@fortawesome/free-solid-svg-icons")
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome")

const DeleteBlock = () => {
  return (
    <FontAwesomeIcon icon={faX}  className="text-red-400 hover:text-red-200 hover:cursor-pointer"/>
  )
}

export default DeleteBlock;