'use client'
import React, { useEffect, useState } from 'react'

function Page({ params }) {
    const movieId = params.movieId
    const [movieUrl, setMovieUrl] = useState(null)
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    };
    useEffect(() => {
        fetch('https://vidsrc.pro/embed/movie/' + movieId, options)
            .then(response => {
                console.log('response response', response);
                if (response.ok) {
                    setMovieUrl(response.url)
                }
            })
            .catch(err => console.error(err));


    }, [])
    return (
        <div className='flex flex-col justify-center items-center gap-10'>
            <h1>Movie ID : {movieId}</h1>
            {movieUrl ?
                <iframe
                    src={movieUrl}
                    allowFullScreen
                    width={1000}
                    height={500}
                    referrerPolicy="origin"
                />
                :
                "this Movie is not avilable"
            }

        </div>)

}


export default Page
