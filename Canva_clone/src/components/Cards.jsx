import React from 'react'

const Cards = () => {
  const cardData = [
    { id: 1, text: "Easy drag-and-drop editor", path: "data:image/png;base64,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" },
    { id: 2, text: "3M+ free stock photos and graphics", path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7eg7tCRFnwpL3f6D6XUKVmz984ZKAXoRZ_Q&s" },
    { id: 3, text: "Generate content and media with AI", path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-KvWAHnP4np6xaQNjXFCM94ZDk4bZPa2Z-g&s" },
    { id: 4, text: "Invite others and design together", path: "data:image/jpeg;base64,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" },
  ];

  return (
    <div className="flex gap-4 px-4">
      {cardData.map(card => (
        <div key={card.id} className="w-1/4 p-4 border rounded-lg shadow-lg md:flex flex-col items-center mt-4">
          <img src={card.path} alt={card.text} className="w-12 h-12 mb-4" />
          <p className="text-center">{card.text}</p>
        </div>
      ))}
    </div>
  )
}

export default Cards