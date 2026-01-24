import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Profile = () => {
    const {store, dispatch} =useGlobalReducer()
    const { id } = useParams()
    const [list, setList] = useState([

        { name: "Val1", id: 1, phone: 1234567, dirección: "fhfhhfhfh" },
        { name: "Val2", id: 2, phone: 1234567, dirección: "miiaaaaau" },
        { name: "Val3", id: 3, phone: 1234567, dirección: "addadadda" }
    ])
    const [user, setUser] = useState(null)

    useEffect(() => {
        const findUser = list.find((e) => e.id === parseInt(id))
        setUser(findUser)
    }, [])
    return (
        <div>
            {store.message}
            {
                user ? (<div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Esto deberia ser un Perfil de {user.name}</h5>
                        <h5>{user.phone}</h5>
                        <h5>{user.dirección}</h5>

                    </div>
                </div>
                ) : (<h1>Loadinggggg</h1>)}


        </div>
    )

}