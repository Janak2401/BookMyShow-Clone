import React from 'react';
import { Disclosure } from '@headlessui/react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const Filter = (props) => {
  return (
    <Disclosure>
    	{({open}) => (
    		<>
    		<div className="mb-3 bg-white rounded-md">
	    		<Disclosure.Button className="w-full flex items-center gap-3 p-3"> 
	    			{open ? <BsChevronUp /> : <BsChevronDown />}
	    			<span className={open ? "text-red-600" : "text-gray-700"}>
	        		{props.title}
	    			</span>
	      	</Disclosure.Button>
	      	<Disclosure.Panel className="w-full text-gray-500 p-3">
	      		<div className="flex items-center gap-3 flex-wrap">
			        {props.tags.map((tag) => (
			        	<>
			        		<div className="border-2 border-gray-200 p-1">
			        			<span className="text-red-600 text-sm">{tag}</span>
			        		</div>
			        	</>
			        ))}
			      </div>
	      	</Disclosure.Panel>
      	</div>
      	</>
    	)}
    </Disclosure>
  )
};

export default Filter;