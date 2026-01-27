import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Profile = () => {
    const {store, dispatch} =useGlobalReducer()
    const { id } = useParams()
    const [list, setList] = useState([])
    const [user, setUser] = useState(null)

    async function obtenerPerfil() {
         
		try {
			let response = await fetch(`https://playground.4geeks.com/contact/agendas/val_test01/contacts/${id}`)
			let data = await response.json()
		setList(data.contacts); 
		console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

    obtenerPerfil()

    
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
                        <h5>{user.address}</h5>

                    </div>
                </div>
                ) : (<h1>Loadinggggg</h1>)}


        </div>
    )

}