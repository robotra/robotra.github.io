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
        
        const queryApi = new InfluxDB({https://us-west-2-1.aws.cloud2.influxdata.com/api/v2/write?org=48eb5fc1b0c3e9da&bucket=cfa20a86bf6081ca&precision=s, TyVKHPKlam2nL5kHIFIUTHK5bEY4ocBofYMrLmz00dAw6_LxqtoB}).getQueryApi(48eb5fc1b0c3e9da)
        const table = await queryToTable(
          api,
          'from(bucket: "cfa20a86bf6081ca") |> range(start: -30d)',
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
