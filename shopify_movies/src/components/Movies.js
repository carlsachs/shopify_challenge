import React, { useEffect, useState, useRef } from "react";

//import actions
import { getMovies } from "../actions/actions";

//styling
import styled from "styled-components";
import { Button } from "react-bootstrap";

//styled-components
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const Movies = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        props.getMovies();
    }, [])

    return (
        <Wrapper>

            <Title>
                <h2>Movies</h2>
            </Title>

            <Box>
            <Button variant="primary" onClick={handleClick}>Get All Movies</Button>{' '}
            </Box>
        
        </Wrapper>
    )
}