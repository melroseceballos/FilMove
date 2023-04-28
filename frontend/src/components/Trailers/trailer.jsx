import './styles.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Trailer() {
    const [trailer, setTrailer] = useState({})
    const params = useParams()

    useEffect(() => {
        async function getData() {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=50760a302380745ede7e1c3eee6ca282&language=en-US`)
            const data = await res.json()
            setTrailer(data.results[0])
        }

        getData()
    }, [params.id])

    return (
        <>
            <h1>Test</h1>
{/* 
            /// had to use chatGPT on how to retrieve this because I have looked everywhere
            // not one article about retrieving trailer key for trailer movieDBAPI */}
            <div className='trailer'>
                {!trailer || !trailer.key ? (
                    <p>No trailer available</p>
                ) : (
                    <iframe
                        title="Trailer"
                        width="1330"
                        height="524"
                        src={`https://www.youtube.com/embed/${trailer.key}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )}
            </div>
        </>
    )
}

export default Trailer
