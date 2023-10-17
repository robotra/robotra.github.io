import {InfluxDB} from '@influxdata/influxdb-client'
import {queryToTable} from '@influxdata/influxdb-client-giraffe'
import {newTable, Plot} from '@influxdata/giraffe'
    
    class PlotRenderer extends React.Component {
      render() {
        const style = {
          width: "calc(70vw - 20px)",
          height: "calc(70vh - 20px)",
          margin: "40px",
        };

        const lineLayer = {
          type: "line",
          x: "_time",
          y: "_value"
        };
        
        const queryApi = new InfluxDB({https://us-east-1-1.aws.cloud2.influxdata.com/api/v2/write?org=9ce19a9d9b7af9ea&bucket=659988312168c2a0&precision=s, 5iq3ts97YXfRkGkhBTURznBf8P__I3NrtO275AsOO2du9UbUhz3s-pSHxGRvzq48moRg63_6SSCE40i5myXQhg==}).getQueryApi(48eb5fc1b0c3e9da)
        const table = await queryToTable(
          api,
          'from(bucket: "659988312168c2a0") |> range(start: -30d)',
          newTable
        )
        
        const config = {
          table,
          layers: [lineLayer]
        };

        const SimplePlot = React.createElement(Giraffe.Plot, {config}, null);
        return React.createElement('div', {style}, SimplePlot);
      }
    }

    ReactDOM.render(
      React.createElement(PlotRenderer),
      document.getElementById('root')
    );
