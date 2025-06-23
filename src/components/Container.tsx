import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export default function Container({children} : Props) {
  return (
     <div className="flex flex-col items-center w-full justify-center
        xl:flex 
        2xl:gap-80 
        2xl:px-12
        xl:flex-row 
        ">
        {children}
    </div>
  )
}
