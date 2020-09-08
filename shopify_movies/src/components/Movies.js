import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import MovieCard from "../components/MovieCard";

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//import actions
import { getMovies } from "../actions/actions";

//styling
import styled from "styled-components";
import { Button, Form } from "react-bootstrap";

//styled-components
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const 

const Box = styled.div``;

const Title = styled.div``;

const Movies = (props) => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        getMovies();
    }, [])

    useEffect(() => {
        axios
            .get(`http://www.omdbapi.com/?t=${query}&apikey=a06127f9`)
            .then(res => {
                console.log(res);
                const searchResult = res.data.filter(item => item.props.Title.toLowerCase().includes(query.toLowerCase()));
                setData(searchResult);
            })
            .catch(err => console.log(err));
    }, [query]);

    const handleChange = e => {
        setQuery(e.target.value);
    };

    return (
        <Wrapper>

            <Title>
                <h2>Movies up for Nomination</h2>
            </Title>

            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Search Movies</Form.Label>
                    <Form.Control 
                    onChange={handleChange}
                    type="text"
                    name="search"
                    value={query}
                    placeholder="Search Movies by Title" />
                    <Form.Text className="text-muted">
                    Search movies by title to start nominating for The Shoppies!
                    </Form.Text>
                </Form.Group>
            </Form>

            <Box>

            {data.map((props, i) => (
                <CardWrap
                    // strains={props.strains}
                  key={i}
                  movie_id={props.imdb_ID}
                  name={props.Title}
                  year={props.Released}
                  poster={props.Poster}
                  description={props.strain_description}
                  awards={props.Awards}
                  rating={props.Ratings.map((Value, i) => 
                        <li key={i}>{Value}</li>
                  )}
                  strain_flavors={props.strain_flavors}
                  flavors={props.strain_flavors.map((flavor, i) => 
                    <li key={i}>{flavor}</li>
                  )}
                />
            ))}

            </Box>
        
        </Wrapper>
    )
}

const mapStateToProps = state => ({
    movies: state.movieReducer.movies,
    error: state.movieReducer.error,
    isFetching: state.movieReducer.isFetching
});

export default connect(
    mapStateToProps,
    { getMovies }
)(Movies);