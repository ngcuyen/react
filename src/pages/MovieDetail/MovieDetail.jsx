import React from 'react';

const MovieDetail = () => {
	return (
		<>
			<div className='p-5'>
				<form className='flex items-center justify-center mx-[400px]'>
					<label htmlFor='voice-search' className='sr-only'>
						Search
					</label>
					<div className='relative w-full'>
						<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
							<svg
								className='w-4 h-4 mr-2'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 20 20'
							>
								<path
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
								/>
							</svg>
						</div>
						<input
							type='text'
							id='voice-search'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Search movie.....'
							required
						/>
					</div>
					<button
						type='submit'
						className='inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					>
						Search
					</button>
				</form>
			</div>
			<div className='flex justify-center'>
				<a className='flex max-w-4xl flex-col items-center bg-white border shadow md:flex-row'>
					<img
						className='object-cover w-[40%] h-[35rem]'
						src='https://image.tmdb.org/t/p/w500/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg'
						alt
					/>
					<div className='flex flex-col p-6 leading-normal'>
						<h2 className='mb-1 text-4xl font-bold tracking-tight text-gray-900 dark:text-white'>
							SANTANA
						</h2>
						<p className='mb-4 font-normal text-gray-700 dark:text-gray-400'>
							The Dark Knight, 2008
						</p>
						<p className='mb-10 text-sm font-normal leading-6 text-gray-700 dark:text-gray-400 text-justify'>
							Here are the biggest enterprise technology acquisitions of 2021 so
							far, in reverse chronological order.Here are the biggest
							enterprise technology acquisitions of 2021 so far, in reverse
							chronological order. Here are the biggest enterprise technology
							acquisitions of 2021 so far, in reverse chronological order. Here
							are the biggest enterprise technology acquisitions of 2021 so far,
							in reverse chronological order.
						</p>

						<div className='rating mb-5'>
							<p className='mb-2 text-sm font-300 italic text-gray-500 dark:text-gray-400'>
								Rating:
							</p>
							<div className='movie-rating mb-2'>
								<div className='flex items-center'>
									<svg
										className='w-4 h-4 text-blue-500 mr-1'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 22 20'
									>
										<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
									</svg>
									<svg
										className='w-4 h-4 text-blue-500 mr-1'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 22 20'
									>
										<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
									</svg>
									<svg
										className='w-4 h-4 text-blue-500 mr-1'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 22 20'
									>
										<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
									</svg>
									<svg
										className='w-4 h-4 text-blue-500 mr-1'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 22 20'
									>
										<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
									</svg>
									<svg
										className='w-4 h-4 text-gray-300 mr-1 dark:text-gray-500'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 22 20'
									>
										<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
									</svg>
									<p className='ml-2 text-sm font-medium text-gray-500 dark:text-gray-400'>
										8.5 / 10
									</p>
								</div>
							</div>
							<div className='imdb-rating'>
								<div className='flex items-center'>
									<svg
										className='w-4 h-4 text-blue-500 mr-1'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 22 20'
									>
										<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
									</svg>
									<svg
										className='w-4 h-4 text-blue-500 mr-1'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 22 20'
									>
										<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
									</svg>
									<svg
										className='w-4 h-4 text-blue-500 mr-1'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 22 20'
									>
										<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
									</svg>
									<svg
										className='w-4 h-4 text-blue-500 mr-1'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 22 20'
									>
										<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
									</svg>
									<svg
										className='w-4 h-4 text-gray-300 mr-1 dark:text-gray-500'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 22 20'
									>
										<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
									</svg>
									<p className='ml-2 text-sm font-medium text-gray-500 dark:text-gray-400'>
										8.5/10 - IMDb
									</p>
								</div>
							</div>
						</div>
						<div className='release-date flex'>
							<p className='mb-2 text-sm font-300 italic text-gray-500 dark:text-gray-400'>
								Release Date:
							</p>
							<span className='px-6 text-sm font-medium text-gray-500 dark:text-gray-400'>
								2023-10-25
							</span>
						</div>
						<div className='popularity flex'>
							<p className='mb-2 text-sm font-300 italic text-gray-500 dark:text-gray-400'>
								Popularity:
							</p>
							<span className='px-10 text-sm font-medium text-gray-500 dark:text-gray-400'>
								2058.036
							</span>
						</div>
						<div className='genres flex'>
							<p className='mb-2 text-sm font-300 italic text-gray-500 dark:text-gray-400'>
								Genres:
							</p>
							<span className='px-14 text-sm font-medium text-gray-500 dark:text-gray-400'>
								Horror, Mystery
							</span>
						</div>
						<div className='runtime flex'>
							<p className='mb-2 text-sm font-300 italic text-gray-500 dark:text-gray-400'>
								Runtime:
							</p>
							<span className='px-12 text-sm font-medium text-gray-500 dark:text-gray-400'>
								1 hour 50 minutes
							</span>
						</div>
					</div>
				</a>
			</div>
			<div>
				<div className='mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
					<h2 className='text-2xl font-bold tracking-tight text-gray-900'>
						Realated Movie
					</h2>
					<div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
						<div className='group relative'>
							<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-96'>
								<img
									src='https://image.tmdb.org/t/p/w500/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg'
									alt='santana'
									className='h-full w-full object-cover lg:h-full lg:w-full'
								/>
							</div>
						</div>
						<div className='group relative'>
							<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-96'>
								<img
									src='https://image.tmdb.org/t/p/w500/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg'
									alt='santana'
									className='h-full w-full object-cover lg:h-full lg:w-full'
								/>
							</div>
						</div>
						<div className='group relative'>
							<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-96'>
								<img
									src='https://image.tmdb.org/t/p/w500/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg'
									alt='santana'
									className='h-full w-full object-cover lg:h-full lg:w-full'
								/>
							</div>
						</div>
						<div className='group relative'>
							<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-96'>
								<img
									src='https://image.tmdb.org/t/p/w500/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg'
									alt='santana'
									className='h-full w-full object-cover lg:h-full lg:w-full'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieDetail;
