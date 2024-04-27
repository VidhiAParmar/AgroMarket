import React from 'react'


const InputBox = ({
    type,
    name,
    placeholder,
    value,
    handleChange,
}) => {
  return (
    <div>
      <div className="inputs flex flex-col gap-2 my-3">
      <input
          name={name}
          type={
            type == "password" && type == 'cofirmpassword' ? "password" : 'text'
          }
          defaultValue={value}
          placeholder={placeholder}
          onChange={handleChange}
          className="bg-[#e7e6e9] rounded-lg w-full md:w-60 h-10 pl-3" 
        />
      </div>
    </div>
  )
}

export default InputBox


