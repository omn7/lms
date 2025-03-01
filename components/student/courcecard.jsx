import React, { useContext } from 'react';
import { assets } from '../../src/assets/assets';
import { AppContext } from '../../src/context/appContex';
import { Link } from 'react-router-dom';




function CourceCard({course}) { 

    const {currency } = useContext(AppContext)

  return (
    <Link to={'course/' + course._id} onClick={()=> scrollTo(0,0)}
    className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg'>
    <img className='w-full' src={course.courseThumbnail} alt="this" />
    <div className='p-3 text-left'>
      <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
      <p className='text-gray-500'>{course.educator.name}</p>
      <div className='flex items-center space-x-2'>
        <p>4.5</p>
        <div className='flex'>{[...Array(5)].map((_, i)=>(<img key={i} src={assets.star} alt="star" />))}
      </div>
      <p className='text-gray-500'>22</p>
      </div>
      <p className='text-base font-semibold text-gray-800'>{currency}{course.coursePrice}</p>
    </div>
    </Link>
    
  );
}

export default CourceCard;