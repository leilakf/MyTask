import React, { useState } from 'react';
// import "../../index.css"



export const PostInfo = ({ info }) => {
  const [comment, setComment] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const onComment = () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1/comments';
    fetch(apiUrl)
      .then(response => response.json())
      .then((data) => {
        setComment(data);
        setShowMenu(!showMenu); // toggle showMenu state
      },
        (error) => {
          alert("ok");
        });
  };

  return (
    <div className="col-md-6 p-3 ">
      <div className="card" >
        <div className="card-header bg-primary text-white pb-2  card-title " style={{ textAlign: "left" }}>
          {info.title}</div>
        <div className="card-body  justify-content-between  " style={{ height: "100px", textAlign: "left" }}>
          <p>
            {info.body}
          </p>
        </div>
        <div className="card-footer ">
          <button className=' btn-outline-primary  btn btn-outline-primary btn-lg btn-block mt-3' onClick={() => onComment()} >کامنت</button>

          {/* Conditionally render the comment table */}
          {showMenu && (
           
              <table className="table table-hover" >
                <thead>
                  <tr className='menu  '  >
                    <th className='col-1'>#</th>
                    <th className='col-1'>نام</th>
                    <th className='col-1'>ایمیل</th>
                    <th className='col-1'>متن پیام</th>
                  </tr>
                </thead>
                <tbody>
                  {comment.map(item =>
                    <tr key={item.id}>
                      <th scope="row"></th>
                      <td> {item.name}</td>
                      <td> {item.body}</td>
                      <td> {item.email}</td>
                    </tr>)}
                </tbody>
              </table>
            
          )}
        </div>
      </div>
    </div>
  )
};
