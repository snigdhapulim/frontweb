import React from 'react';
import Image from 'next/image';

type CardProps = {
  index: number;
  doctorName: string;
  specialty: string;
  location: string;
  costMax: number;
  // Include any other properties that you need
};

const Card: React.FC<CardProps> = ({ index, doctorName, specialty, location, costMax }) => {
  // A placeholder image URL
  const placeholderImage = '/cute'+index%2+'.jpg';
  // Alternatively, if you have a static image in your public directory:
  // const placeholderImage = "/static/default-doctor.jpg";

  return (
    <div className="card-container bg-white rounded-lg shadow-md p-4 m-4">
      <div className="image-container mx-auto">
        <Image src={placeholderImage} alt="Doctor" width={100} height={100} className="rounded-full" />
      </div>
      <h3 className="text-lg font-bold text-center">{doctorName}</h3>
      <p className="text-sm text-gray-600 text-center">{specialty}</p>
      <div className="rating text-center">
        {location}
      </div>
      <p className="text-sm text-gray-600 text-center">$ {costMax}</p>
      {/* Include other elements like buttons or links as needed */}
    </div>
  );
};

export default Card;
