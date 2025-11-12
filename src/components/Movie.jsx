import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, 'users', `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.movie_id,
          title: item.title,
          img: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
        }),
        // img -> backdrop_path
      });
    } else {
      alert('Please log in to save a movie');
    }
  };

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
      <img
        className='w-full h-auto block'
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
          {item?.title}



        </p>
        <p onClick={saveShow}>

          <p className="absolute top-4 left-4 flex items-center gap-1 text-gray-300">
            <FaStar />
            <span><b>Predicted:</b> {item?.predicted_rating}</span>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Movie;
