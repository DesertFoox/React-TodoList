import React, { useState } from "react";
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow,
} from "mdbreact";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentpage }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <MDBRow>
      <MDBCol>
        <MDBPagination circle>
          <MDBPageItem disabled>
            <MDBPageNav className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </MDBPageNav>
          </MDBPageItem>
          {pageNumber.map((item) => (
            <MDBPageItem key={item} className={`${currentpage ? 'active' : ''}`}>
              <MDBPageNav
                onClick={() => paginate(item)}
                className={`page-link `}
              >
                {item}
              </MDBPageNav>
            </MDBPageItem>
          ))}

          <MDBPageItem>
            <MDBPageNav className="page-link">
              &raquo;
              <span className="sr-only color-white">Previous</span>
            </MDBPageNav>
          </MDBPageItem>
        </MDBPagination>
      </MDBCol>
    </MDBRow>
  );
};

export default Pagination;