import axios from 'axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const ResourcesProposed = ({resourceId}) => {

    useEffect(() => {
        axios.get(`http://localhost:9000/resources-proposed`, {
            params: {
                resourceId: resourceId
            }
        }).then((res) => {
            console.log(res.data)
        })
    }, [resourceId]);

  return (
    <div className='row'>
        <div className='col-6 col-md-12' style={{paddingBottom: '15px'}}>
            <div className='border rounded p-2' style={{overflow: 'hidden'}}>
                <div className='d-flex'>
                    <Link to={'#'}>
                        <img src={'/assets/img/library.jpg'} style={{width: '40px', height: '40px', marginRight: '10px', borderRadius: '100%'}} />
                    </Link>
                    <div className='d-flex flex-column' style={{marginBottom: '5px'}}>
                        <span>Title</span>
                        <span style={{fontSize: '13px'}}>Gender</span>
                    </div>
                </div>
                <Link to={'#'}>
                    <img className='rounded' style={{height: '200px'}} src={'/assets/img/default-cover.webp'} width={"100%"} />
                </Link>
            </div>
        </div>
    </div>
  )
}
