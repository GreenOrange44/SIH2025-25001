import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const LineRaceChart = () => {
    const [option, setOption] = useState(null);

    useEffect(() => {
        const rawData = [
            { Year: 2008, Disease: "Diarrhoea", Cases: 228 },
            { Year: 2008, Disease: "Cholera", Cases: 20 },
            { Year: 2008, Disease: "Typhoid", Cases: 17 },
            { Year: 2008, Disease: "Malaria", Cases: 44 },
            { Year: 2008, Disease: "Chikungunya", Cases: 25 },

            { Year: 2009, Disease: "Diarrhoea", Cases: 332 },
            { Year: 2009, Disease: "Cholera", Cases: 34 },
            { Year: 2009, Disease: "Typhoid", Cases: 42 },
            { Year: 2009, Disease: "Malaria", Cases: 34 },
            { Year: 2009, Disease: "Chikungunya", Cases: 61 },

            { Year: 2010, Disease: "Diarrhoea", Cases: 411 },
            { Year: 2010, Disease: "Cholera", Cases: 34 },
            { Year: 2010, Disease: "Typhoid", Cases: 22 },
            { Year: 2010, Disease: "Malaria", Cases: 37 },
            { Year: 2010, Disease: "Chikungunya", Cases: 26 },

            { Year: 2011, Disease: "Diarrhoea", Cases: 532 },
            { Year: 2011, Disease: "Cholera", Cases: 58 },
            { Year: 2011, Disease: "Typhoid", Cases: 31 },
            { Year: 2011, Disease: "Malaria", Cases: 86 },
            { Year: 2011, Disease: "Chikungunya", Cases: 77 },

            { Year: 2012, Disease: "Diarrhoea", Cases: 467 },
            { Year: 2012, Disease: "Cholera", Cases: 94 },
            { Year: 2012, Disease: "Typhoid", Cases: 70 },
            { Year: 2012, Disease: "Malaria", Cases: 12 },
            { Year: 2012, Disease: "Chikungunya", Cases: 55 },

            { Year: 2013, Disease: "Diarrhoea", Cases: 576 },
            { Year: 2013, Disease: "Cholera", Cases: 96 },
            { Year: 2013, Disease: "Typhoid", Cases: 63 },
            { Year: 2013, Disease: "Malaria", Cases: 43 },
            { Year: 2013, Disease: "Chikungunya", Cases: 72 },

            { Year: 2014, Disease: "Diarrhoea", Cases: 344 },
            { Year: 2014, Disease: "Cholera", Cases: 38 },
            { Year: 2014, Disease: "Typhoid", Cases: 32 },
            { Year: 2014, Disease: "Malaria", Cases: 53 },
            { Year: 2014, Disease: "Chikungunya", Cases: 63 },

            { Year: 2015, Disease: "Diarrhoea", Cases: 450 },
            { Year: 2015, Disease: "Cholera", Cases: 45 },
            { Year: 2015, Disease: "Typhoid", Cases: 43 },
            { Year: 2015, Disease: "Malaria", Cases: 88 },
            { Year: 2015, Disease: "Chikungunya", Cases: 46 },

            { Year: 2016, Disease: "Diarrhoea", Cases: 709 },
            { Year: 2016, Disease: "Cholera", Cases: 115 },
            { Year: 2016, Disease: "Typhoid", Cases: 97 },
            { Year: 2016, Disease: "Malaria", Cases: 39 },
            { Year: 2016, Disease: "Chikungunya", Cases: 50 },

            { Year: 2017, Disease: "Diarrhoea", Cases: 115 },
            { Year: 2017, Disease: "Cholera", Cases: 2 },
            { Year: 2017, Disease: "Typhoid", Cases: 8 },
            { Year: 2017, Disease: "Malaria", Cases: 3 },
            { Year: 2017, Disease: "Chikungunya", Cases: 17 },

            // Predicted values (2018–2024)
            { Year: 2018, Disease: "Diarrhoea", Cases: 460 },
            { Year: 2018, Disease: "Cholera", Cases: 50 },
            { Year: 2018, Disease: "Typhoid", Cases: 40 },
            { Year: 2018, Disease: "Malaria", Cases: 60 },
            { Year: 2018, Disease: "Chikungunya", Cases: 35 },

            { Year: 2019, Disease: "Diarrhoea", Cases: 470 },
            { Year: 2019, Disease: "Cholera", Cases: 55 },
            { Year: 2019, Disease: "Typhoid", Cases: 43 },
            { Year: 2019, Disease: "Malaria", Cases: 62 },
            { Year: 2019, Disease: "Chikungunya", Cases: 38 },

            { Year: 2020, Disease: "Diarrhoea", Cases: 480 },
            { Year: 2020, Disease: "Cholera", Cases: 60 },
            { Year: 2020, Disease: "Typhoid", Cases: 45 },
            { Year: 2020, Disease: "Malaria", Cases: 65 },
            { Year: 2020, Disease: "Chikungunya", Cases: 40 },

            { Year: 2021, Disease: "Diarrhoea", Cases: 490 },
            { Year: 2021, Disease: "Cholera", Cases: 62 },
            { Year: 2021, Disease: "Typhoid", Cases: 48 },
            { Year: 2021, Disease: "Malaria", Cases: 68 },
            { Year: 2021, Disease: "Chikungunya", Cases: 42 },

            { Year: 2022, Disease: "Diarrhoea", Cases: 500 },
            { Year: 2022, Disease: "Cholera", Cases: 64 },
            { Year: 2022, Disease: "Typhoid", Cases: 50 },
            { Year: 2022, Disease: "Malaria", Cases: 70 },
            { Year: 2022, Disease: "Chikungunya", Cases: 44 },

            { Year: 2023, Disease: "Diarrhoea", Cases: 510 },
            { Year: 2023, Disease: "Cholera", Cases: 66 },
            { Year: 2023, Disease: "Typhoid", Cases: 52 },
            { Year: 2023, Disease: "Malaria", Cases: 72 },
            { Year: 2023, Disease: "Chikungunya", Cases: 46 },

            { Year: 2024, Disease: "Diarrhoea", Cases: 520 },
            { Year: 2024, Disease: "Cholera", Cases: 70 },
            { Year: 2024, Disease: "Typhoid", Cases: 55 },
            { Year: 2024, Disease: "Malaria", Cases: 75 },
            { Year: 2024, Disease: "Chikungunya", Cases: 48 },
        ];

        const diseases = ["Diarrhoea", "Cholera", "Typhoid", "Malaria", "Chikungunya"];

        const datasetWithFilters = [];
        const seriesList = [];

        echarts.util.each(diseases, (disease) => {
            const datasetId = "dataset_" + disease;
            datasetWithFilters.push({
                id: datasetId,
                fromDatasetId: "dataset_raw",
                transform: {
                    type: "filter",
                    config: {
                        and: [{ dimension: "Disease", "=": disease }],
                    },
                },
            });

            seriesList.push({
                type: "line",
                datasetId: datasetId,
                showSymbol: true,
                name: disease,
                endLabel: {
                    show: true,
                    formatter: (params) => {
                        return params.seriesName + ": " + params.value[1];
                    },
                },
                labelLayout: {
                    moveOverlap: "shiftY",
                },
                emphasis: {
                    focus: "series",
                },
                encode: {
                    x: "Year",
                    y: "Cases",
                    label: ["Disease", "Cases"],
                    itemName: "Year",
                    tooltip: ["Cases"],
                },
            });
        });

        setOption({
            animationDuration: 2000,
            color: ["#5470C6", "#91CC75", "#FAC858", "#EE6666", "#73C0DE"], // fixed colors
            dataset: [
                {
                    id: "dataset_raw",
                    source: rawData,
                },
                ...datasetWithFilters,
            ],
            title: {
                text: "Water-Borne Disease Cases in India (2008–2024)",
            },
            tooltip: {
                order: "valueDesc",
                trigger: "axis",
            },
            legend: {
                show: true,
                top: 30,
            },
            xAxis: {
                type: "category",
                nameLocation: "middle",
            },
            yAxis: {
                name: "Number of Cases",
            },
            grid: {
                right: 140,
            },
            series: seriesList,
        });
    }, []);

    if (!option) return <p>Loading chart...</p>;

    return <ReactECharts option={option} style={{ height: "500px", width: "100%" }} />;
};

export default LineRaceChart;
