	//HTTP POST            
	var req = new WebClient();
	req.Headers.Add("Content-Type", "application/xml");
	req.UploadString( "http://gw2-fro.pswin.com:81",                 
	@"<?xml version=""1.0""?>
			<SESSION>
				<CLIENT>myusername</CLIENT>
				<PW>mypassword</PW>
				<MSGLST>
				<MSG>
					<TEXT>Test message</TEXT>
					<RCV>4799999999</RCV>
				</MSG>
				</MSGLST>
			</SESSION>");
