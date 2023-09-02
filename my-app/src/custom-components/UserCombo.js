import React, {useState, useEffect} from 'react'

export const UserCombo = ({ onChengeUser }) => {
    const [users, setUsers] = useState([])
 


    useEffect(() => {
        getUsers()
    }, []);


    const getUsers = () => {
        const apiUrl = "https://jsonplaceholder.typicode.com/users";
        fetch(apiUrl)
            .then(response => response.json())
            .then((data) => {
                setUsers(data);
            },
                (error) => {
                    alert('error in get users');
                })
    }

  

    return (
        <div className="col">
            <label>کاربر مورد نظر : </label>
            <select className="form-control" onChange={(event) => onChengeUser(event.target.value)}  >
                <option>انتخاب کنید</option>
                {users.map(user => <option key={user.id} value={user.name}>{user.name} </option>)
                }
            </select>
        </div>
    )
}

