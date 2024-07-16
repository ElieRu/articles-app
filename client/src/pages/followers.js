import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import EmptyItems from '../components/blocks/empty-items';
import { FollowersItems } from '../components/elements/followers-items';
import { useAuth0 } from '@auth0/auth0-react'

export const Followers = () => {
  const {id} = useParams()
  const [followers, setFollowers] = useState([])
  
  useEffect(() => {
    axios.get(`http://localhost:9000/followers/${id}`).then((res) => {
      setFollowers(res.data)
    })
  }, [id]);

  const {user} = useAuth0()
  const [role, setRole] = useState(false)
  useEffect(() => {
    axios.get(`http://localhost:9000/role`, {
      params: { userId: user?.sub, libraryId: id }
    }).then((res) => {
      setRole(res.data)
    })
  }, [user, id]); 

  const updateItems = (items) => {
    setFollowers(items)
  }

  return (
    <div>
      {followers.length == 0 && <EmptyItems src={'/assets/img/empty.png'}></EmptyItems>}
      {followers.length > 0 && <FollowersItems followers={followers} updateItems={setFollowers} role={role} />}
        {/* Followers
        <ul>
          <li>loading...</li>
          <li>Empty lists</li>
          <li>Lists, Pagination and Search</li>
          <li>Link to user profile</li>
        </ul> */}
    </div>
  )
}
