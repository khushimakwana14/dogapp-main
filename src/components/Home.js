import React, { useEffect } from "react";
import { fetchDogs } from "../redux/actions";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Cards from "./Cards";
import Loader from "./Loader";
import Search from "./Search";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDogs());
    console.log("api call");
  }, [dispatch]);
  let { dogs, loading } = useSelector((state) => ({ ...state.dogsReducer }));
  return (
    <>
      <Search />
      <div className="content">
        <div className="container py-4">
          <div className="row">
            {loading ? (
              <Loader />
            ) : dogs.length !== 0 ? (
              dogs?.map((element) => {
                let {
                  name,
                  bred_for,
                  life_span,
                  breed_group,
                  reference_image_id,
                } = element;
                return (
                  <Cards
                    name={name}
                    bred_for={bred_for}
                    life_span={life_span}
                    breed_group={breed_group}
                    reference_image_id={reference_image_id}
                  />
                );
              })
            ) : (
              <h2 className="text-white">No Breed Found</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
