import React from "react";
import Navbar from "../componets/com_home/Navbar";
import Card from "../componets/com_home/Card";
import Footer from "../componets/com_home/Footer";
import Cursol from "../componets/com_home/Cursol";
import SerchBar from "../componets/com_home/SerchBar";
import { useState, useEffect } from "react";

export default function Home() {
  const [Serch, setSerch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Navbar />
      {/* <Cursol/> */}
      {/* serch bar code */}
      <nav class="navbar navbar-light bg-light justify-content-evenly">
        <a class="navbar-brand">Food Deliver : Search your fovrate food </a>
        <form class="form-inline flex">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={Serch}
            onChange={(e) => setSerch(e.target.value)}
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>

      <div className="container">
        {foodCat.map((data) => {
          //row mb-3
          return (
            <div key={data._id} className="">
              {" "}<hr/>
              <div className="flex active fs-4">  {data.catagory} </div>
              <div>
                <div className="flex flex-wrap">
                  {foodItem
                    .filter(
                      (item) =>
                        item.catagory === data.catagory &&
                        item.foodName
                          .toLowerCase()
                          .includes(Serch.toLowerCase())
                    )
                    .map((filterData) => {
                      return (
                        // col-12 col-md-6 col-lg-3
                        <div className="">
                          <Card
                            name={filterData.foodName}
                            img={filterData.img}
                            discription={filterData.discription}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
