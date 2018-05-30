:: To run as Admin, create a shortcut, go to Advanced → Run as admin

:: Set primary DNS
netsh interface ipv4 set dns "Local Area Connection" static 1.1.1.1
netsh interface ipv4 set dns "Wireless Network Connection" static 1.1.1.1

:: Set secondary DNS
netsh interface ipv4 add dns "Local Area Connection" 8.8.8.8 index=2
netsh interface ipv4 add dns "Wireless Network Connection" 8.8.8.8 index=2

:: Obtain DNS server automatically
netsh interface ipv4 set dns "Local Area Connection" dhcp
netsh interface ipv4 set dns "Wireless Network Connection" dhcp

:: Find network connection names
ipconfig | find /I "Ethernet adapter"
ipconfig | find /I "Wireless LAN adapter"
