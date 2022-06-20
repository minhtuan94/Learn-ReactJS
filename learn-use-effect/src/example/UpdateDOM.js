import { useEffect,useState } from 'react'

function UpdateDOM() {
    const [title, setTitle] = useState('')
    useEffect(() => {
        document.title = title
    })
    return(
        <>
            <h1>Update Title</h1>
            <input 
            value={title}
            onChange={e=>setTitle(e.target.value)}
            />
        </>
    )
}

export default UpdateDOM