import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const IntensityBar = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');

        const myChart = new Chart(ctx, {
            type: 'bar', 
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], 
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3, 20], 
                    backgroundColor: '#00B4BE26',
                    borderColor: '#00B4BE26',
                    borderRadius: 5,
                    barThickness: 25,
                    barPercentage: 0.5, 
                    categoryPercentage: 0.5,
                    borderSkipped: false, 
                }],
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    }
                },
                scales: {
                    x: {
                        display: true,
                        grid: {
                            display: false
                        },
                        border: {
                            display: false,
                        },
                        ticks: {
                            font: {
                                size: 10,
                                color: '#161A4147',
                                weight: 'bold',
                            },
                            maxRotation: 0,
                            autoSkip: false,
                        },
                    },
                    y: {
                        display: false,
                        beginAtZero: true,
                        grid: {
                            display: false,
                        },
                    },
                },
            },
        });

        return () => {
            myChart.destroy();
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default IntensityBar;
