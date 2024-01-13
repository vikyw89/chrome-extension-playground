import Image from 'next/image';

export default function Home() {
	return (
		<main className='h-full top-0 right-0 flex flex-col w-96 bg-primary bg-opacity-20 backdrop-blur-sm text-base-content p-2 rounded-l-3xl gap-5'>
			<div className='p-5 text-lg font-bold'>Test Extension</div>
      <textarea placeholder="text here" className="textarea textarea-bordered textarea-lg w-full h-full" ></textarea>
			<button className='btn btn-primary mb-10'>click !</button>
		</main>
	);
}
