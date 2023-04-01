import React from 'react';
import {Button} from'react-bootstrap';

const Header = () => {
    return (
        <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Breaking news</h1>
            <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in
                previous versions of Bootstrap.</p>
                <Button variant="primary">Go somewhere</Button>
        </div>
    </div>
        
    );
};

export default Header;