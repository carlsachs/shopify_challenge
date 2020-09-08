import React from "react";

//styling
import styled from "styled-components";
import { Form } from "react-bootstrap";

const Wrapper = styled.div`

`;

const SearchBar = (props) => {

    return (
        <Wrapper>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Search Movies</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" />
                    <Form.Text className="text-muted">
                    Search movies by title to nominate for The Shoppies.
                    </Form.Text>
                </Form.Group>
            </Form>
        </Wrapper>
    )
}

export default SearchBar;