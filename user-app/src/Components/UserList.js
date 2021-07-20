import { useEffect, useState } from "react"
import axios from "axios"
export const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const promise = axios.get("http://localhost:4200/users")
        promise.then((response) => {
            setUsers(response.data)
        })
    }, [])
    return <div>
        <table className="table">
            <thead>
                <tr><th>First Name</th><th>Age</th></tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>
                            {user?.name}
                        </td>
                        <td>
                            {user?.age}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
}
