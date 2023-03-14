import { NextPage } from 'next'
import { ButtonHTMLAttributes, ReactNode, useState } from 'react'

interface Props {
onClick?: () => void,
children?: ReactNode
color?: string,
type?: "button" | "submit" | "reset" | undefined
}

const Button: NextPage<Props> = ({children, onClick, color, type}) => {
    const noCorrectColor = color !== 'success' && color !== 'error' && color !== 'warning' && color !== 'info'
    if(!type) type = 'button'
    return (
        <>
        {color === 'success' && <Success onClick={onClick} type={type}> {children}</Success>}
        {color === 'error' && <Error onClick={onClick} type={type}> {children}</Error>}
        {color === 'warning' && <Warning onClick={onClick} type={type}> {children}</Warning>}
        {(color === 'info' || noCorrectColor) && <Info onClick={onClick} type={type}> {children}</Info>}
        
        </>
        
    )
}
const Error: NextPage<Props> = ({children, onClick, type}) => {
   const className= `px-4 py-2 my-1 font-semibold text-red-700 bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white hover:border-transparent`;
    return (
        <div className="text-center">
            <button onClick={onClick} className={className} type={type}>
                {children}
            </button>
           </div>
    )
}
const Success: NextPage<Props> = ({children, onClick, type}) => {
   const className= `px-4 py-2 my-1 font-semibold text-green-700 bg-transparent border border-green-500 rounded hover:bg-green-500 hover:text-white hover:border-transparent`;
    return (
        <div className="text-center">
            <button onClick={onClick} className={className} type={type}>
                {children}
            </button>
           </div>
    )
}
const Info: NextPage<Props> = ({children, onClick, type}) => {
   const className= `px-4 py-2 my-1 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent`;
    return (
        <div className="text-center">
            <button onClick={onClick} className={className} type={type}>
                {children}
            </button>
           </div>
    )
}
const Warning = ({children, onClick, type}: Props) => {
   const className= `px-4 py-2 my-1 font-semibold text-orange-700 bg-transparent border border-orange-500 rounded hover:bg-orange-500 hover:text-white hover:border-transparent`;
    return (
        <div className="text-center">
            <button onClick={onClick} className={className} type={type}>
                {children}
            </button>
           </div>
    )
}


export default Button
