import React from 'react'

const Authlayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex justify-center pt-32'>

            {
                children
            }
        </div>
    )
}

export default Authlayout