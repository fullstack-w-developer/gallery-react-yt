import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PhotoById from "./pages/PhotoById";
import Header from "./components/Header";
import AlbumId from "./context/AlbumId";
function App() {
  return (
    <AlbumId>
      <Router>
        <Header />
        <Routes>
          <Route path="gallery-react-yt">
            <Route index element={<Home />} />
            <Route
              path="photo/:id"
              element={<PhotoById />}
            />
          </Route>
        </Routes>
      </Router>
    </AlbumId>
  );
}

export default App;
