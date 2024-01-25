import { Navigate, useNavigate } from "react-router-dom";

function NewSearchPage() {
    const navigate = useNavigate()

    return (
      <>
        <input></input>
        <button onClick={()=>{navigate('leszno')}}>Sprawdz pogode</button>
      </>
    );
}

export default NewSearchPage