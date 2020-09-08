import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

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
            .get("http://www.omdbapi.com/?i=tt3896198&apikey=a06127f9")
            .then(res => {
                console.log(res);
                const searchResult = res.data.filter(item => item.Title.toLowerCase().includes(query.toLowerCase()));
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
                <h2>Movies</h2>
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
            <Button variant="primary">Get All Movies</Button>{' '}
            </Box>
        
        </Wrapper>
    )
}

export default Movies;