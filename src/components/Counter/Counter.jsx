// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from '../../Redux/CounterReducer/CounterReducer.jsx'

// export function Counter() {
//     const count = useSelector((state) => state.value)
//     const dispatch = useDispatch()


//     return (
//         <div>
//             <div className='py-5'>
//                 <button
//                     aria-label="Decrement value"
//                     onClick={() => dispatch(increment())}
//                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//                 >
//                     Increment
//                 </button>
//                 <span className='py-2 px-2 '>{count}</span>
//                 <button
//                     aria-label="Decrement value"
//                     onClick={() => dispatch(decrement())}
//                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//                 >
//                     Decrement
//                 </button>
//             </div>
//         </div >
//     )
// }

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { getMovie } from '../../Redux/CounterReducer/CounterReducer.jsx'


export function Counter() {
    const movie = useSelector((state) => state.listMovie)
    const dispatch = useDispatch()

    return (
        movie && movie.map((movieUpcoming, index) => {
            let { poster_path, title, release_date } = movieUpcoming
            return <div className='group relative' key={index}>
                <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-96'>
                    <img
                        src={`https://image.tmdb.org/t/p/w500` + poster_path}
                        alt=''
                        className='h-full w-full object-cover lg:h-full lg:w-full'
                    />
                </div>
                <div className='h-15'>
                    <p className='text-xl text-blue-500 font-bold py-3'>{title.length > 30 ? title.slice(0, 25) + '...' : title}</p>
                </div>
                <div className='flex justify-between pb-1 text-gray-100' >
                    <span >{release_date}</span>
                    <span>120m</span>
                </div>
                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm py-2.5 text-center mr-2 mb-2 w-full">View Detail</button>
            </div>
        })
    )
}