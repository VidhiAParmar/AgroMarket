import React from 'react'


const InputBox = ({
    type,
    name,
    placeholder,
    value,
    handleChange,
}) => {
  return (
    <div className='w-full'>
      <div className="inputs w-full flex flex-col gap-2 my-3">
      <input
          name={name}
          type={
            type == "password" && type == 'cofirmpassword' ? "password" : 'text'
          }
          defaultValue={value}
          placeholder={placeholder}
          onChange={handleChange}
          className="bg-[#f5f4f4] rounded-lg w-full h-10 pl-3 mb-4" 
        />
      </div>
    </div>
  )
}

export default InputBox


