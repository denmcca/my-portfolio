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
        // console.log("props: " + props);
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
        console.log(contents[0]);
        return (
            contents.files.map((file, idx) => {
                return (
                    <UncontrolledDropdown key={idx} nav inNavbar>
                        <DropdownToggle nav caret>
                            {file.title}
                        </DropdownToggle>
                        <DropdownMenu right>
                            {file.types.map((type, idx) => 
                                <DropdownItem key={idx}>
                                    <NavLink href={file.paths[idx]} target="_blank">
                                        {type}
                                    </NavLink>
                                </DropdownItem>
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
                <NavbarBrand href="/">
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