import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
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

  useEffect(() => {
    axios.get(`http://localhost:9000/libraries/role`).then((res) => {})
  }, []);

  return (<>
            {/* {library.name} */}
            <ProfileLibrary library={library} />
            <Outlet/>
          </>
  )
}
