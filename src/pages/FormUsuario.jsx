
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const FormUsuario = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");

    async function addContact(event, contact) {
        event.preventDefault()
        const newContact = {

            "name": name,
            "phone": number,
            "email": email,
            "address": address,
            
        }

        await fetch("https://playground.4geeks.com/contact/agendas/val_test01/contacts", {
            method: "POST",
            body: JSON.stringify(newContact),
            headers: { "Content-type": "application/json" }
        });
        
navigate("/");
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="text-center mb-4">
                                Agregar contacto
                            </h2>

                            <form>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Nombre y Apellido
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Valeria Alvarado"
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Dirección de Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="email@gmail.com"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Número teléfono
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="32147040"
                                        value={number}
                                        inputMode="numeric"
                                        onChange={(e) =>
                                            setNumber(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">
                                        Dirección
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Arroyo del Olivar 11"
                                        value={address}
                                        onChange={(e) =>
                                            setAddress(e.target.value)
                                        }
                                    />
                                </div>

                                <button
                                    onClick={addContact}
                                    type="submit"
                                    className="btn btn-primary w-100"
                                >
                                    Agregar Contacto
                                </button>
                            </form>

                            <Link
                                to="/"
                                className="btn btn-link w-100 mt-3"
                            >
                                Volver
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};