import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function MyList() {
    const [myList, setMyList] = useState([])
    const [loading, setLoading] = useState(true)
    const BASE_URL = 'https://66a8c5a7e40d3aa6ff595ada.mockapi.io'

    async function fetchMyList() {
        try {
            setLoading(true)

            const res = await axios.get(`${BASE_URL}/myList`)
            setMyList(res.data)

            setLoading(false)
        } catch (error) {
            console.log('error', error);
        }
    }
    async function deleteMyList(id) {
        try {
            await axios.delete(`${BASE_URL}/myList/${id}`)
            fetchMyList()
        } catch (error) {
            console.log('error', error);
        }
    }

    useEffect(() => {
        fetchMyList()
    }, [])

    return <>
        {loading &&
            <div>
                Loading...
            </div>
        }
        {!loading &&
            <div>
                {
                    myList.map((x, index) =>
                        <div key={index}>
                            {x.id} {x.name} status: {x.status.toString()}
                            <Link to={`/myList/${x.id}`}>
                                <button >Edit</button>
                            </Link>
                            <button onClick={async () => {
                                await deleteMyList(x.id)
                            }}>Delete</button>
                        </div>
                    )
                }
            </div>
        }
    </>

}