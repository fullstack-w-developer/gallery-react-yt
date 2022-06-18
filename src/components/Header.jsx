import { useContext } from "react";
import { AlbumIdContext } from "../context/AlbumId";

const Header = () => {
  const { albumId, setAlbumId } =
    useContext(AlbumIdContext);
  return (
    <div className="w-full h-[75px] shadow-md md:px-10">
      <ul className="flex flex-row-reverse h-full gap-10 items-center justify-center md:justify-start">
        <li
          onClick={() => setAlbumId(0)}
          className={`${albumId === 0 && "active"}`}
        >
          <a>همه</a>
        </li>
        <li
          className={`${albumId === 1 && "active"}`}
          onClick={() => setAlbumId(1)}
        >
          <a>آلبوم اول</a>
        </li>
        <li
          className={`${albumId === 2 && "active"}`}
          onClick={() => setAlbumId(2)}
        >
          <a>آلبوم دوم</a>
        </li>
        <li
          className={`${albumId === 3 && "active"}`}
          onClick={() => setAlbumId(3)}
        >
          <a>آلبوم سوم</a>
        </li>
        <li
          className={`${albumId === 4 && "active"}`}
          onClick={() => setAlbumId(4)}
        >
          <a>آلبوم چهارم</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
