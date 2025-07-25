import React, { forwardRef,useId } from 'react'

const Input = forwardRef(({
    label,
    type="text",
    className='',
    placeholder='',
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
                <input id={id} type={type} className={`${className}`} placeholder={placeholder} ref={ref} {...props} />
        </div>
    </div>
)
})

export default Input