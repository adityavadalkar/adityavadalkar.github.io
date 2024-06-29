// components/Card.js
import { useState } from 'react';
import CustomModal from './Modal';
import Badge from 'react-bootstrap/Badge';
import Image from 'next/image';

export default function Card({ url, videoUrl, title, description, technologies, date, index, bgSize="object-cover", highlight=false }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <>
      <div
        className={`bg-white min-w-32 aspect-square ${index === 0 ? "mb-8" : "my-8"} flex flex-col border-1 rounded-[12px] cursor-pointer transition duration-300 transform hover:scale-105`}
        onClick={handleOpen}
      >
        <div className="relative w-full h-1/2">
          <Image
            src={url}
            alt={title}
            fill
            className={`rounded-t-lg ${bgSize}`}
          />
        </div>
        <div className="p-2 flex-1 flex flex-col">
          <h2 className="text-xl font-semibold">{title}</h2>
          {highlight && <Badge bg="success" className="self-start">{highlight && 'Highlight'}</Badge>}
          <p className="mt-2 text-md text-gray-600 flex-1">{description}</p>
          <div className="flex justify-between items-end text-xs text-gray-500 mt-2">
            <div className="flex flex-wrap space-x-1">
              {technologies.map((tech, idx) => (
                <span key={idx}>{tech}{idx !== technologies.length - 1 ? ' | ' : ''}</span>
              ))}
            </div>
            <div>{date}</div>
          </div>
        </div>
      </div>
      <CustomModal show={showModal} handleClose={handleClose} videoUrl={videoUrl} title={title} />
    </>
  );
}
