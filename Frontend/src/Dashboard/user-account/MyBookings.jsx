import useFetchData from "../../hooks/useFetchData"
import { BASE_URL } from "../../config"
import DoctorCard from '../../components/Doctors/DoctorCard'
import Loading from "../../components/Loader/Loading"
import Error from "../../components/Error/Error"

const MyBookings = () => {

  const {data:appointments, loading, error} = useFetchData(`${BASE_URL}/users/appointments/my-appointments`)
  return (
    <div>
      
        {loading && !error && <Loading/>}

        {error && !loading && <Error errMessage={error}/>}
      
    </div>
  )
}

export default MyBookings