import React from "react";
import { Component, Fragment } from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Kashmir_back from "./assets/images/Kasmir_tripPlanner_first.jpg";
import Kashmir_Day4 from "./assests/images/Kashmir_Day4.jpg";
import Kashmir_Day3 from "./assets/images/Kashmir_Day3.jpg";
import Kashmir_Day2 from "./assets/images/Kashmir_Day2.jpg";
import Kashmir_Day1 from "./assets/images/Kashmir_Day1.jpg";

import "../stylesheets/TripPlanner.css";

class TripPlanner extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid" id="head">
          <img
            style={{ height: "650px" }}
            className="d-block w-100"
            src={Kashmir_back}
          />
          <div className="bottom-left">
            <span>
              <h1>
                <strong>Paradise on Earth: KASHMIR</strong>
              </h1>
            </span>
          </div>
        </div>
        <br />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 offset-1 text-justify">
              <p>
                <h5>
                  Kashmir Holiday tour is for the workaholic who never find time
                  to take a break or in case you are running on tight schedule.
                  This Kashmir Holiday tour is perfect for you in just three
                  days, where you can visit the most exotic location of Kashmir
                  like Srinagar the capital city have a stay in houseboat take a
                  Shikara ride, visit floating gardens Mughal gardens, Shankar
                  Acharya temple, visit Gulmarg ride the highest cable car in
                  Asia and if you like adventure just get some skis and ski in
                  Asia's best ski resort.
                </h5>
              </p>
              <span>
                <h3>Detailed Itinerary</h3>
              </span>
              <br />
              <span>
                <h5>
                  <strong>DAY 1</strong>
                </h5>
              </span>

              <div className="card border-dark text-white bg-dark">
                <img
                  className="card-img-top"
                  src={Kashmir_Day1}
                  height="300"
                  width="300"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Arrival at Srinagar</h5>
                  <p className="card-text">
                    <span>
                      On your arrival at the Srinagar International Airport, you
                      will be taken for a 35 minutes drive through the heart of
                      New Srinagar city, passing the Abdullah bridge which
                      connects the banks of the Jehlum river, local sightseeing
                      that includes a visit to the famous Mughal gardens of
                      Nishat garden, Shalimar garden, Chashmashahi, Parimahal,
                      We will explore the gardens and later drive back to the
                      hotel for a inner and overnight stay at Srinagar hotel.
                    </span>
                    <br />
                  </p>
                </div>
              </div>
              <br />
              <span>
                <h5>
                  <strong>DAY 2</strong>
                </h5>
              </span>

              <div className="card border-dark text-white bg-dark">
                <img
                  className="card-img-top"
                  src={Kashmir_Day2}
                  height="300"
                  width="300"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Srinagar To Pahalgam</h5>
                  <p className="card-text">
                    <span>
                      After breakfast, we drive to Pahalgam via Pampore,
                      Avantipura and the village of Bijbehara which remains
                      famous as the bread basket of Kashmir. We switch from the
                      national highway 1A at Khanabal and drive through the
                      second largest city of Anantnag. From here the road turns
                      scenic as we drive parallel on the Lidder river flowing
                      from the opposite direction. In Pahalgam, visit Betaab
                      Valley and Chandanwari as well as take a horse riding trip
                      to Baisaran meadows. After sightseeing around the mountain
                      valley for most of the day. Later drive to Srinagar and
                      overnight stay at Srinagar hotel.
                    </span>
                    <br />
                  </p>
                </div>
              </div>
              <br />
              <span>
                <h5>
                  <strong>DAY 3</strong>
                </h5>
              </span>

              <div className="card border-dark text-white bg-dark">
                <img
                  className="card-img-top"
                  src={Kashmir_Day3}
                  height="300"
                  width="300"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Srinagar To Gulmarg</h5>
                  <p className="card-text">
                    <span>
                      After breakfast in the morning, proceed towards Gulmarg.
                      Enroute you get to see the beautiful Tangmarg town and
                      drive ahead on a scenic drive of 14 kilometers to Gulmarg.
                      Arrive in Gulmarg early in the afternoon and check in at
                      the hotel. Later, begin a short tour, boarding the Gondola
                      cable car system (the 08 minutes ropeway). Descend back to
                      Gulmarg after an hour and later indulge in some
                      horse-riding. In the evening enjoy famous Shikara ride in
                      Dal lake, overnight stay at Houseboat.
                    </span>
                    <br />
                  </p>
                </div>
              </div>
              <br />
              <span>
                <h5>
                  <strong>DAY 4</strong>
                </h5>
              </span>

              <div className="card border-dark text-white bg-dark">
                <img
                  className="card-img-top"
                  src={Kashmir_Day4}
                  height="300"
                  width="300"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">A stay at a houseboat in Dal Lake and Departure</h5>
                  <p className="card-text">
                    <span>
                      A private cab will transfer you to a
                      jetty around the Dal Lake. It is at the jetty that the
                      houseboats are docked. Check-in to the houseboat and relax
                      before heading to a Shikara ride to the Nehru Park in the
                      evening. The last day of this Kashmir tour
                      concludes with a dinner and an overnight stay in the
                      houseboat at Dal Lake. Next day after breakfast, we will assist you
                      with transfers to airport to fly back to your home with
                      sweet memories of BEEN THERE.
                    </span>
                    <br />
                  </p>
                </div>
              </div>
              <br />
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default TripPlanner;
