import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const FormUsuario = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");

    async function addContact(event, contact) {
        event.preventDefault()
        const newContact = {
            "agendas": [

                {
                    "name": "string",
                    "phone": "",
                    "email": "",
                    "address": ""
                }

            ]
        }

        await fetch(" ", {
            method: "POST",
            body: JSON.stringify(newContact),
            headers: { "Content-type": "application/json" }
        });

    }

    return (
        <div className="formulario d-flex flex-column justify-content-center align-items-center">
            <h1>Agregar contacto a Agenda</h1>

            <form>

                <div>

                    <label>Nombre y Apellido </label>
                    <input type="text"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Valeria Alvarado"
                    />
                </div>
                <br></br>

                <div>
                    <label>Direccion de Email </label>
                    <input type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="email@gmail.com"
                    />
                </div>

                <br></br>
                <div>
                    <label>Número teléfono</label>
                    <input type="text"
                        onChange={(e) => setNumber(e.target.value)}
                        inputMode="numeric"
                        value={number}
                        placeholder="32147040"
                    />
                </div>
                <br></br>
                <div>
                    <label>Dirección</label>
                    <input type="text"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        placeholder="Arroyo del Olivar 11"
                    />


                </div>
                <br></br>
                <button onClick={addContact} type='submit'>Agregar Contacto</button>
            </form>

        </div>

    );


}