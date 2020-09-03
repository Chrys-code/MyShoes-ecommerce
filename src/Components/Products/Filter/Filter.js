import React, { Component } from "react";
import "./FilterStyle.scss";

export class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count}</div>
        <div className="filter-sort">
          <p>Order</p>
          <select value={this.props.size} onChange={this.props.sortProducts}>
            <option value="">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          <p>Filter</p>
          <select value={this.props.size} onChange={this.props.filterProducts}>
            <option value="">ALL</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
            <option value="46">46</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filter;
