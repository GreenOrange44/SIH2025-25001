import '../../assets/css/Dashboard.css';
import Barplot from '../ChartsandGraphs/Barplot';
import DoughnutChart1 from '../ChartsandGraphs/DoughnutChart1';
import DoughnutChart2 from '../ChartsandGraphs/DoughnutChart2';
import AreaChartComponent from '../ChartsandGraphs/AreaChart';
import PieChart from '../ChartsandGraphs/Piechart';
import StackedLineChart from '../ChartsandGraphs/StackedLineChart';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import LineRaceChart from '../ChartsandGraphs/LineRaceChart';

const Dashboard = () => {
    return (
        <>
            <Navbar />

            <div className="container-fluid" style={{ backgroundColor: '#f7f7f7ff' }}>

                <main className="content">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">

                    </div>
                    &nbsp;&nbsp;

                    <div className="row justify-content-md-center">
                        <div className="col-12 col-sm-6 col-xl-4 mb-4">
                            <div className="card border-light shadow-sm">
                                <div className="card-body">
                                    <div className="row d-block d-xl-flex align-items-center">
                                        <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                                            <div className="icon icon-shape icon-md icon-shape-primary rounded mr-4 mr-sm-0"><span className="fas fa-chart-line"></span></div>
                                            <div className="d-sm-none">
                                                <h2 className="h5">Reported Symptoms</h2>
                                                <h3 className="mb-1">1,245</h3>
                                            </div>
                                        </div>
                                        <div className="col-12 col-xl-7 px-xl-0">
                                            <div className="d-none d-sm-block">
                                                <h2 className="h5">Reported Symptoms</h2>
                                                <h3 className="mb-1">1,245</h3>
                                            </div>
                                            <small>Last 30 days,  <span className="icon icon-small"><span className="fas fa-map-marker-alt"></span></span> India</small>
                                            <div className="small mt-2">
                                                <span className="fas fa-angle-up text-success"></span>
                                                <span className="text-success font-weight-bold">+12.4%</span> vs previous period
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4 mb-4">
                            <div className="card border-light shadow-sm">
                                <div className="card-body">
                                    <div className="row d-block d-xl-flex align-items-center">
                                        <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                                            <div className="icon icon-shape icon-md icon-shape-tertiary rounded mr-4"><span className="fas fa-users"></span></div>
                                            <div className="d-sm-none">
                                                <h2 className="h5">Predicted Hotspots</h2>
                                                <h3 className="mb-1">8</h3>
                                            </div>
                                        </div>
                                        <div className="col-12 col-xl-7 px-xl-0">
                                            <div className="d-none d-sm-block">
                                                <h2 className="h5">Predicted Hotspots</h2>
                                                <h3 className="mb-1">8</h3>
                                            </div>
                                            <small>Last 7 days  <span className="icon icon-small"><span className="fas fa-globe-europe"></span></span> Forecast</small>
                                            <div className="small mt-2">
                                                <span className="fas fa-angle-up text-success"></span>
                                                <span className="text-success font-weight-bold">28.2%</span> Since last month
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4 mb-4">
                            <div className="card border-light shadow-sm">
                                <div className="card-body">
                                    <div className="row d-block d-xl-flex align-items-center">
                                        <div className="col-12 col-xl-5 text-xl-center mb-2 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                                            <DoughnutChart1 />
                                        </div>
                                        <div className="col-12 col-xl-7 px-xl-0">
                                            <h2 className="h5">Water Quality Status</h2>
                                            <div className="mb-3 small">Last 30 days</div>
                                            <h6 className="font-weight-normal text-gray"><span className="icon w-20 icon-xs icon-secondary mr-1"></span> Safe <a href="#" className="h6">70%</a></h6>
                                            <h6 className="font-weight-normal text-gray"><span className="icon w-20 icon-xs icon-primary mr-1"></span> Risky <a href="#" className="h6">30%</a></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4 mb-4">
                            <div className="card border-light shadow-sm">
                                <div className="card-body d-flex flex-row align-items-center flex-0">
                                    <div className="d-block">
                                        <div className="h6 font-weight-normal text-gray mb-2">Weekly Reports</div>
                                        <h2 className="h3">312</h2>
                                        <div className="small mt-2">
                                            <span className="fas fa-angle-up text-success"></span>
                                            <span className="text-success font-weight-bold">18.2%</span>
                                        </div>
                                    </div>
                                    <div className="d-block ml-auto">
                                        <div className="d-flex align-items-center text-right mb-2">
                                            <span className="shape-xs rounded-circle bg-primary mr-2"></span>
                                            <span className="font-weight-normal small">Symptoms</span>
                                        </div>
                                        <div className="d-flex align-items-center text-right">
                                            <span className="shape-xs rounded-circle bg-secondary mr-2"></span>
                                            <span className="font-weight-normal small">Water</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-2">
                                    <Barplot />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-4 mb-4">
                            <div className="card border-light shadow-sm">
                                <div className="card-body d-flex flex-row align-items-center flex-0">
                                    <div className="d-block">
                                        <div className="h6 font-weight-normal text-gray mb-2">Dominant Bacteria</div>
                                        <h2 className="h4">Fecal Coliform</h2>
                                        <div className="small mt-2">
                                            <span className="fas fa-angle-up text-success"></span>
                                            <span className="text-success font-weight-bold"> 6.57%</span>
                                        </div>
                                    </div>
                                    <div className="d-block ml-auto">
                                        <div className="d-flex align-items-center text-right mb-2">
                                            <span className="shape-xs rounded-circle mr-2" style={{ backgroundColor: '#0a47a1' }}></span>
                                            <span className="font-weight-normal small">Fecal Coliform</span>
                                        </div>
                                        <div className="d-flex align-items-center text-right mb-2">
                                            <span className="shape-xs rounded-circle mr-2" style={{ backgroundColor: '#ff0073ff' }}></span>
                                            <span className="font-weight-normal small">Fecal Streptococci</span>
                                        </div>
                                        <div className="d-flex align-items-center text-right mb-2">
                                            <span className="shape-xs rounded-circle mr-2" style={{ backgroundColor: '#ffce56' }}></span>
                                            <span className="font-weight-normal small">E.Coli</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-2">
                                    <PieChart />
                                </div>
                            </div>
                        </div>
                        <div className="col-12  col-lg-6 col-xl-4 mb-4">
                            <div className="card border-light shadow-sm">
                                <div className="card-body d-flex flex-row align-items-center flex-0">
                                    <div className="d-block">
                                        <div className="h6 font-weight-normal text-gray mb-2">pH Range Distribution</div>
                                        <h2 className="h4">Water Samples</h2>
                                        <div className="small mt-2">
                                            <span className="fas fa-angle-up text-success"></span>
                                            <span className="text-success font-weight-bold"> 10.57%</span>
                                        </div>
                                    </div>
                                    <div className="d-block ml-auto">
                                        <div className="d-flex align-items-center text-right mb-2">
                                            <span className="shape-xs rounded-circle bg-secondary mr-2"></span>
                                            <span className="font-weight-normal small">pH &lt; 6.5</span>
                                        </div>
                                        <div className="d-flex align-items-center text-right mb-2">
                                            <span className="shape-xs rounded-circle bg-tertiary mr-2"></span>
                                            <span className="font-weight-normal small">6.5 ≤ pH ≤ 8.5</span>
                                        </div>
                                        <div className="d-flex align-items-center text-right mb-2">
                                            <span className="shape-xs rounded-circle bg-primary mr-2"></span>
                                            <span className="font-weight-normal small">pH &gt; 8.5</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-2">
                                    <DoughnutChart2 />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-4">
                            <div className="row">
                                <div className="col-12 mb-4">
                                    <div className="card border-light shadow-sm">
                                        <div className="card-body d-flex flex-row align-items-center flex-0">
                                            <div className="d-block">
                                                <div className="h6 font-weight-bold text-black mb-2">Water Quality Parameters </div>

                                                {/* <div className="small mt-2">
                                                    <span className="fas fa-angle-up text-success"></span>
                                                    <span className="text-success font-weight-bold">$10.57%</span>
                                                </div> */}
                                            </div>
                                            <div className="d-flex ml-auto">
                                                <a href="#" className="btn btn-tertiary btn-sm mr-3">Year</a>
                                                <a href="#" className="btn btn-tertiary btn-sm mr-3">Month</a>
                                            </div>
                                        </div>
                                        <div className="card-body p-2">
                                            <StackedLineChart />
                                        </div>
                                    </div>
                                    &nbsp;
                                </div>
                                <div className="col-12 mb-4">
                                    <div className="card border-light shadow-sm">
                                        <div className="card-body d-flex flex-row align-items-center flex-0">
                                            {/* <div className="d-block">
                                                <div className="h6 font-weight-normal text-gray mb-2">Reports Trend</div>
                                                <h2 className="h3">10,567</h2>
                                                <div className="small mt-2">
                                                    <span className="fas fa-angle-up text-success"></span>
                                                    <span className="text-success font-weight-bold">$10.57%</span>
                                                </div>
                                            </div> */}
                                            <div className="d-flex ml-auto">
                                                <a href="#" className="btn btn-tertiary btn-sm mr-3">Year</a>
                                                <a href="#" className="btn btn-tertiary btn-sm mr-3">Month</a>
                                            </div>
                                        </div>
                                        <div className="card-body p-2">
                                            <LineRaceChart />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card border-light shadow-sm">
                                        <div className="card-header">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h2 className="h5">Recent Villages</h2>
                                                </div>
                                                <div className="col text-right">
                                                    <a href="#" className="btn btn-outline">See all</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table align-items-center table-flush">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th scope="col">Village</th>
                                                        <th scope="col">Reports</th>
                                                        <th scope="col">Water Status</th>
                                                        <th scope="col">Trend</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            Majuli
                                                        </th>
                                                        <td>
                                                            34
                                                        </td>
                                                        <td>
                                                            Risky
                                                        </td>
                                                        <td>
                                                            <span className="fas fa-arrow-up text-danger mr-3"></span> 12%
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Imphal East
                                                        </th>
                                                        <td>
                                                            29
                                                        </td>
                                                        <td>
                                                            Safe
                                                        </td>
                                                        <td>
                                                            <span className="fas fa-arrow-down text-success mr-3"></span> 5%
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Aizawl Rural
                                                        </th>
                                                        <td>
                                                            27
                                                        </td>
                                                        <td>
                                                            Moderate
                                                        </td>
                                                        <td>
                                                            <span className="fas fa-arrow-down text-success mr-3"></span> 3%
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Kohima
                                                        </th>
                                                        <td>
                                                            21
                                                        </td>
                                                        <td>
                                                            Risky
                                                        </td>
                                                        <td>
                                                            <span className="fas fa-arrow-up text-danger mr-3"></span> 7%
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Shillong
                                                        </th>
                                                        <td>
                                                            18
                                                        </td>
                                                        <td>
                                                            Safe
                                                        </td>
                                                        <td>
                                                            <span className="fas fa-arrow-down text-success mr-3"></span> 2%
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Dashboard;