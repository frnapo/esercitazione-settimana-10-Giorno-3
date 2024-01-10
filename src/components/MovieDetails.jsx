import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// const fetchDetails = async (movieId, setMovieData, setError) => {
//   try {
//     let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${movieId}`, {
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTlkNmY1Y2U2Mjg4NjAwMTg4M2Y2ZWQiLCJpYXQiOjE3MDQ4MTY0NzYsImV4cCI6MTcwNjAyNjA3Nn0._AAZZ0SkMGkVBf2y3rV6dp08ZPJ90nFXZkhPm-g02yY",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);
//     setMovieData(data);
//   } catch (error) {
//     console.error("Error fetching data: ", error);
//     setError(error.message);
//   }
// };

const MovieDetails = () => {
  //   let { movieId } = useParams();
  //   const [movieData, setMovieData] = useState([]);
  //   const [error, setError] = useState("");

  //   useEffect(() => {
  //     if (movieId) {
  //       fetchDetails(movieId, setMovieData, setError);
  //     }
  //   }, [movieId]);

  //   if (error) {
  //     return <div>Error: {error}</div>;
  //   }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img variant="top" src="film" />
              <Card.Body>
                <Card.Title>Titolo del film</Card.Title>
                <Card.Text>Descrizione del film</Card.Text>
                <Button variant="primary">Riproduci</Button>
              </Card.Body>
              <Card.Footer className="text-white">
                <p className="pb-1 mb-1">Cast: </p>
                <p>Genre: </p>
              </Card.Footer>
            </Card>
            <div className="mt-3">
              <h2 className="text-white">Commenti</h2>
              {/* {movieData.map((comments) => (
                <p key={comments.id}>{comments.comment}</p>
              ))} */}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MovieDetails;
