import { useParams } from "react-router-dom";

function ShowWeatherPage() {
    
    const {location} = useParams()

    return <>sprawdzasz: {location}</>
}

export default ShowWeatherPage