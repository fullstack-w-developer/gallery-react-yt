import { createContext, useState } from "react";

export const AlbumIdContext = createContext(null);

const AlbumId = ({ children }) => {
  const [albumId, setAlbumId] = useState(0);
  return (
    <AlbumIdContext.Provider
      value={{ albumId, setAlbumId }}
    >
      {children}
    </AlbumIdContext.Provider>
  );
};

export default AlbumId;
