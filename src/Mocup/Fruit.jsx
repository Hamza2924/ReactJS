// import React, { Fragment } from 'react'
import { fruiltlist } from "./fruitlist.js";
import "../Mocup/Fruit.css";
import React from "react";

const Fruit = () => {
  return  fruiltlist.map((product) => {

    if (product.category == "Fruits") {
      return (
        <>
          <div>
            {
              <table className="table1">
                <tr>
                  <th>Fruits</th>
                </tr>
                <tr>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                </tr>
              </table>
            }
          </div>
        </>
      );
    }
    else if (product.category == "Vegetables") {
        return (
          <>
            <div>
              {
                <table className="table2">
                  <tr>
                    <th>Vegetables</th>
                  </tr>
                  <tr>
                     <td>{product.name}</td>
                    <td>{product.price}</td>
                  </tr>
                </table>
              }
            </div>
          </>
        );
      }
  });
};

