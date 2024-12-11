import { useParams } from "react-router-dom"
function User() {
    const {userId }= useParams();
    console.log(userId);
  return (
    <>
    User: {userId}
    </>
  )
}

export default User