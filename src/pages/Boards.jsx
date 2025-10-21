import React from 'react'
import { BsClock } from 'react-icons/bs'
import Cards from '../components/layout/Cards'


function Boards() {
    return (
        <div className='px-20 py-10 text-xl'>
            <div className='flex items-center'>
                <BsClock />
                <span className='ml-4'>Recently Viewed</span>
            </div>

            <Cards />
            <div className='mt-7'>
                <span>YOUR WORKSPACES</span>
                <div className='flex items-center'>
                    <Cards />

                    <div className="mt-4 ml-4 w-[200px] h-[100px] bg-[#2a2a2a] rounded-xl flex items-center justify-center cursor-pointer transition-all hover:bg-[#333] hover:shadow-lg">
                        <p className="text-gray-300 text-lg font-medium">Create new board</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boards