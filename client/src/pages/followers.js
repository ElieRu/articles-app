import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const Followers = () => {
  const {id} = useParams()
  const [followers, setFollowers] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:9000/followers/${id}`).then((res) => {
      setFollowers(res.data)
      console.log(res.data)
    })
  }, [id]);

  return (
    <div>
        Followers
        <ul>
          <li>loading...</li>
          <li>Empty lists</li>
          <li>Lists, Pagination and Search</li>
          <li>Link to user profile</li>
        </ul>
    </div>
  )
}
