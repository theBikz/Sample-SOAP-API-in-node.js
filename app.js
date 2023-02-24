const soapRequest = require('easy-soap-request');
const fs = require('fs')
// example data
const url = 'https://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php';
const sampleHeaders = {
  'user-agent': 'sampleTest',
  'Content-Type': 'text/xml;charset=UTF-8',
  'soapAction': 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode',
};
const xml = fs.readFileSync('test/test.xml', 'utf-8');

// usage of module
(async () => {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0
  try{
    const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml }); // Optional timeout parameter(milliseconds)
    const { headers, body, statusCode } = response;
    console.log(headers);
    console.log(body);
    console.log(statusCode);
  } catch(e) {
    console.log(e)
  }
  } 
  )();