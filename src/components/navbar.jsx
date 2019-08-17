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
        this.toggle = this.toggle.bind(this);
        this.state = {
            name: this.props.name,
            contents: this.props.contents,
            isOpen: false
        };
    }
    
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    displaySocialLinks = () => {
        var contents = this.state.contents;
        // var length = contents.length;
        return (
            contents.map((content, idx) => {
                return (
                    // <NavItem key={idx}>
                        // <NavLink href={content.link} target="_blank">
                    <UncontrolledDropdown key={idx} nav inNavbar>
                        <DropdownToggle nav caret>
                            {content.title}
                            {/* {(() => {
                                return idx < length - 1 ? ' |' : null;
                            })()} */}
                        </DropdownToggle>
                        <DropdownMenu right>
                            {content.files.map((file, idx) => 
                                <DropdownItem key={idx}>
                                    <NavLink href={file.file} target="_blank">
                                        {file.name}
                                    </NavLink>
                                </DropdownItem>
                            )}
                        </DropdownMenu>
                    </UncontrolledDropdown>
                        // </NavLink>
                    // </NavItem>
                );
            })
        );
    }

    render() {
        return (
            <Navbar color="inverse" light expand="md">
                <NavbarBrand href="/">Portfolio: <strong>Dennis McCann</strong></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {this.displaySocialLinks()}
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}