/*
 * The following configuration is used in the browser examples
 * (index.html and giraffe.html).
 *
 * Replace the values with your own InfluxDB values.
 */
// eslint-disable-next-line no-undef
window.INFLUX_ENV = {
  /** InfluxDB v2 URL, '/influxdb' relies upon proxy to forward to the target influxDB */
  url: '/influx', //'http://localhost:8086',
  /** InfluxDB authorization token */
  token: 'TyVKHPKlam2nL5kHIFIUTHK5bEY4ocBofYMrLmz00dAw6',
  /** InfluxDB organization */
  org: '48eb5fc1b0c3e9da',
  /** InfluxDB bucket used for onboarding and write requests. */
  bucket: 'cfa20a86bf6081ca',

  /** The following properties are used ONLY in the onboarding example */
  /** InfluxDB user  */
  username: 'my-user',
  /** InfluxDB password  */
  password: 'my-password',
}
