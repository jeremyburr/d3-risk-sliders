import React, { Component } from 'react'
import * as d3 from 'd3' 

class Scale extends Component {

	componentDidMount() {

		let colormap = {
				0: "#2C9C0B",
				1: "#55AF09",
				2: "#81C506",
				3: "#ACD904",
				4: "#D4ED02",
				5: "#FAFD00",
				6: "#FBC605",
				7: "#FD830B",
				8: "#FE530F",
				9: "#FF2712",
				10: "#FF1414",
		}

		let data = [this.props.value]; 
			var margin = {top: 100, right: 100, bottom: 100, left: 100},
					width = 560 - margin.left - margin.right,
					height = 130 - margin.top - margin.bottom;

			var x = d3.scaleLinear()
					.domain([0,10])
					.range([0,width]);

			var xAxis = d3.axisBottom()
					.tickSize(15)
					.scale(x)

			var svg = d3.select("svg#"+this.props.id)
					.attr("width", width + margin.left + margin.right)
					.attr("height", height + margin.top + margin.bottom)
				.append("g")
					.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			let defs = svg.append("defs");

			defs.append("linearGradient")

			svg.append("g")
					.attr("class", "x axis")
					.call(xAxis); 
			
			svg.selectAll("rect")
				.data(data)
				.enter().append("rect")
				.attr("width", "15") 
				.attr("height", "50")
				.attr("x", (data/10*width)-10)
				.attr("y", "-25")
				.style("fill",colormap[this.props.value])
				.style("stroke","#222")

			d3.selectAll("g.x.axis g.tick line")
				.attr("y2", function(d) {
					if ((d === 0) || (d === 10) ) { 
						return 10 
					}
					return 10 
				})
				.attr("y1", function(d) {
					if ((d===0)||(d===10)) {
						return -10 
					}
					return -10
				}); 

				svg.append("text")
					.attr("width", "20px")
					.attr("height", "20px")
					.attr("x", data/10*width-7)
					.attr("y", "6")
					.text([this.props.value])
					.style("fill", "#000" )
					.style("font-weight","bold")
					.style("font-size","16px")

				svg.append("text")
					.style("fill", "#000" )
					.style("font-weight","bold")
					.style("font-size","20px")
					.text([this.props.category])
					.attr("y", "-50")

				{this.props.category}
	} 

  render() {
		
    return (
      <div>
				<svg id={this.props.id}>
					<defs>
						<linearGradient id="lineargradient">
						 <stop offset="0" stopColor="green"/>
						 <stop offset=".5" stopColor="yellow"/>
						 <stop offset="1" stopColor="red"/>
						</linearGradient>
					</defs>
				</svg>
			</div>
    );
  }
}

export default Scale
