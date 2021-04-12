import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ style = {}, totalStars = 5 }) => {

  // Manage stars state
  const [selectedStars, setSelectedStars] = useState(0);

  // Create an array according to the length parameter
  const createArray = length => [...Array(length)];

  // Create an star component and sets the star color using the selected parameter
  const Star = ({ selected = false, onSelect = f => f }) => {
    return (
      <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />
    )
  }
  return (
    <div style={{ padding: "5px", ...style}}>
      {createArray(totalStars).map((star, i) => 
        <Star 
          key={i} 
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
          />)};
      <p>
        {selectedStars} of {totalStars} stars;
      </p>
    </div>
  )
}

export default StarRating;