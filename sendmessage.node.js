var http = require('http');

var post_data = "<?xml version=\"1.0\"?>\
  <SESSION>\
    <CLIENT>myusername</CLIENT>\
    <PW>mypassword</PW>\
    <MSGLST>\
      <MSG>\
        <TEXT>Test message</TEXT>\
        <RCV>4799999999</RCV>\
      </MSG>\
    </MSGLST>\
  </SESSION>";

var post_req = http.request(
  {
    host: "gw2-fro.pswin.com",
    port: "81",
    method: "POST",
    header: {
      'Content-Type': 'application/xml',
      'Content-Length': post_data.length
    }
  });

post_req.write(post_data);
post_req.end();
