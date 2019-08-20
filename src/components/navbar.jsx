import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    // NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import '../styles/navbar.css';

export default class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: this.props.contents,
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    displayFiles = () => {
        var contents = this.props.contents;
        var length = contents.files.length;
        return (
            contents.files.map((file, idx) => {
                return (
                    <UncontrolledDropdown key={idx} nav inNavbar>
                        <DropdownToggle nav caret>
                            {file.title}
                        </DropdownToggle>
                        <DropdownMenu right>
                            {file.types.map((type, idx) =>
                            <div key={idx}>
                                <DropdownItem>
                                    <NavLink href={file.paths[idx]} target="_blank" ref="noopener noreferrer">
                                        {type}
                                    </NavLink>
                                </DropdownItem>
                                {idx < length ? <DropdownItem divider/> : null}
                            </div>
                            )}
                        </DropdownMenu>
                    </UncontrolledDropdown>
                );
            })
        );
    }

    render() {
        var portfolio = "Portfolio";
        var firstname = this.state.contents.brandInfo.firstname;
        var lastname = this.state.contents.brandInfo.lastname;
        return (
            <Navbar color="inverse" light expand="md">
                <NavbarBrand>
                    <div className="brand">
                        {portfolio}: <strong>{firstname} {lastname}</strong>
                    </div>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {this.displayFiles()}
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}