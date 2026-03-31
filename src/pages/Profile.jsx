import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
export const Profile = () => {

    
    const { store } = useGlobalReducer();
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });

    
    useEffect(() => {
        obtenerPerfil();
    }, [id]);

    useEffect(() => {
        if (user) {
            setForm({
                name: user.name,
                phone: user.phone,
                email: user.email,
                address: user.address
            });
        }
    }, [user]);

    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        await fetch(`https://playground.4geeks.com/contact/agendas/val_test01/contacts/${id}`, {
            method: "PUT",
            body: JSON.stringify(form),
            headers: { "Content-type": "application/json" }
        });

        navigate("/");
    };

    async function obtenerPerfil() {
        let response = await fetch(`https://playground.4geeks.com/contact/agendas/val_test01/contacts/${id}`);
        let data = await response.json();
        setUser(data);
    }

    
    return (
        <div className="container mt-4">
            {user ? (
                <div className="card p-3">
                    <label>Nombre</label>
                    <input name="name" value={user.name} onChange={handleChange} />
                    <label>Telefono</label>
                    <input name="phone" value={user.phone} onChange={handleChange} />
                    <label>Email</label>
                    <input name="email" value={user.email} onChange={handleChange} />
                    <label>Direccion</label>
                    <input name="address" value={user.address} onChange={handleChange} />

                    <button onClick={handleSubmit}>
                        Guardar cambios
                    </button>
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
};