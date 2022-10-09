sc config Dnscache start= auto
net start Dnscache
sc config SSDPSRV start= auto
net start SSDPSRV
sc config FDResPub start= auto
net start FDResPub
sc config upnphost start= auto
net start upnphost
