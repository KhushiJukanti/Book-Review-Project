import React from 'react'

function Navbar() {
    return (
        <div className='container'>
            <nav className="navbar navbar-light mt-5 bg-light justify-content-between">
                <h2 className="navbar-brand"
                    style={{
                        color: 'darkcyan',
                        marginLeft: '100px'

                    }}>Novel Books</h2>
                <form className="form-inline" style={{ marginRight: '100px' }}>
                    <input className="form-control mr-sm-6" type="search" placeholder="explore here..." />
                </form>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="light">
                    <div class="bg-light p-4">
                        <h3 class="text-body-emphasis h4">Users</h3>
                        <h4 class="text-body-secondary">Reviews</h4>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
