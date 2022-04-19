import "./Resources.css";
import Chart from "react-apexcharts";

const Resources = () => {
  return (
    <div className="resources">
      <Chart className = "cpu"
        type="radialBar"
        width={200}
        height={200}
        series={[12, 34, 65]}
        options={{
          colors: ["#ff0000", "#00ff00", "#87CEEB"],
          // legend:{
          //   show: true,
          //   position: 'left',
          //   fontSize: '5px',
          //   color: '#ffffff'
          // },
          labels: ["15% or less", "15% to 40%", "more than 40%"],
          plotOptions: {
            radialBar: {
              startAngle: 0,
              endAngle: 270,
              // offsetX: -10,
              // offsetY: -10,
              // hollow: {
              //   margin:10,
              //   imageWidth: 300,
              //   imageHeight: 300
              // },
              track: {
                show: false,
                margin: 1,
                // dropShadow: {
                //   enabled:true,
                //   top: 1,
                //   left: 1,
                //   blur: 2,
                //   opacity: 0.5
                // }
              },
              dataLabels: {
                show: true,
                name: {
                  show: true,
                },
                value: {
                  show: true,
                  color: "#ffffff",
                },
                total: {
                  name: {
                    fontSize: "22px",
                    color: "#ffffff",
                  },
                  value: {
                    fontSize: "16px",
                    color: "#ff0000",
                  },
                  show: true,
                  label: "CPU",
                  color: "#ffffff",
                  // formatter:
                },
                track: {
                  // startAngle:
                },
              },
            },
          },
        }}
      ></Chart>
      <Chart className = "memory"
        type="radialBar"
        width={200}
        height={200}
        series={[36, 30, 45]}
        options={{
          colors: ["#ff0000", "#00ff00", "#87CEEB"],
          labels: ["25% or less", "25% to 70%", "more than 70%"],
          plotOptions: {
            radialBar: {
              startAngle: 0,
              endAngle: 270,
              track: {
                show: false,
                margin: 1,
                // dropShadow: {
                //   enabled:true,
                //   top: 1,
                //   left: 1,
                //   blur: 2,
                //   opacity: 0.5
                // }
              },
              dataLabels: {
                show: true,
                name: {
                  show: true,
                },
                value: {
                  show: true,
                  color: "#ffffff",
                },
                total: {
                  name: {
                    fontSize: "22px",
                    color: "#ffffff",
                  },
                  value: {
                    fontSize: "16px",
                    color: "#ff0000",
                  },
                  show: true,
                  label: "Memory",
                  color: "#ffffff",
                  // formatter:
                },
                track: {
                  // startAngle:
                },
              },
            },
          },
        }}
      >text1</Chart>
      <Chart className = "disk"
        type="radialBar"
        width={200}
        height={200}
        series={[41, 30, 40]}
        options={{
          colors: ["#ff0000", "#00ff00", "#87CEEB"],
          labels: ["25% or less", "25% to 50%", "more than 50%"],
          plotOptions: {
            radialBar: {
              startAngle: 0,
              endAngle: 270,
              track: {
                show: false,
                margin: 1,
              },
              dataLabels: {
                show: true,
                name: {
                  show: true,
                },
                value: {
                  show: true,
                  color: "#ffffff",
                },
                total: {
                  name: {
                    fontSize: "22px",
                    color: "#ffffff",
                  },
                  value: {
                    fontSize: "16px",
                    color: "#ff0000",
                  },
                  show: true,
                  label: "DISK",
                  color: "#ffffff",
                  // formatter:
                },
                track: {
                  // startAngle:
                },
              },
            },
          },
        }}
      ></Chart>
      <Chart className="user-count"
      type = 'area'
      width = {580}
      height = {180}
      series = {
        [
          {
            name: 'April',
            data: [6,5,3,5,3,9,5,2,6,8],
          }
        ]
      }
      options={
        {
          stroke: {
            curve: 'straight'
          },
          fill: {
            opacity: 1
          }
        }
      }
      >
      </Chart>
    </div>
  );
};

export default Resources;
