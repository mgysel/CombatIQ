import { Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";


    const RadarBar = (props) => {

          const [mydata, setData] = useState(props.data);
          
          const series = [{
            name: '',
            data: mydata,
          }];
          
          const options = {
            chart: {
              height: 350,
              type: 'radar',
            },
            dataLabels: {
              enabled: true
            },
            plotOptions: {
              radar: {
                size: 140,
                polygons: {
                  strokeColors: '#e9e9e9',
                  fill: {
                    colors: ['#f8f8f8', '#fff']
                  },
                },
              },
            },
            title: {
              text: ''
            },
            colors: ['#047529'],
            markers: {
              size: 4,
              colors: ['#fff'],
              strokeColor: '#047529',
              strokeWidth: 2,
            },
            tooltip: {
              y: {
                formatter: function(val) {
                  return val
                },
              },
            },
            xaxis: {
              categories: ['Speed', 'Power', 'Aggressiveness', 'Technique', 'Stamina']
            },
            yaxis: {
              tickAmount: 7,
              labels: {
                formatter: function(val, i) {
                  if (i % 2 === 0) {
                    return val
                  } else {
                    return ''
                  }
                },
              },
            },
          };
          
          return (
              <Stack width="400px">
                <ReactApexChart options={options} series={series} type="radar" height={350} />
              </Stack>
          );
        };


export default RadarBar;