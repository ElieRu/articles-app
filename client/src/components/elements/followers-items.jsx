import axios from 'axios'
import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const FollowersItems = ({followers, updateItems, role}) => {
  const {id} = useParams()
  const unFollow = (followerId) => {
    axios.post(`http://localhost:9000/followers/unfollow`, {
      params: { 
        _id: followerId,
        libraryId: id 
      }
    }).then((res) => {
      updateItems(res.data)
    })
  }

  return (
    <div>
        {followers.map((follower, i) => <div key={i} className='d-flex justify-content-between border rounded' style={{padding: '10px', marginBottom: `${i == followers.length -1 ? '-10px' : '10px'}`}}>
          <div className='d-flex align-items-center'>
            <div style={{marginRight: '15px'}}>
                <Link to={'#'}>
                    <img src={follower.user_picture}  style={{width: '40px', height: '40px', borderRadius: '100%'}} />
                </Link>
            </div>
            <div>
              <div style={{marginBottom: '-5px'}}><span style={{fontSize: '13px'}}>{follower.user_name}</span></div>
              <span style={{fontSize: '12px'}}>{follower.user_email}</span>
            </div>
          </div>
          <button disabled={role ? false : true} onClick={() => unFollow(follower._id)} className='btn btn-body border btn-sm'>Unfollow</button>
        </div>)} 
      </div>
  )
}
