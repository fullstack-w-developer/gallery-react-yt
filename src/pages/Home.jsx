import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import CardGallery from "../components/CardGallery";
import { AlbumIdContext } from "../context/AlbumId";
const Home = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { albumId } = useContext(AlbumIdContext);
  useEffect(() => {
    const getPhots = () => {
      setIsLoading(true);
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos${
            albumId === 0 ? "" : `?albumId=${albumId}`
          }`
        )
        .then((response) => {
          setIsLoading(false);
          setPhotos(response.data);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    };

    getPhots();
  }, [albumId]);
  return (
    <div>
      {/* cards */}
      {isLoading ? (
        <p className="text-center font-medium text-gray-600 mt-10">
          در حال بارگذاری
        </p>
      ) : (
        <div className="app grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mt-10 px-10 justify-items-center">
          {photos.map((photo) => {
            return (
              <CardGallery key={photo.id} photo={photo} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
