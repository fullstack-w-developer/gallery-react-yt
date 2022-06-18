import React from "react";
import { Link } from "react-router-dom";
const CardGallery = ({ photo }) => {
  return (
    <div className="border rounded-md overflow-hidden w-[80%] lg:w-fit">
      <img
        src={photo.url}
        className="w-full object-cover"
      />
      <Link to={`photo/${photo.id}`}>
        <div className="flex items-center gap-2 mt-2 cursor-pointer px-2 py-6">
          <img
            src={photo.thumbnailUrl}
            className="rounded-full w-1- h-10"
          />
          <p className="text-sm font-medium">
            {photo.title}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CardGallery;
