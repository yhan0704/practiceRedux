import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { addSubscriber, fetchedMovie } from "../redux/subscribers/actions";

export const Subsribers = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.fetchedMovie);
  const subScribers = useSelector((state) => state.subscribers);

  useEffect(() => {
    dispatch(fetchedMovie());
  }, [dispatch]);

  const searchedMovies = movies.filter((movie) =>
    movie.title.includes("libero")
  );

  const searchedMovie = () => {
    return searchedMovies.map((movie) => <p>{movie.title}</p>);
  };

  return (
    <div>
      Subscribers:{subScribers.count}
      <br />
      {/* <button onClick={() => props.addSubscriber()}>subscribe</button> */}
      {/* <p>
        {movies.map((movie) => (
          <h3>{movie.title}</h3>
        ))}
      </p> */}
      <h1>{searchedMovie().length}</h1>
      <h3>{searchedMovie()}</h3>
    </div>
  );
};

const mapStateToProps = ({ subscribers }) => {
  return {
    count: subscribers.count,
  };
};

export default connect(mapStateToProps, { addSubscriber })(Subsribers);
