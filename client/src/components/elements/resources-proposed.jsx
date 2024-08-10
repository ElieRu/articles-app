import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const ResourcesProposed = ({resourceId}) => {
    const [resources, setResources] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:9000/resources-proposed`, {
            params: {
                resourceId: resourceId
            }
        }).then((res) => {
            setResources(res.data)
            console.log(res.data)
        })
    }, [resourceId]);

  return (
    <div className='row'>
        {resources.map((resource, i) => <div key={i} className='col-6 col-md-12' style={{paddingBottom: '15px'}}>
            <div className='border rounded p-2' style={{overflow: 'hidden'}}>
                <div className='d-flex align-items-center'>
                    <Link to={`/libraries/${resource.library[0]._id}`}>
                        <img src={'/assets/img/library.jpg'} style={{width: '40px', height: '40px', marginRight: '10px', borderRadius: '100%'}} />
                    </Link>
                    <div className='d-flex flex-column' style={{marginBottom: '5px'}}>
                        <span className='text-capitalize'>{resource.title}</span>
                        <span className='text-capitalize' style={{fontSize: '13px'}}>{resource.gender}</span>
                    </div>
                </div>
                <Link to={`/libraries/${resource.library[0]._id}/description?resourceId=${resource._id}&title=${resource.title}&author=${resource.author}&volume=${resource.volume}&gender=${resource.gender}&editor=${resource.editor}&language=${resource.language}&url=${resource.url}&resume=${resource.resume}`}>
                    <img className='rounded' style={{height: '200px'}} src={'/assets/img/default-cover.webp'} width={"100%"} />
                </Link>
            </div>
        </div>)}
    </div>
  )
}
