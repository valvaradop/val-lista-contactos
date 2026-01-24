import { useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const [list, setList] = useState([])

	async function getContacts() {
		try {
			let response = await fetch("https://playground.4geeks.com/contact/agendas?offset=0&limit=100")
			let data = await response.json()
			setList(data);
		} catch (error) {
			console.log(error)
		}
	}


return (
	<div className="text-center mt-5">
		<h1>Lista de Contactos</h1>
		<p>
			<img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzS5SGW4D930N9orNlYuwrgzufp-n0fyZDHA&s"} />
		</p>
		<Link to={"/form"}>
			<button>Agregar nuevo contacto</button>
		</Link>
		<button onClick={getContacts}>Obtener todos los contactos</button>

		<ul>

			{
				list.map((e) => {
					return (
						<Link to={`/profile/${e.id}`}>
							<li>{e.name}</li>
						</Link>

					)
				})
			}
		</ul>
	</div>
);
	};