import React, { useEffect, useState } from 'react'
import { PostInfo } from './PostInfo'
import Loding from '../../custom-components/Loding'



export const UserPost = () => {

    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [isLoginng, setIsLoding] = useState(false)

    
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

    const onChengeUser = (e) => {
        setIsLoding(true)
        // console.log(e.target.value, "valuee")
        const userId = e.target.value
        const apiUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then((data) => {
                setPosts(data)
                setIsLoding(false)

            },
                (error) => {
                    alert("ok")
                    setIsLoding(false)
                }

            )

    }

   

    return (
        <div className="card">
            <div className="card-header">لیست پست های  گذاشته شده توسط کاربران</div>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <label>کاربر مورد نظر را انتخاب کن: </label>
                        <select className="form-control" onChange={(e) => onChengeUser(e)} >
                            <option>انتخاب کنید</option>
                            {users.map(item=> <option key={item.id} value={item.id}> {item.name}</option>)}
                            
                        </select>
                    </div>
                </div>
                <div className="row">
                    {isLoginng ? <Loding/> : posts.map(item => <PostInfo key={item.id} info={item} />)}
                </div>
              

            </div>
        </div>
    )
}
