import React from "react";
import "./practice-styles.scss";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "bootstrap";

const PracticeStates = () => {
  var arrData = ["apples", "oranges", "Peach"];

  const [data, searchBox] = useState("");
  const [filterList, SetFilterList] = useState([]);
  const [addElement, SetInputElement] = useState("");
  const [remove, removeElement] = useState("");
  const [counterValue, setCounter] = useState(0);

  const loadList = () => {
    console.log("loadList");
    SetFilterList(arrData);
  };

  useEffect(() => {
    loadList();
  }, []);

  const PrintText = (event) => {
    searchBox(event.target.value);
  };

  const SearchArray = (event) => {
    console.log("search");
    //console.log(event.target.value);

    var searchVal = event.target.value;
    if (searchVal === "") {
      SetFilterList(arrData);
    }

    const filteredData = arrData.filter((item) => {
      return item.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase());
    });
    SetFilterList(filteredData);
  };

  const saveInput = (event) => {
    console.log(addElement);
    //console.log(event.target.value);
    SetInputElement(event.target.value);
  };

  const addToArray = () => {
    arrData.push(addElement);
    SetFilterList(arrData);
  };

  const removeItem = (val) => {
    console.log(val);
    const newList = arrData.splice(val, 1);
    console.log(arrData);
    SetFilterList(arrData);
  };

  const Counter = () => {
    var newValue = counterValue;
    newValue++;
    setCounter(newValue);
  };

  return (
    <div className="main">
      <Container fluid>
        <Row className="row-1">
          <Col className="col-1">
            <h6>
              <u>Print from search box</u>
            </h6>
            <br />
            <div>
              <label>Type something: </label>
              <input type="text" name="search-box" onChange={PrintText}></input>
            </div>
            <br />
            <div>
              <p>{data}</p>
            </div>
          </Col>

          <Col className="col-2">
            <h6>
              <u>Search Filter</u>
            </h6>
            <br />
            <div>
              <label>Type something: </label>
              <input
                type="text"
                name="search-box"
                onChange={SearchArray}
              ></input>
            </div>
            <br />
            <div>
              {filterList.map((item) => {
                return <div key={item}>{item}</div>;
              })}
            </div>
          </Col>

          <Col className="col-3">
            <h6>
              <u>Add items to array</u>
            </h6>
            <br />

            <div>
              <label>Item to add: </label>
              <input type="text" name="add" onChange={saveInput}></input>
              <button
                type="submit"
                className="btn btn-success postbutton"
                onClick={addToArray}
              >
                Add
              </button>
            </div>

            <br />
            <div>
              {filterList.map((item, index) => {
                return (
                  <div key={item}>
                    {item} <span onClick={() => removeItem(index)}>remove</span>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>

        <Row className="row-2">
          <Col>
            <h6>
              <ul>Counter</ul>
            </h6>

            <button
              type="submit"
              className="btn btn-success postbutton"
              onClick={Counter}
            >
              Click me!
            </button>

            <div>
              <p>{counterValue}</p>
            </div>
          </Col>

          <Col>Task 5</Col>
          <Col>Task 6</Col>
        </Row>
      </Container>
    </div>
  );
};

export default PracticeStates;
