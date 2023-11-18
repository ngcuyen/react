import React from 'react'

const arrayImageURL = [{
    id: 'ROGUNHRYMM',
    url: '../../../image/poster1.jpg',
    alt: 'poster1',
}, {
    id: 'D3M2AK7JAC',
    url: '../../../image/poster2.jpg',
    alt: 'poster2',
}, {
    id: 'UMKGTR7M37',
    url: '../../../image/poster3.jpg',
    alt: 'poster3',
}, {
    id: '4CEP34BIEZ',
    url: '../../../image/poster4.jpg',
    alt: 'poster4',
}, {
    id: '9M0EA2OVVU',
    url: '../../../image/poster5.jpg',
    alt: 'poster5',
}];

const renderImage = () => {
    return arrayImageURL.map((x) => {
        return <div className="hidden duration-700 ease-in-out" data-carousel-item key={x.id}>
            <img src={x.url} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-full left-1/2" alt="..." />
        </div>
    });
}


function Carousel() {
    return (
        <div>
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                {/* Carousel wrapper */}
                <div className="relative h-96 overflow-hidden rounded-lg">
                    {renderImage()}
                </div>
                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to={0} />
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to={1} />
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to={2} />
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to={3} />
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to={4} />
                </div>
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

        </div>
    )
}

export default Carousel