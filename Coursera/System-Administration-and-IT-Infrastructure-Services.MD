# System Administration and IT Infrastructure Services

## Modul 1: Introduction to Systems Administration and IT Infrastructure Services

### What is Systems Administration

#### What is Systems Administration?

- System administrators, or sysadmins, are responsible for managing an organization's IT infrastructure.
- The role of a sysadmin can vary depending on the size of the organization.
- The responsibilities of a sysadmin are closely related to the role of an IT support specialist who handles system administration.

#### Servers Revisited

- A sys admin is responsible for their company's IT services, such as email, file storage, and running a website.
- Clients request services from servers, and servers respond with these services.
- Servers can provide services to multiple clients at once, and clients can use multiple servers.
- Server hardware can come in different forms, such as **towers**, **rack servers**, and **blade servers**.
- In small IT organizations, a **KVM** switch can be used to control multiple servers using one keyboard, mouse, and monitor.

#### The Cloud

- **Datacenters** are facilities that store servers and are used by companies with large amounts of data.
- Cloud computing allows you to access data and use applications from anywhere with an internet connection.
- Using cloud services can be cost-effective in the short term, but costs can add up in the long term.
- **Dependency** on cloud platforms means that if there's an issue, someone else is responsible for fixing it.
- It's important to back up **critical** data both in the cloud and on **physical** storage to prevent data loss.

### System Administration Tasks

#### User and Hardware Provisioning

- System administrators have the responsibility of managing users and hardware in an IT infrastructure.
- They **create** new user accounts and provide access to company resources.
- They also **remove** users from the system when they leave the company.
- They standardize hardware provisioning and **settings** to **maintain** consistency.
- They consider the hardware lifecycle of a machine, including when it was **built**, **used**, and **maintained**.
- The hardware lifecycle consists of **procurement**, **deployment**, **maintenance**, and **retirement stages**.
- In a small organization, the hardware lifecycle may involve provisioning a computer for a new employee, imaging the computer, installing software, and eventually retiring or reallocating the machine.
- System administrators may need to **automate** the provisioning process in larger companies to save time.

#### Routine Maintenance

- Updates and maintenance to ensure they run the latest secure software.
- Batch updating is a common practice for effectively updating and managing hardware
- Batch updates are typically done for security updates and critical system updates, rather than every single software update.
- It's important to find time to take services offline, perform the update, and verify that the new update works with the service.
- Installing the latest security patches routinely is a good guideline to keep your system secure.

#### Vendors

- System administrators in small companies have to deal with various devices, **including computers, printers, phones, fax machines, and video/audio conferencing machines**.
- They may be responsible for setting **up phone lines, printers, and fax machine**s, as well as handling hardware procurement.
- Sys admins often work with vendors or other businesses to purchase hardware and establish relationships with them.
- They need to consider factors like **hardware compatibility, price, and formal approval** from their manager or leader before making any purchases.

#### Vendor Life-Cycle for Custom Services and Products

- The vendor life-cycle management process consists of three phases: **pre-contract, contract delivery, and post-contract**.
- Phase one - Pre-contract:
  - **Vendor identification and engagement**: Organizations identify potential vendors and collect information about their offerings.
  - **Vendor qualification and risk mitigation**: Shortlisted vendors undergo a qualification process to assess their suitability and mitigate risks.
  - **Vendor evaluation and selection**: The organization evaluates vendor information based on factors like history, ratings, expertise, cost, and responsiveness. A vendor is selected based on these evaluations.
  - **Vendor information management and onboarding**: The selected vendor goes through an onboarding process, where their information is recorded, and they receive necessary training and equipment.

- Phase two - Contract delivery:
  - **Performance management monitoring**: A project manager monitors the vendor's performance, ensuring they meet the contracted expectations.
  - **Risk management**: Potential risks, such as supply chain disruptions or product upgrade limitations, are monitored and managed.
  - **Vendor relationship management**: Organizations develop communication plans, maintain healthy partnerships, and ensure mutual benefits.

- Phase three - Post-contract:

  - **Vendor offboarding**: When the project ends, the organization analyzes the vendor's fulfillment of contractual obligations
  - **Warranties**: Detailed records of warranties provided by the vendor are kept, and stakeholders are informed about their inclusions and expiration dates.
  - **Post-contract support**: Records of any post-contract services, like technical support, are maintained.
  - **Post-contract** closing: The organization completes an offboarding checklist, which may include returning IT equipment and removing vendor identity profiles.

#### Vendor Life-Cycle for Support of Commercial Products

- The end of life (EOL) date is when the vendor plans to end all support for the product and it becomes a legacy product.

#### Troubleshooting and Managing Issues

- Two critical skills for system administrators are troubleshooting and customer service.
- System administrators may need to be available around the clock to address server or network issues.
- Ticketing or bug systems are commonly used to track troubleshooting work and prioritize issues.

#### In Case of Fire, Break Glass

- It is crucial to regularly back up your company's data and store it in a location separate from your main office.

### Network Services

#### FTP, SFTP, and TFTP

- **FTP** (File Transfer Protocol) is a legacy way to transfer files over the Internet. It is primarily used today to share web content.
- **SFTP** (Secure FTP) is a secure version of FTP that encrypts data during the transfer process.
- **TFTP** (Trivial FTP) is a simpler way to transfer files than FTP and does not require user authentication. It is often used to host installation files.
- **PXE (Pre Boot Execution)** or pixie boot allows booting into software available over the network, which is useful for network-based software installations.

#### NTP (Network Time Protocol)

- It is commonly used in airports to ensure that departure and arrival screens display accurate **times**.
- There are two ways to set up **NTP**: using a local NTP server or a public NTP server.
- With a **local** NTP server, you install NTP server software on a managed server and NTP clients on other machines, syncing their time to the server.
- **Public NTP servers**, managed by other organizations, can be used to synchronize time without running a dedicated NTP server.
- It's good practice to run your own **NTP server** and have it point to a public NTP server to avoid connecting all clients directly to a public server.

#### Network Support Services Revisited

- Two common internal network services are **Intranets** and **proxy servers**.
- **Proxy servers** act as intermediaries between a company's network and the Internet. They keep company network **traffic private** and can be used to monitor and regulate access to certain websites.

#### DNS

- DNS (Domain Name System) is a network service that maps human-readable domain names to IP addresses.
- It is important to set up and maintain DNS correctly in order for people to access websites by their names.
- DNS allows you to map IP addresses to easy-to-remember host names.

#### DNS for Web Servers

- To point your domain name to where your web content is located, you can use DNS settings provided by your domain **registrar** or set up an **authoritative** DNS server if you host your web content yourself.

#### DNS for Internal Networks

- One way to do this is by using a local host file, which contains static IP address to hostname mappings.
- In Linux, the host file is located at **/etc/hosts** and can be edited to map IP addresses to hostnames.
- DNS can also be integrated with a directory service, such as **Active Directory** or **LDAP**, to automatically populate machine to **IP** address mappings.

#### DHCP

- **DHCP** is a network service that makes managing IT infrastructure easier.
- It allows you to automatically assign IP addresses to computers on a network.
- DHCP leases out IP addresses from a DHCP server to client machines.
- To configure a DHCP server, you need to determine the IP range, DNS server locations, gateway, and subnet mask.
- Different DHCP server software may have different configuration settings.
- Windows Server versions come with the DHCP service built-in.
- DHCP and DNS can be integrated so that DNS updates its IP address mapping automatically when DHCP leases out new addresses.

#### Quiz Network Services

1. What is one benefit of using TFTP over SFTP? **Simpler transfer without authentication**
2. What service can you use to keep time synchronized across the machines on your fleet? **NTP**
3. What features does a proxy offer? Check all that apply. 
   1. Network privacy
   2. Network traffic monitoring
   3. Internet traffic filtering
4. If you want to point a domain name to a web server or use hostnames within your company, what network protocol can you use? **DNS**
5. If you don't want to use static IP addresses, but want to dynamically assign IP addresses to computers instead, what network protocol can you use? **DHCP**

### GA Network Services

1. Which service gives access to pre-configured virtual machines that can be used like physical servers? **IaaS**
2. What type of cloud service allows app developers to build code, store information in a database and serve their applications from a single place? **PaaS (Platform as a Service)**
3. Which of the following is a benefit of virtualization compared to using dedicated hardware? **Maintenance**
4. Which of the following are typically included with server operating systems to help optimize server functionality? Select all that apply
   1. More RAM capacity
   2. Allow more network connections
   3. Added security
5. What is a type of tool a client could use to access a server and transfer files? **An FTP Client**
6. A sysadmin wants to use preboot execution over a network. Which type of server will the sysadmin likely use to administer operating system installation files? **A TFTP server**
7. PuTTY in Windows is similar to which Linux tool? **SSH**
8. Which of the following are reasons for using DNS? Select all that apply.
   1. It maps local addresses to simple names without editing hosts files.
   2. It maps names humans can understand to IP addresses.
9. What does DHCP do? **DHCP assigns IP addresses to computers on a network.**
10. A network technician sets up an internal DNS server for a local network. When the technician types in a URL, which is checked first? **The local host file**

### Managing System Services

#### What do Services Look Like in Action

- Services run as background processes or daemons, and each service has one or more configuration files that you will use as a system administrator to determine its behavior

#### Managing Services in Linux

- In Linux, services are managed using the **systemd** service manager.
- The **systemctl** command is used to manage services in **systemd**.
- The **systemctl** command can be used to start, stop, restart, and check the status of services.

#### Managing Services in Windows

- To check the status of a service, you can use the "**Get-Service**" command in PowerShell.
- Only **administrators** can start or stop a service, not regular users.
- To stop a service, you can use the **Stop-Service** command in an administrative PowerShell.
- To start a service, you can use the **Start-Service** command in PowerShell.
- The services management console provides a graphical interface to manage services.

#### Configuring Services in Linux

- On Linux, configuration files for installed services are located in the **/etc** directory and typically need to be edited with a text editor.
- The page provides an example of configuring an **FTP** server called **vsftpd**.
- To enable anonymous connections, the **configuration** file for the **FTP** server needs to be modified.
- After making changes to the **configuration** file, the service needs to be reloaded for the new configuration to take effect.
- **Reloading** the service allows ongoing connections to continue without interruption while new connections use the new configuration.

#### Configuring Services in Windows

- Internet Information Services (IIS) on a Windows machine to serve web pages.

#### Qwiklabs guidelines and troubleshooting steps

- Qwiklabs is an online lab tool used in this course for hands-on activities related to system administration and IT infrastructure services.

### Configuring Network Services

#### Configuring DNS with Dnsmasq

- dnsmasq, a program that provides DNS, DHCP, TFTP, and PXE services in a simple package.
- dnsmasq is a lightweight DNS forwarder and DHCP server that can be used to set up a local network.

#### Configuring DHCP with Dnsmasq

- The **DHCP** server configuration file (dhcp.config) contains options such as the interface to listen on, **domain name**, **default gateway**, **DNS servers**, **DHCP range**, and **lease time**.
- The **lease time** determines how long an IP address is reserved for a client.
- The **DHCP range** specifies the range of IP addresses that the **DHCP server** can assign to clients.
- To start the **DHCP server**, the command "sudo dnsmasq -d -q -c dhcp.config" is used.
- The **DHCP client** (e.g., sudo dhclient -i eth_cli -v) requests an IP address from the DHCP server.
- The **DHCP server** assigns an IP address to the client, and the client interface is configured with the assigned IP address.

#### Practice Quiz: Configuring Network Services

##### Network setup

- `ip address show eth_srv` - Show the IP address of the server.
- `ip address show eth_cli` - Show the IP address of the client.

##### Current configuration setup

`cat /etc/dnsmasq.d/mycompany.conf` - Show the current configuration of the DNS server.

##### Enabling debug logging

`sudo service dnsmasq status` - Check the status of the DNS server.
`sudo service dnsmasq stop` - Stop the DNS server.
`sudo nano /etc/dnsmasq.d/mycompany.conf` - Edit the configuration file.
`sudo dnsmasq --test -C /etc/dnsmasq.d/mycompany.conf` - Test the configuration file.

