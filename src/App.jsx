
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Find Talent', href: '#' },
  { name: 'Inspiration', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Go pro', href: '#' },
]
function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* <nav>
        <div>
          <button type="button" class="btn">Find Talent</button>
          <button type="button" class="btn">Inspiration</button>
          <button type="button" class="btn">Jobs</button>
          <button type="button" class="btn">Go pro</button>
          <input
            type="text"
            placeholder="Search"

          />
          <button type="button" class="btn">Login</button>
          <button type="button" class="btn">Sign up</button>
        </div>
      </nav>
      <div className="container">
        <div>
          <h1>Online movies service</h1>
        </div>
        <div>
          <img src="C:\Users\ADMIN\OneDrive\Desktop\my-project\image\download.png" alt="" />
        </div>
      </div> */}
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        <div className="lg:flex lg:gap-x-8">
          <img src="./image/Movie.jpg" alt="" width='50px' height='50px' />
        </div>
        <div class="input-group mb-3" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
        </div>
        <div className=" lg:flex lg:gap-x-8">
          <button type="button" class="btn">Login</button>
          <button type="button" class="btn">Sign up</button>
        </div>
      </nav>
      <div id="wrap" className='container' width='800' height='600'>
        <h1 style={{ textAlign: 'center', fontSize: '40px' }}>Online movies service</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
          <img src="/image/download.png" alt="" width='100px' height='100px' style={{ borderRadius: '50%' }} />
          <img src="/image/download.png" alt="" width='100px' height='100px' style={{ borderRadius: '50%', marginLeft: 'auto' }} />
          <img src="/image/download.png" alt="" width='100px' height='100px' style={{ borderRadius: '50%' }} />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <img
            src="./image/Movie.jpg"
            alt=""
            width='800'
            height='400'
          />
        </div >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 100px)',
            gap: '5px'
          }}>
            <img
              src="./image/Movie.jpg"
              alt=""
              width='100'
              height='80' />
            <img
              src="./image/Movie.jpg"
              alt=""
              width='100'
              height='80' />
            <img
              src="./image/Movie.jpg"
              alt=""
              width='100'
              height='80' />
            <img
              src="./image/Movie.jpg"
              alt=""
              width='100'
              height='80' />
          </div>
        </div>
      </div >

    </>
  )


}

export default App;
