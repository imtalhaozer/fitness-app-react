import React, { useState } from 'react';

export const ChatBar = () => {
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInput = () => {
    if (value.trim() !== '') {
      setMessages([...messages, value]); 
      setValue(''); 
    }
  };

  return (
    <div>
      <div className='w-[300px] h-[95vh] bg-blue-100 flex flex-col items-center justify-end ml-5 mt-5 mb-5 rounded-xl'>
        <div className='w-full px-2 overflow-x-auto'>
          {messages.map((message, index) => (
            <div key={index} className='mb-2 p-2 bg-white rounded shadow'>
              
              {message}
            </div>
          ))}
        </div>
        <div className='flex flex-col w-full px-2 mb-4'>
          <input
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className='mb-2 p-2 rounded border'
            placeholder='Mesajınızı yazın...'
          />
          <button onClick={handleInput} className='p-2 bg-primary text-white rounded break-words'>
            Gönder
          </button>
        </div>
      </div>
    </div>
  );
};
