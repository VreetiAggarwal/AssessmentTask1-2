import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import OutputFile from "../Output";
import classes from "./Upload.module.css";

//TASK 2 --> UI and displaying the data by importing JSON file

export function Upload() {
  const [file, setFile] = useState();
  const [data, setData] = useState({});
  const [select, setSelect] = useState([]);
  const [unselect, setUnSelect] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [move, setMove] = useState(false);
  const fileReader = new FileReader();
  const navigate = useNavigate();

  //functions for submiting the form
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const json = event.target.result;
        setData(json);
        setButtonClicked(true);
      };

      fileReader.readAsText(file);
    }
  };

  //Functions for multiple displaying option component
  const multipleOpitons = async (e) => {
    e.preventDefault();

    if (!select.includes(e.target.id)) {
      setSelect((prevIds) => [...prevIds, e.target.id]);
    }
    console.log(select);
  };

  const unSelectMultipleOpitons = async (e) => {
    e.preventDefault();

    if (!unselect.includes(e.target.id)) {
      setUnSelect((prevIds) => [...prevIds, e.target.id]);
    }
    console.log("unselect:", select);
  };

  const selectOptions = (e) => {
    e.preventDefault();
    setMove(true);
  };

  const unselectOptions = (e) => {
    e.preventDefault();
    setMove(false);
  };

  //sending the data to page Output --> url/output
  useEffect(() => {
    if (data && buttonClicked) {
      navigate("/output", { state: { data, select } });
    }
  }, [data, navigate, buttonClicked]);

  return (
    <>
      <div className={classes.title}>Import Products</div>
      <form className={classes.form}>
        <div className={classes.flex}>
          <div className={classes.step1}>
            <div className={classes.step}>Step 1:</div>
            <div>
              <p className={classes.stext}>Select File</p>
              <input type="file" accept={".json"} onChange={handleChange} />
              <div className={classes.text}>Supported File Type(s): .JSON</div>
            </div>
          </div>

          <div className={classes.step2}>
            <div className={classes.step}>Step 2:</div>
            <div>
              <div className={classes.input}>
                <p className={classes.stext}>File Type</p>
                <select className={classes.select}>
                  <option className={classes.option} value="JSON">
                    JSON
                  </option>
                  <option className={classes.option} value="CSV">
                    CSV
                  </option>
                </select>
              </div>
              <div className={classes.input}>
                <p className={classes.stext}>Character Encoding</p>
                <select className={classes.select}>
                  <option className={classes.option} value="UTF-8">
                    UTF-8
                  </option>
                </select>
              </div>
              <div className={classes.input}>
                <p className={classes.stext}>Delimiter</p>
                <select className={classes.select}>
                  <option className={classes.option} value="comma">
                    comma
                  </option>
                </select>
              </div>
              <div className={classes.input}>
                <div className={classes.stext}>Has Header</div>
                <div>
                  <input type="checkbox" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.step3}>
          <div className={classes.step}>Step 3:</div>
          <div>
            <p className={classes.stext}>Display Heading</p>
            <p className={classes.step}> Select the fields to be displayed</p>
            <div className={classes.multiple}>
              <div>
                <p>Available Fields</p>
                <div className={classes.btn}>
                  {select.includes("Product Id") && move ? (
                    <></>
                  ) : (
                    <button
                      className={classes.bnt2}
                      id="Product Id"
                      onClick={(e) => {
                        multipleOpitons(e);
                      }}
                    >
                      Product Id
                    </button>
                  )}
                  {select.includes("Subcategory") && move ? (
                    <></>
                  ) : (
                    <button
                      className={classes.bnt2}
                      id="Subcategory"
                      onClick={(e) => {
                        multipleOpitons(e);
                      }}
                    >
                      Subcategory
                    </button>
                  )}
                  {select.includes("Title") && move ? (
                    <></>
                  ) : (
                    <button
                      className={classes.bnt2}
                      id="Title"
                      onClick={(e) => {
                        multipleOpitons(e);
                      }}
                    >
                      Title
                    </button>
                  )}
                  {select.includes("Price") && move ? (
                    <></>
                  ) : (
                    <button
                      className={classes.bnt2}
                      id="Price"
                      onClick={(e) => {
                        multipleOpitons(e);
                      }}
                    >
                      Price
                    </button>
                  )}
                  {select.includes("Popularity") && move ? (
                    <></>
                  ) : (
                    <button
                      className={classes.bnt2}
                      id="Popularity"
                      onClick={(e) => {
                        multipleOpitons(e);
                      }}
                    >
                      Popularity
                    </button>
                  )}
                  {select.includes("Description") && move ? (
                    <></>
                  ) : (
                    <button
                      className={classes.bnt2}
                      id="Description"
                      onClick={(e) => {
                        multipleOpitons(e);
                      }}
                    >
                      Description
                    </button>
                  )}
                  {select.includes("Rating") && move ? (
                    <></>
                  ) : (
                    <button
                      className={classes.bnt2}
                      id="Rating"
                      onClick={(e) => {
                        multipleOpitons(e);
                      }}
                    >
                      Rating
                    </button>
                  )}
                  {select.includes("UTM Source") && move ? (
                    <></>
                  ) : (
                    <button
                      className={classes.bnt2}
                      id="UTM Source"
                      onClick={(e) => {
                        multipleOpitons(e);
                      }}
                    >
                      UTM Source
                    </button>
                  )}
                  {select.includes("UTM Medium") && move ? (
                    <></>
                  ) : (
                    <button
                      className={classes.bnt2}
                      id="UTM Medium"
                      onClick={(e) => {
                        multipleOpitons(e);
                      }}
                    >
                      UTM Medium
                    </button>
                  )}
                </div>
              </div>
              <div>
                <div>
                  <button
                    className={classes.btn1}
                    onClick={(e) => {
                      selectOptions(e);
                    }}
                  >
                    {">>"}
                  </button>
                </div>
                <div>
                  <button
                    className={classes.btn1}
                    onClick={(e) => {
                      unselectOptions(e);
                    }}
                  >
                    {"<<"}
                  </button>
                </div>
              </div>
              <div>
                <p>Fields to be Displayed</p>
                <div className={classes.btn}>
                  {move &&
                    select.map((id) => (
                      <button
                        className={classes.bnt2}
                        onClick={(id) => {
                          unSelectMultipleOpitons(id);
                        }}
                        key={id}
                      >
                        {id}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className={classes.button}>
            <div>
              <button
                className={classes.btn3}
                onClick={(e) => {
                  handleOnSubmit(e);
                }}
              >
                Next
              </button>
            </div>
            <div>
              <button className={classes.btn4}>Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
