import { useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const [list, setList] = useState([])

	async function getContacts() {
		try {
			let response = await fetch("https://playground.4geeks.com/contact/agendas/val_test01")
			let data = await response.json()
			setList(data.contacts);
			console.log(data)
		} catch (error) {
			console.log(error)
		}

	}

	async function deleteContact(id) {
		await fetch(`https://playground.4geeks.com/contact/agendas/val_test01/contacts/${id}`, {
			method: "DELETE",

		})
		getContacts()
	}

	async function editContact(contact) {
		const edit = {

			"name": contact.name,
			"phone": contact.number,
			"email": contact.email,
			"address": contact.address,

		}

		await fetch(`https://playground.4geeks.com/contact/agendas/val_test01/contacts/${contact.id}`, {
			method: "PUT",
			body: JSON.stringify(edit),
			headers: { "Content-type": "application/json" }
		})
		getContacts()
	}

	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-md-8">
					<h1 className="text-center mb-4">Lista de Contactos</h1>

					<div className="d-flex justify-content-between mb-4">
						<Link to="/form" className="btn btn-success">
							Agregar nuevo contacto
						</Link>

						<button
							onClick={getContacts}
							className="btn btn-outline-primary"
						>
							Obtener contactos
						</button>
					</div>

					<div className="list-group shadow-sm">
						{list.map((e) => {
							return (
								<div
									key={e.id}
									className="list-group-item d-flex justify-content-between align-items-center"
								>
									<div>
										<Link
											to={`/profile/${e.id}`}
											className="fw-bold text-decoration-none"
										>
											{e.name}
										</Link>
										<div className="text-muted small">
											{e.email}
										</div>
									</div>

									<div>
										<Link
											to={`/profile/${e.id}`}
											className="btn btn-sm btn-outline-secondary me-2"
										>
											Editar Contacto
										</Link>

										<button
											className="btn btn-sm btn-outline-danger"
											onClick={() => deleteContact(e.id)}
										>
											Borrar
										</button>
									</div>
								</div>
							);
						})}
					</div>

					{list.length === 0 && (
						<p className="text-center text-muted mt-4">
							No hay contactos aún
						</p>
					)}
				</div>
			</div>
		</div>
	);
};