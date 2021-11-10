import React, { useState, useEffect } from "react";
import { Nav, Container, NavDropdown, Navbar } from "react-bootstrap";

export default function CustomNavbar() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 992);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <Navbar className="mt-2" expand="lg">
      <Container fluid className="d-flex justify-content-around p-0">
        {isDesktop ? (
          ""
        ) : (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                className="NavbarItem mx-2"
                title="Devices"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Action2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="NavbarItem mx-2"
                title="Pages"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Action2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="NavbarItem mx-2"
                title="Projects"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Action2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="NavbarItem mx-2"
                title="Blog"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Action2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="NavbarItem mx-2"
                title="Books"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Action2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="NavbarItem mx-2"
                title="Documentation"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Action2</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        )}
        <Navbar.Brand href="#home">SandBox</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div>
          {isDesktop ? (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown
                  className="NavbarItem mx-2"
                  title="Devices"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    Action2
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="NavbarItem mx-2"
                  title="Pages"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    Action2
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="NavbarItem mx-2"
                  title="Projects"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    Action2
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="NavbarItem mx-2"
                  title="Blog"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    Action2
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="NavbarItem mx-2"
                  title="Books"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    Action2
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="NavbarItem mx-2"
                  title="Documentation"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    Action2
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          ) : (
            ""
          )}
        </div>
        <div>
          <Nav className="me-auto">
            <NavDropdown
              className="NavbarItem"
              title="EN"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">ID</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}
