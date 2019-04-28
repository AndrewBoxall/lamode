import React, { Component } from 'react';
import './SizeGuide.css';

class SizeGuide extends Component {
  render() {
    return (
		<>
		<p className="sizeGuide"><br />Size Guide</p>
			<div className="sizeGuideDropdown">
				<p>MENS TOPS</p>
				<table className="sizeTable">
					<tr><th>SIZE</th><th>CHEST</th><th>WAIST</th><th>HIPS</th></tr>
					<tr>
						<td>S</td><td>100CM</td><td>80CM</td><td>90CM</td>
					</tr>
					<tr>
						<td>M</td><td>105CM</td><td>82CM</td><td>92CM</td>
					</tr>
					<tr>
						<td>L</td><td>110CM</td><td>84CM</td><td>94CM</td>
					</tr>
					<tr>
						<td>XL</td><td>115CM</td><td>86CM</td><td>96CM</td>
					</tr>
					<tr>
						<td>XXL</td><td>120CM</td><td>88CM</td><td>98CM</td>
					</tr>
				</table>

				<p>MENS BOTTOMS</p>
				<table className="sizeTable">
					<tr><th>SIZE</th><th>WAIST</th><th>HIPS</th><th>INSIDE LEG</th></tr>
					<tr>
						<td>S</td><td>100CM</td><td>80CM</td><td>90CM</td>
					</tr>
					<tr>
						<td>M</td><td>105CM</td><td>82CM</td><td>94CM</td>
					</tr>
					<tr>
						<td>L</td><td>110CM</td><td>84CM</td><td>98CM</td>
					</tr>
					<tr>
						<td>XL</td><td>115CM</td><td>86CM</td><td>102CM</td>
					</tr>
					<tr>
						<td>XXL</td><td>120CM</td><td>88CM</td><td>106CM</td>
					</tr>
				</table>
			</div>
		</>
		);
	}
}
export default SizeGuide;