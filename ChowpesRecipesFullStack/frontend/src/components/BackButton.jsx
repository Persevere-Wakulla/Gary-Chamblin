// import { Link } from 'react-router-dom';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
  type="button"
  className="backBtn btnStyle"
  onClick={() => navigate('/recipes')}
>
  👈Back
</button>
    </>
  )
}

// const BackButton = ({ destination = '/'}) => {
//   return (
//     <div>
//         <Link to={destination}>
//             <h1 className='text-center'>👈</h1>
//         </Link>
//     </div>
//   )
// }

export default BackButton