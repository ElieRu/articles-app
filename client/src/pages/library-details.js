import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { ProfileLibrary } from '../components/blocks/profile-library'
import axios from "axios";

export const LibraryDetails = () => {
  const {id} = useParams()
  const [library, setLibrary] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:9000/libraries/${id}`).then((res) => {
      setLibrary(res.data);
    })
  }, []);

  return (<>
            <ProfileLibrary library={library} />
            <Outlet />
          </>
  )
}
