import React, { forwardRef, useId } from 'react'

const Select = ({
    label,
    options,
    className='',
    ...props
},ref) => {
    const id = useId()
  return (
    <div>
        {
            label && (
                <div>
                    <label htmlFor={id} className='inline-block mb-1 text-base text-gray-700 font-medium'>
                            {label}
                    </label>
                </div>
            )
        }
        <div>
            <select id={id} ref={ref} className={`${className}`} {...props}>
                {
                    options?.map(opt=>{
                        return <option key={opt} value={opt}>{opt}</option>
                    })
                }
            </select>
        </div>
    </div>
  )
}

export default forwardRef(Select)