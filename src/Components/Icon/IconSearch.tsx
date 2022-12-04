
export interface IconSearchProps {
    className: string | null
}

export const IconSearch = ({ className }: any): any => {
    return (
        <svg className={className} width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path d='M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
            <path d='M20 20L16 16' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
        </svg>
    )
}