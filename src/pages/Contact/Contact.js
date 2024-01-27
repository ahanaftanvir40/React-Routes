import { useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"


export const Contact = () => {
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate('/')
    }

    return (
        <main>
            <div className="component">Contact</div>
            <Outlet />
            <button onClick={handleSubmit}>Submit</button>
        </main>

    )
}
