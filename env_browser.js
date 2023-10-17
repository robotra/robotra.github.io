/*
 * The following configuration is used in the browser examples
 * (index.html and giraffe.html).
 *
 * Replace the values with your own InfluxDB values.
 */
// eslint-disable-next-line no-undef
window.INFLUX_ENV = {
  /** InfluxDB v2 URL, '/influxdb' relies upon proxy to forward to the target influxDB */
  url: 'https://us-east-1-1.aws.cloud2.influxdata.com/api/v2/', //'http://localhost:8086',
  /** InfluxDB authorization token */
  token: '5iq3ts97YXfRkGkhBTURznBf8P__I3NrtO275AsOO2du9UbUhz3s-pSHxGRvzq48moRg63_6SSCE40i5myXQhg==',
  /** InfluxDB organization */
  org: '9ce19a9d9b7af9ea',
  /** InfluxDB bucket used for onboarding and write requests. */
  bucket: '659988312168c2a0',

  /** The following properties are used ONLY in the onboarding example */
  /** InfluxDB user  */
  username: 'my-user',
  /** InfluxDB password  */
  password: 'my-password',
}
