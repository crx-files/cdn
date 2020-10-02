function FindProxyForURL(url, host) {
	if ((shExpMatch(host, "clients2.google.com") || shExpMatch(host, "*.clients2.google.com")) ||
		(shExpMatch(host, "clients2.googleusercontent.com") || shExpMatch(host, "*.clients2.googleusercontent.com")) ||
		(shExpMatch(host, "ibosscloud.com") || shExpMatch(host, "*.ibosscloud.com")) ||
		(shExpMatch(host, "aces.org") || shExpMatch(host, "*.aces.org")) ||
		shExpMatch(host, "tools.google.com") ||
		shExpMatch(host, "people-pa.googleapis.co") ||
		shExpMatch(host, "playatoms-pa.googleapis.com") ||
		shExpMatch(host, "chromeos-ca.gstatic.com") ||
		shExpMatch(host, "update.googleapis.com") ||
		shExpMatch(host, "tools.google.com") ||
		shExpMatch(host, "dl.google.com") ||
        shExpMatch(host, "lsrelay-extensions-production.s3.amazonaws.com") ||
        shExpMatch(host, "lightspeed-apps.s3.amazonaws.com"))
		return "PROXY 127.0.0.1";
	else
		return "DIRECT";
}