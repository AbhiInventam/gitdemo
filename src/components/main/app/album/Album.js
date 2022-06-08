import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumData, selectAlbumData } from "./albumSlice";

const Album = () => {
  const album = useSelector(selectAlbumData);
  const [albumData, setAlbumData] = useState();
  const dispatch = useDispatch();

  // console.log("album:- ", album);
  const finalAlbumData = album.entities;
  // console.log("Final album:- ", finalAlbumData);

  // Api Call Here simple call without createAsyncThunk
  useEffect(() => {
    dispatch(getAlbumData());
    setAlbumData(finalAlbumData);
    // console.log("albumData", albumData);
    // -------------------------------------------------------
    // axios
    //   .get("https://jsonplaceholder.typicode.com/albums")
    //   .then((res) => {
    //     console.log("res", res);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });
    // -------------------------------------------------------
  }, []);

  return (
    <div>
      <br />
      <hr />
      <br />
      <div>Album List</div>
      <br />
      {/* {album} */}
      <div>
        {finalAlbumData.map((albumitem) => {
          // console.log("unique id:- ", albumitem.id);
          return (
            <div key={albumitem.id}>
              <h4>Id:- {albumitem.id}</h4>
              <h5>UserId:- {albumitem.userId}</h5>
              <p>Title:- {albumitem.title}</p>
              <br />
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Album;
