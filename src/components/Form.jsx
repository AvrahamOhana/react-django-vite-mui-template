import React from 'react';
import { Button, TextField, Container } from '@material-ui/core';

function AddTask() {
    return (
        <Container maxWidth="xs">
            <form noValidate autoComplete="off">
                <TextField
                    id="outlined-basic"
                    label="Text Input"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </form>
        </Container>
    );
}

export default AddTask;