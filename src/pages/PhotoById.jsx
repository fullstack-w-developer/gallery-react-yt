import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const PhotoById = () => {
  const params = useParams();
  const [photo, setPhoto] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getPhotoById = () => {
      setIsLoading(true);
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos/${params.id}`
        )
        .then((res) => {
          setIsLoading(false);
          setPhoto(res.data);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
    };
    getPhotoById();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p className="text-center font-medium text-gray-600 mt-10">
          در حال بارگذاری
        </p>
      ) : (
        <div className="w-96 mx-auto mt-10">
          <img src={photo.url} className="w-full " />
          <div className="flex items-center gap-2 mt-2  py-6">
            <img
              src={photo.thumbnailUrl}
              className="rounded-full w-1- h-10"
            />
            <p className="text-sm font-medium">
              {photo.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoById;
