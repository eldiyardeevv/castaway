import React from "react";

const List = () => {
  return (
    <div id="List">
      <div className="container">
        <div className="list">
          <div className="list--filter">
            <div className="list--filter--block">
              <div className="list--filter--block--div">
                <h5 className="list--filter--block--div--text">Filter</h5>
                <a className="list--filter--block--div--text--title" href="#">
                  Clear filters
                </a>
              </div>
            </div>
            <h5 className="list--filter--block--div--text--title--btn--h5">
              Genres
            </h5>
            <div className="list--filter--block--div--text--title--btn--h5--inp">
              <div>
                <input type="radio" />
                <label>Autographed Books</label>
              </div>
              <div>
                <input type="radio" />
                <label>Sci-Fi</label>
              </div>
              <div>
                <input type="radio" />
                <label>For kids</label>
              </div>
              <div>
                <input type="radio" />
                <label>For teenagers</label>
              </div>
              <div>
                <input type="radio" />
                <label>Finance</label>
              </div>
              <div>
                <input type="radio" />
                <label> Detective</label>
              </div>
              <div>
                <input type="radio" />
                <label>Romantic </label>
              </div>
              <div>
                <input type="radio" />
                <label> Psychology</label>
              </div>
              <div>
                <input type="radio" />
                <label>Self-Improvement </label>
              </div>
              <div>
                <input type="radio" />
                <label> Educational</label>
              </div>
              <div>
                <input type="radio" />
                <label>Literature </label>
              </div>
              <div>
                <input type="radio" />
                <label>Religion </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
