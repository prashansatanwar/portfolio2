import React from 'react'
import { Link } from 'react-router-dom';
import { routes, social_links } from '../data/routes'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Menu({open,toggle}) {
	const style = 'py-4 hover:cursor-pointer';
  return (

    <div
			className={
				open
					? "fixed w-full menu-animation"
					: "fixed w-full hidden"
			}			
		>
		<div className='w-full h-full py-14 px-8 bg-pink-200 overflow-auto'> 
			
			<div className='flex pt-8 p-4 menu-soc-animation'>
				<div className='border-b-2 border-black rounded-sm h-3 w-20'></div>
				<div className='px-4'>
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

			<div className='flex flex-col
							text-xl md:text-3xl lg:text-5xl px-4'>
				{routes
					.map((l,ind) => (
						<Link
							key={ind}
							className='py-5 font-semibold hover:text-white menu-links-animation'
							to={l.path}
							onClick={toggle}
						>
							{l.label}
						</Link>
				))}
				
			</div>
					
		</div>
    </div>
  )
}

export default Menu