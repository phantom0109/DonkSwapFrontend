import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
import useGetBnbPriceData from 'hooks/useGetBnbPriceData';

export function PriceChart({ chartData }) {
    const [chartDataMapped, setChartDataMapped] = useState([]);
    const [chartOptions, setChartOptions] = useState({
        chart: {
            zoom: {
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                show: false,
                tools: {
                    download: false,
                    selection: false,
                    zoom: false,
                    pan: false
                }
            },
            sparkline: {
                enabled: false
            },
            background: 'none',
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: '#49e287',
                    downward: '#f83245'
                }
            }
        },
        // labels: props.chartLabels,
        fill: {
            // opacity: 0.85,
            // colors: ['#2ebc7f', '#f83245']
        },
        colors: ['#49c18d', '#f83245'],
        legend: {
            show: false
        },
        grid: {
            show: true,
            strokeDashArray: 0,
            // position: 'back',
            borderColor: '#9f64d2',
            xaxis: {
                lines: {
                    show: true
                }
            },
            // column: {
            //     colors: undefined,
            //     opacity: 0.1
            // },  
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 10
            }
        },
        tooltip: {
            enabled: true,
            style: {
                fontSize: '10px',
                fontFamily: 'Heebo,sans-serif'
            },
            custom: function ({ seriesIndex, dataPointIndex, w }) {
                const o = w.globals.seriesCandleO[seriesIndex][dataPointIndex]
                const h = w.globals.seriesCandleH[seriesIndex][dataPointIndex]
                const l = w.globals.seriesCandleL[seriesIndex][dataPointIndex]
                const c = w.globals.seriesCandleC[seriesIndex][dataPointIndex]
                return (
                    '<div class="apexcharts-tooltip-candlestick">' +
                    '<div>Open: <span class="value">' +
                    o +
                    '</span></div>' +
                    '<div>High: <span class="value">' +
                    h +
                    '</span></div>' +
                    '<div>Low: <span class="value">' +
                    l +
                    '</span></div>' +
                    '<div>Close: <span class="value">' +
                    c +
                    '</span></div>' +
                    '</div>'
                )
            }
        },
        title: {
            text: 'Weekly Price Peformance',
            margin: 1,
            offsetY: 5,
            style: {
                fontFamily: 'Heebo,sans-serif',
                color: '#fff',
                fontSize: '12px'
            }
        },
        xaxis: {
            labels: {
                show: false
            }
        },
        yaxis: {
            logarithmic: true,
            // tickAmount: '1',
            //min: .0000000046,
            labels: {
                style: {
                    colors: '#fff',
                    fontSize: '8px'
                },
                trim: true
            }
        }
    });

    const priceData = useGetBnbPriceData();

    useEffect(() => {
        // map to chart data
        let _chartDataMapped = [
            { data: [] }
        ]

        if (chartData !== undefined && chartData.ethereum.dexTrades.length > 0 && priceData !== undefined && priceData !== null) {
            let bnbPrice = priceData.market_data.current_price.usd;

            const mappedData = chartData.ethereum.dexTrades.map(item => {
                return {
                    x: new Date(item.timeInterval.minute),
                    y: [
                        formatPrice(bnbPrice * parseFloat(item.open_price)),
                        formatPrice(bnbPrice * parseFloat(item.maximum_price)),
                        formatPrice(bnbPrice * parseFloat(item.minimum_price)),
                        formatPrice(bnbPrice * parseFloat(item.close_price)),
                    ]
                }
            })

            _chartDataMapped[0].data = mappedData;
            setChartDataMapped(_chartDataMapped);
            setChartOptions(chartOptions);
        }
    }, [chartData, priceData])

    const formatPrice = (price) => {
        price = parseFloat(price);
        return price < .0001 ? price.toFixed(10) : price < 1 ? price.toFixed(4) : price.toFixed(2)
    }
    return (
        <>
            <Chart
                options={chartOptions}
                series={chartDataMapped}
                type="candlestick"
                width='90%'
                style={{marginTop: '10px', padding: '5px'}}
            />
        </>
    )
}