import { PieArcPlot, PieChart } from '@mui/x-charts';
import { BarChart, barElementClasses  } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const PlotBarChart = ({ data, labels, color, height=200}) => {
    return (
        <div className="plot mt-6">
            <BarChart
                sx={() => ({
                    [`.MuiBarElement-series-auto-generated-id-0`]: {
                        fill: color,
                    },
                    [`.${axisClasses.root}`]: {
                        [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                            strokeWidth: 2,
                            stroke: color,
                        },
                    },
                    backgroundColor: 'transparent',
                })
                }
                xAxis={[
                    { 
                        data: labels, scaleType: 'band', tickPlacement:'middle',
                        barGapRatio: 0.1, //categoryGapRatio: 0.1,                                  
                    }
                ]} 
                yAxis={[{ position: 'none' }]}
                series={[
                    { data: data },
                ]}
                colors={color}
                borderRadius={20}
                height={height}
            />
        </div>
    );
};

const PlotPieChart = ({ data, colors, size }) => {
    const settings = {
        margin: { right: 5 },
        width: size,
        height: size,
        hideLegend: false, 
    };

    return(
        <div>
            <PieChart
                colors={colors}
                series={[
                    { 
                        innerRadius: size/3, outerRadius: size/2, data: data, 
                        cornerRadius: 0, paddingAngle: 0,
                        // arcLabelRadius:100, 
                    }
                ]}
                {...settings}
                slotProps={{
                    legend: {
                    direction: 'horizontal',
                    position: { 
                        vertical: 'bottom',
                        horizontal: 'center'
                    }
                    }
                }}
            />
        </div>
    );
};

export {PlotBarChart, PlotPieChart};