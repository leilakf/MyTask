import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { UserCombo } from '../custom-components/UserCombo'
import { getAllAsync, insertAsync } from '../services/TodoService'


function AxiosForm() {

    const titleRef = useRef("off")
    const comptetedref = useRef(false)
    const [userId, setUserId] = useState()
    const [isLoding, setIsLoding] = useState(false)
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);


    const save = async (event) => {
        event.preventDefault()
        setIsLoding(true)
       
        const post = {
            title: titleRef.current.value,
            userId: userId,
            usercompteted: comptetedref.current.checked ? "on" : "off"

        }
        const result = await insertAsync(post)
        setIsLoding(false)
    }



    const chengeUser = (id) => {
        setUserId(id)
    }
0
// این قسمت نشد کامل کنم
    const addToList = () => {
        setItems([...items, titleRef.current.value, userId, comptetedref.current.checked ? "on" : "off"])
        titleRef.current.value = "";
    
    }

  return (
      <div className="col-6 border mb-3">

          <form onSubmit={(event) => save(event)}>
              <div className="form-group">
                  <label >عنوان : </label>
                  <input ref={titleRef} type="text" class="form-control" />
              </div>
              <div className="form-group">
                  <UserCombo onChengeUser={chengeUser} />
              </div>
              <div classname="form-group">
                  <label > تکمیل شده: </label>
                  <input type='checkbox' ref={comptetedref}   className='ml-2' />
              </div>
              <button type="submit" class="btn btn-primary" disabled={isLoding ? "disabled" : ""} onClick={addToList}>ذخیره</button>
          </form>

          <div className='row border m-3' >
              <label className='mx-2'>نمایش axios متد post :</label>

                  <ul>
                      {items.map((item) => <li key={item.id}>{item}</li>)}
                  </ul>
          </div>
      </div>
  )
}

export default AxiosForm
