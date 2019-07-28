import React from "react";
import Chart from "react-google-charts";

const pieOptions = {
    title: "",
    pieHole: 0.6,
    slices: [
        {
            color: "#2BB673"
        },
        {
            color: "#d91e48"
        }
    ],
    legend: {
        position: "bottom",
        alignment: "center",
        textStyle: {
            color: "233238",
            fontSize: 12
        }
    },
    tooltip: {
        showColorCode: true
    },
    chartArea: {
        width: "93%",
        height: "93%"
    },
    fontName: "Roboto"
};
class GooglePieChart extends React.Component {
    state = {
        chartImageURI: ""
    };

    render() {
        const { data } = this.props

        return (
            <div className="GoogleChartDiagram">
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={pieOptions}
                    graph_id="PieChart"
                    height={"250px"}
                    width={"250px"}
                    legend_toggle
                />
            </div>
        );
    }
}

export default GooglePieChart
