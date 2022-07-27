import React from "react";
import { Link } from "react-scroll";
import "./table.css";
function Table({ contents }) {
  return (
    <div className="table">
      <div className="table-heading">
        <h2>Top {contents.length} Fantasy Cricket Apps List To Download</h2>
      </div>
      <div className="table-container">
        <table className="main-table">
          <thead className="table-head">
            <tr>
              <th>number</th>
              <th>apps</th>
              <th>download</th>
              <th>referral</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {contents.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.number}</td>
                  <td>
                    <Link
                      to={data.navigation}
                      smooth={true}
                      duration={1000}
                      activeClass='active'
                      spy={true}
                    >
                      {data.title}
                    </Link>
                  </td>
                  <td>
                    <a href={data.download_link}>download</a>
                  </td>
                  <td>{data.referral_code}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
