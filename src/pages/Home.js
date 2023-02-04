import React, { useState, useEffect, useRef } from "react";
import { social_links } from "../data/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { routes } from '../data/routes'


const content = ["Student ", "Learner ", "Artist ", "Dreamer... ", ""];
const colors = ["#184e77","#1a759f","#34a0a4","#76c893",""];
const darkcolors = ['#F0ACC4','#E1BFBF','#CDD8B9','#AFFCAF',''];

const useInterval = (callback, delay) => {
	const savedCallback = useRef();
  
	useEffect(() => {
	  savedCallback.current = callback;
	}, [callback]);
  
	useEffect(() => {
	  if (delay) {
		const id = setInterval(() => {
		  savedCallback.current();
		}, delay);
		return () => clearInterval(id);
	  }
	  return () => {}; // pass linter
	}, [delay]);
  };

function Home() {

	const [ind, setInd] = useState(0);
	const [charin, setCharin] = useState(0);
	const [curr, setCurr] = useState('');
	const [backward, setBackward] = useState(false)
	
	useInterval(
		() => {
			setCurr(content[ind].slice(0,charin))
			
			if(ind===content.length-1) setInd(0);
			if(charin===content[ind].length-1) setBackward(true);
			
			if(backward) setCharin(charin-1);
			else setCharin(charin+1);
			if(backward && charin <= 0){
				setBackward(false);
				setCharin(0);
				setInd(ind+1);
			}
		},150
	);

  return (
    <div className='h-screen w-full flex items-center justify-center overflow-hidden bg-home_bg'>
		<div className='sm:grid sm:grid-cols-5 md:grid-cols-8 sm:grid-rows-1 w-3/4 items-center tracking-wide'>
			<div className='sm:col-start-2 sm:col-end-10 md:col-start-4 md:col-end-10 sm:row-start-1 
							flex justify-around items-center 
							h-32 sm:h-40 md:h-52 lg:h-60 w-full 
							border-2 border-cyan border-dashed 
							m-auto mb-10 sm:m-0 sm:ml-auto '>
					<div className="h-[90%] w-[95%]
									bg-stripped ">
					</div>
			</div>
			<div className='sm:col-start-1 sm:col-end-4 md:col-start-1 md:col-end-6 sm:row-start-1  
							text-center font-black font-outline-2
							text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
								
				Hi! My name is <span className='text-red-500'>Prashansa</span>. <br/>

				<div
					className='uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl p-2 select-none'
							style={
								window.localStorage.getItem('color-theme') === 'dark' 
								? {color:darkcolors[ind]}
								: {color:colors[ind]}
							}
				>
					{curr}_ &nbsp;
				</div>

				<div className="flex justify-center items-center h-full w-full p-1
								text-sm sm:text-base md:text-md lg:text-lg xl:text-xl
								">
					{social_links
						.filter((l) => !l.index)
						.map((l, index) => (
							<a
								href={l.path}
								target="_blank"
								rel="noreferrer"
								key={index}
								className="text-gray-600 hover:text-hovercolor"
							>
								<FontAwesomeIcon
									icon={l.icon}
									size="sm"
									className="rounded-full mx-2"
								/>
							</a>
						))}
					{social_links
						.filter((l) => l.index)
						.map((l, index) => (
							<a
								href={l.path}
								target=""
								download="prashansatanwar_resume"
								key={index}
								className="text-gray-600 hover:text-hovercolor"
							>
								<FontAwesomeIcon
									icon={l.icon}
									size="sm"
									className="rounded-full mx-2"
								/>
							</a>
						))}
				</div>
				
			</div>
		</div>
    </div>
  )
}

export default Home