import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';


export default class MainPage extends Component {

    state = {
        loading: true,
        launch_year: [],
        filters: {
            launch_year: '',
            launch_success: '',
            land_success: ''
        },
        radio_buttons: false
    }

    // componentDidMount is use to fetch the api on page load.
    async componentDidMount() {
        var launch_year_arr = [];
        var complete_data;

        const url1 = "https://api.spaceXdata.com/v3/launches?limit=100";
        const response = await fetch(url1);
        const data = await response.json();
        // console.log(data);
        complete_data = data
        for (var i = 0; i < data.length; i++) {
            launch_year_arr.push(data[i].launch_year)
            var filtered_launch_year_array = launch_year_arr.filter(function (item, pos) {
                return launch_year_arr.indexOf(item) === pos;
            });
            this.setState({
                launch_year: filtered_launch_year_array,
                loading: false,
                datas: complete_data

            })
        }
    }

    // addfilter is used to fetch the filter that is clicked and send it to applyFilter to create an api.
    addFilter = (e) => {
        let filter = this.state.filters;
        if (e.target.name === 'launch_year') {
            filter['launch_year'] = e.target.value
            this.setState({
                filters: filter
            });
        } else if (e.target.name === 'launch_success') {
            filter['launch_success'] = e.target.value
            this.setState({
                filters: filter
            });
        } else {
            filter['land_success'] = e.target.value
            this.setState({
                filters: filter
            });
        }
        this.applyFilter();
        document.getElementById('reset-filter').style.display='block';
        }

        // applyFilter is used to fetch the clicked filter and append it to the constant url
        // It fetches the api's according to the filter selected
    applyFilter = () => {
        let url = 'https://api.spaceXdata.com/v3/launches?limit=100';

        if (this.state.filters.launch_success !== undefined && this.state.filters.launch_success !== '') {
            url = url + '&launch_success=' + this.state.filters.launch_success;
        }
        if (this.state.filters.launch_year !== undefined && this.state.filters.launch_year !== '') {
            url = url + '&launch_year=' + this.state.filters.launch_year;
        }
        if (this.state.filters.land_success !== undefined && this.state.filters.land_success !== '') {
            url = url + '&land_success=' + this.state.filters.land_success;
        }

        console.log(url)

        fetch(url, {
            method: "GET",
            dataType: "JSON",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        })
            .then((resp) => {
                return resp.json()
            }).then(resp => (
                //   console.log(resp)
                this.setState({
                    datas: resp
                })
            )
            )

    }

    clearFilters = () => {
        $('.filter_buttons').prop('checked', false);
        window.location.reload();
        document.getElementById('reset-filter').style.display='none';

    }

    render() {
        return (
            <div className="container" id="spacex">
                <h1>SpacEx Launch programs</h1>
                <div className="data-container">
                    <div className="col-filter float-left">
                        <div className="filter">
                            <div className="header">
                                <div className="col name">
                                    Filter
                                </div>
                                <div className="col">
                                    <button className="reset-btn" id="reset-filter" onClick={e => this.clearFilters(e)}>Reset Filters</button>
                                </div>
                            </div>
                            <div className="year-filter">
                                <p align="center" style={launch_year_p}>Launch Year</p>
                                <span style={filter_underline}></span>
                                {this.state.loading || !this.state.launch_year ? (
                                    <div>Loading...</div>
                                ) : (
                                        this.state.launch_year.map(year => (
                                            <label key={"key" + year}>
                                                <input type="radio" name="launch_year" key={"launch_year" + year} value={year} onClick={e => this.addFilter(e)} className="filter_buttons"></input>
                                                <span style={year_button}>{year}</span>
                                            </label>
                                        ))
                                    )
                                }
                            </div>
                            <div className="launch-filter">
                                <p align="center" style={successful_launch_p}>Successful Launch</p>
                                <span style={filter_underline}></span>
                                <label>
                                    <input type="radio" name="launch_success" value="true" onClick={e => this.addFilter(e)} className="filter_buttons"></input>
                                    <span style={year_button}>True</span>
                                </label>
                                <label>
                                    <input type="radio" name="launch_success" value="false" onClick={e => this.addFilter(e)} className="filter_buttons"></input>
                                    <span style={year_button}>False</span>
                                </label>
                            </div>
                            <div className="land-filter">
                                <p align="center" style={successful_Laing_p}>Successful Landing</p>
                                <span style={filter_underline}></span>
                                <label>
                                    <input type="radio" name="land_success" value="true" onClick={e => this.addFilter(e)} className="filter_buttons"></input>
                                    <span style={year_button}>True</span>
                                </label>
                                <label>
                                    <input type="radio" name="land_success" value="false" onClick={e => this.addFilter(e)} className="filter_buttons"></input>
                                    <span style={year_button}>False</span>
                            </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-data float-left">
                        <div className="data">
                            {this.state.loading || !this.state.datas ? (
                                <div>Loading...</div>
                            ) : (this.state.datas.length > 0) ?
                                    this.state.datas.map(function (data, index) {
                                        // console.log(this.state.data)
                                        return (
                                            <div className="card float-left" key={index}>
                                                <div key={index} className="card-details">
                                                <img src={data.links.mission_patch_small} alt="alt_image" style={images}></img>
                                                <p style={mission_name}>{data.mission_name}</p>
                                                <p style={mission_ids}><b>Mission Ids:</b></p>

                                                {data.mission_id.length === 0 ? (
                                                    <li style={mission_ids}>None</li>
                                                ) : (
                                                        data.mission_id.map(function (id, index) {
                                                            return (
                                                                <li style={mission_ids} key={index}>{id}</li>

                                                            )
                                                        })
                                                    )}
                                                <p style={mission_ids}><b>Launch Year:</b>{data.launch_year}</p>
                                                {data.launch_success == null ? (
                                                    <p style={mission_ids}><b>Successful Launch:</b> Details not available</p>
                                                ) : data.launch_success === true ? (
                                                    <p style={mission_ids}><b>Successful Launch:</b> True</p>
                                                ) : (
                                                            <p style={mission_ids}><b>Successful Launch:</b> False</p>

                                                        )}
                                                {data.rocket.first_stage.cores[0].land_success == null ? (
                                                    <p style={mission_ids}><b>Successful Landing:</b> Details not available</p>
                                                ) : data.rocket.first_stage.cores[0].land_success === true ? (
                                                    <p style={mission_ids}><b>Successful Landing:</b> True</p>
                                                ) : (
                                                            <p style={mission_ids}><b>Successful Landing:</b> False</p>
                                                        )}

                                            </div>
                                            </div>
                                        )
                                    }) : <div>No data available for the applied filter</div>
                            }
                        </div>
                    </div>
                </div>
                <div className="dev-details">Developed by: Chaturima M</div>
            </div>
        )
    }
}



let launch_year_p = {
    "padding": "0px",
    "margin": "0px",
    "color": "#7f7f7f"
}

let successful_launch_p = {
    "padding": "0px",
    "margin": "0px",
    "color": "#7f7f7f"
}

let successful_Laing_p = {
    "padding": "0px",
    "margin": "0px",
    "color": "#7f7f7f"
}

let year_button = {
    "color": "#000",
    "margin": "12px",
    "outline": "none",
    "border": "none",
    "borderRadius": "3px",
    "fontSize": "20px",
    "textAlign": "center"
}

let filter_underline = {
    "display": "block",
    "borderBottom": "2px solid #cad0d2",
    "width": "50%",
    "margin": "auto"
}

let images = {
    // "height": "200px",
    // "width": "200px",
    "width":"60%",
    "backgroundColor": "#f2f2f2",
    "margin": "20px",
    "marginBottom": "0px"
}

let mission_name = {
    "color": "#485097",
    "fontWeight": "600",
    "textAlign": "left",
    "marginLeft": "22px",
    "width": "60%",
    "wordWrap": "break-word"
}
let mission_ids = {
    "textAlign": "left",
    "marginLeft": "22px",
    "padding": "0px"
}


