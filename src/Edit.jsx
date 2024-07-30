import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Edit() {
    const { id } = useParams()
    const BASE_URL = 'https://66a8c5a7e40d3aa6ff595ada.mockapi.io'
    const [list, setList] = useState({
        id: '',
        name: '',
        status: ''
    })
    const [loading, setLoading] = useState(true)

    async function fetchListID(listID) {
        try {
            setLoading(true)
            const res = await axios.get(`${BASE_URL}/myList/${listID}`)
            setList(res.data)
            setLoading(false)
        } catch (error) {
            console.log('error', error);
        }
    }

    async function updateListID() {
        try {
            await axios.put(`${BASE_URL}/myList/${id}`, { name: list.name })
            alert('Update successful')
            fetchListID(id)
        } catch (error) {
            console.log('error', error);
        }
    }

    useEffect(() => {
        fetchListID(id)
    }, [id])

    function changeName(event) {
        setList((previousState) => ({
            ...previousState,
            name: event.target.value
        }))
    }

    return <>
        {loading &&
            <div>
                Loading...
            </div>
        }
        {!loading && <div>{list.id}
            <input type="text" onChange={changeName} value={list.name} />
            {list.status.toString()}
            <button onClick={updateListID}>Edit</button>
        </div>}
    </>
}