import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class Paginator extends React.Component {
    constructor(props) {
        super(props);
        var pageItems = [0,1,2];
        this.state = {
            pageItems: pageItems,
        }
        this.createPagePicker = this.createPagePicker.bind(this);
        this.changePage = this.changePage.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleFirstClick = this.handleFirstClick.bind(this);
        this.handleLastClick = this.handleLastClick.bind(this);
        this.renderPageItem = this.renderPageItem.bind(this);
    }

    handleItemClick(e, pageNum) {
        this.changePage(pageNum);
    }

    handleNextClick(e) {
        var pageNum = (this.state.currentPage + 1) % this.state.pageItems.length;
        this.changePage(pageNum);
    }

    handlePrevClick(e) {
        var pageNum = (this.state.currentPage - 1) % this.state.pageItems.length;
        if (pageNum < 0) pageNum += this.state.pageItems.length;
        this.changePage(pageNum);
    }   
    
    handleFirstClick(e) {
        var pageNum = 0;
        this.changePage(pageNum);
    }

    handleLastClick(e) {
        var pageNum = this.state.pageItems.length - 1;
        this.changePage(pageNum);
    }
    
    changePage(pageNum) {
        this.setState ({
            currentPage: pageNum },
            () => { 
                this.renderPageItem();
        })
    }

    renderPageItem () {
        var newPagesVisited = this.state.pagesVisited.slice();
        newPagesVisited.push(this.state.currentPage);
        this.setState ({
            pagesVisited: newPagesVisited,
            pageToRender: this.state.pageItems[this.state.currentPage],
        })
        console.log(this.state.pagesVisited);
    }

    createPagePicker(pageNum) {
        var currentPage = this.state.currentPage;
        return (
            <PaginationItem active={currentPage === pageNum}>
                <PaginationLink href="#" onClick={() => this.props.changeActiveSliderPage(pageNum)}>
                    {pageNum + 1}
                </PaginationLink>
            </PaginationItem>                
        );
    }        

    render() {
        var pageItems = this.state.pageItems;
        return (
            <div className="pagination-wrapper">                
                <Pagination aria-label="Page navigation">
                    <PaginationItem>
                    <PaginationLink first href="#" onClick={e => this.handleFirstClick(e)} />
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink previous href="#" onClick={e => this.handlePrevClick(e)} />
                    </PaginationItem>
                    {pageItems.map((element, idx) => { // use for...in instead
                        return ( 
                            <div key={idx}>
                                {this.createPagePicker(idx)}
                            </div>
                        );
                    })}
                    <PaginationItem>
                    <PaginationLink next href="#" onClick={e => this.handleNextClick(e)} />
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink last href="#" onClick={e=> this.handleLastClick(e)} />
                    </PaginationItem>
                </Pagination>
            </div>
        );
    }
}