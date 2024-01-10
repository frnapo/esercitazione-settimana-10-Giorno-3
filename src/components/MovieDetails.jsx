import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { PlayFill, PlusCircleFill, StarFill } from "react-bootstrap-icons";

const MovieDetails = () => {
  let { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      if (!movieId || movieId.trim() === "") {
        setError("Invalid movie ID");
        return;
      }

      try {
        let response = await fetch(`http://www.omdbapi.com/?apikey=9a318762&i=${movieId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const movieDetails = await response.json();
        setMovieData(movieDetails);
        fetchDetails(movieId, setComments, setError);
      } catch (error) {
        console.error("Error fetching movie data: ", error);
        setError(error.message);
      }
    };

    fetchMovie();
  }, [movieId]);

  const fetchDetails = async (movieId, setComments, setError) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${movieId}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTlkNmY1Y2U2Mjg4NjAwMTg4M2Y2ZWQiLCJpYXQiOjE3MDQ4MTY0NzYsImV4cCI6MTcwNjAyNjA3Nn0._AAZZ0SkMGkVBf2y3rV6dp08ZPJ90nFXZkhPm-g02yY",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const commentsData = await response.json();
      setComments(commentsData);
    } catch (error) {
      console.error("Error fetching comments data: ", error);
      setError(error.message);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img
                style={{ height: "300px", objectFit: "cover" }}
                variant="top"
                src={movieData.Poster}
                alt={movieData.Title}
              />
              <Card.Body>
                <p>
                  {movieData.year}
                  <span className="ms-3">{movieData.runtime}</span>
                </p>
                <Card.Title>{movieData.Title}</Card.Title>
                <Card.Text>{movieData.Plot}</Card.Text>
                <Button variant="light" className="fs-5 px-5">
                  <PlayFill className="fs-2 mb-1" />
                  Play
                </Button>

                <PlusCircleFill className="fs-1 ms-3" />
              </Card.Body>
              <Card.Footer className="text-white">
                <p className="pb-1 mb-1">Cast: {movieData.Actors}</p>
                <p>Genre: {movieData.Genre}</p>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Container className="mt-3">
          <h2 className="text-white my-4">Comments</h2>
          <Row className="my-3">
            <Col md={4}>
              <h3>Author</h3>
            </Col>
            <Col md={4}>
              <h3>Comment</h3>
            </Col>
            <Col md={4}>
              <h3>Ratings</h3>
            </Col>
          </Row>
          {comments.map((comment) => (
            <div key={comment._id} className="text-secondary">
              <Row>
                <Col md={4}>
                  <p>{comment.author}</p>
                </Col>
                <Col md={4}>
                  <p>{comment.comment}</p>
                </Col>
                <Col md={4}>
                  <p>
                    {comment.rate}/5
                    <StarFill className="mb-1 ms-3" />
                  </p>
                </Col>
              </Row>
            </div>
          ))}
        </Container>
      </Container>
    </>
  );
};

export default MovieDetails;
