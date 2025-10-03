import React from 'react'
import Message from './Message'

type MessageType = {
  author: string
  text: string
  corner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

type MessageWrapProps = {
  messages: MessageType[]
  position: string
}

const MessageWrap = ({ messages, position }: MessageWrapProps) => {
  return (
    <div className={`absolute ${position}  text-white `}>
      {messages.map(item => (
        <div className={`flex mb-1 flex-col ${item.corner === 'bottom-left' ? 'items-start' : 'items-end'}`}>
          <p className='mb-1'>{item.author}</p>
          <Message text={item.text} corner={item.corner} />
        </div>
      ))}
    </div>
  )
}

export default MessageWrap
