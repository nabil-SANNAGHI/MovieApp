'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [searchResult, setSearchResult] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTNiNzAzMDJiZTZhNTQzMGIwMmQwNTU1YTBhMWNkMyIsIm5iZiI6MTcyMzM3NzE3Mi4yOTkzNDYsInN1YiI6IjY2YjhhMjg3ZmUyNGZlODUwNGY2ZWQwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.96km-fq_eKM6lBIoKo8yLPE848BcZBju6ZPps2T1DVY'
    }
  };
  console.log('searchResult', searchResult);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/search/movie?query=fast&include_adult=false&language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => {
        setSearchResult(response.results)
        return response.results
      })
      .catch(err => console.error(err));


  }, [])
  return (
    <div className="flex flex-wrap">
      {
        searchResult.map((result) => {
          const img = "https://image.tmdb.org/t/p/w500" + result.poster_path
          return (
            <div>
              <p>id : {result.id} </p>
              <p>Titile : {result.title}</p>
              <p><Image width={400} height={500} src={img}></Image></p>
              <p><Link href={"/movie/" + result.id}> what here ...</Link></p>
            </div>
          )
        })
      }

    </div>
  );
}
