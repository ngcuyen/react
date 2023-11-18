import React, { useState } from 'react'

const car = [{
  id: 'car01',
  name: 'toyota',
  url: 'https://i.pinimg.com/736x/e0/e5/51/e0e551339cf64f466168b553559fde06.jpg',
  describe: 'xe 4 bánh'
}, {
  id: 'car02',
  name: 'toyota 2',
  url: 'https://i.pinimg.com/564x/db/25/79/db25793f6b845aa4428b61f252994da4.jpg',
  describe: 'xe 4 bánh'
}, {
  id: 'car03',
  name: 'toyota 3',
  url: 'https://i.pinimg.com/564x/8d/31/f5/8d31f545b2112383595b5d7ed85b8b86.jpg',
  describe: 'xe 4 bánh'
}, {
  id: 'car04',
  name: 'toyota 4',
  url: 'https://i.pinimg.com/564x/e5/29/37/e5293786a075c27776decf9750ce0f74.jpg',
  describe: 'xe 4 bánh'
}]


const UseStateLearn = () => {

  // const [state, setState] = useState({ like: 0 });
  // const [count, setCount] = useState(30);
  const [carImg, setCarImg] = useState('car01');

  let carId = car.find((x) => x.id === carImg)

  return (
    <>
      <div >
        {/* <div className="card text-left"	>
        <img className="card-img-top" src="https://picsum.photos/200/200" alt="picture" />
        <div className="card-body">
          <h4 className="card-title">Picture</h4>
          <p style={{ color: 'red' }} > {state.like} ♥</p>
        </div>
      </div>
      <span className="display-4" style={{ color: 'pink', cursor: 'pointer' }} onClick={() => {
        setState({ like: state.like + 1 })
      }}>♥</span>
      <div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => { setCount(count - 1) }}
        >-</button>
        <span>{count}</span>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => { setCount(count + 1) }}
        >+</button>
      </div> */}

        <div className="grid grid-cols-2 gap-2">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={carId.url} alt />
          </div>
          <div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      id
                    </th>
                    <th scope="col" className="px-6 py-3">
                      name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      describe
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {carId.id}
                    </th>
                    <td className="px-6 py-4">
                      {carId.name}
                    </td>
                    <td className="px-6 py-4">
                      {carId.describe}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              onClick={() => { setCarImg(car[0].id) }}
            >Light</button>
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              onClick={() => { setCarImg(car[1].id) }}
            >Dark</button>
            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={() => { setCarImg(car[2].id) }}
            >Red</button>
            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={() => { setCarImg(car[3].id) }}
            >Green</button>
          </div>
        </div>

      </div >
    </>
  )
}

export default UseStateLearn