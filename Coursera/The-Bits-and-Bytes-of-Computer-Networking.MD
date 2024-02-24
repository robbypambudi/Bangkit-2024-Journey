# The Bits and Bytes of Computer Networking

## Module 1: Introduction to Networking

## Module 2: The Network Layer

### The Network Layer

### Subnetting

### Routing

#### Basic Routing Table

- Routing is the process of forwarding data packets across networks.
- A router is a network device that forwards traffic based on the destination address of the packet.
- Basic routing involves receiving a packet, examining the destination IP, looking up the destination network in the routing table, and forwarding the packet to the interface closest to the remote network.
- Routing tables contain information about networks and the interfaces to reach them.

#### Interior Gateway Protocols

- IGPs are utilized within a single autonomous system (AS), such as large corporations or national-scale ISPs.
- IGPs are further classified into link state routing protocols and distance vector protocols.
- Link state protocols ensure that each router possesses comprehensive knowledge of the entire network topology.
- Interior Gateway Protocols share information within a single autonomous system. Exterior Gateway Protocols are used for the exchange of information between independent autonomous systems.

#### Exterior Gateway Protocols (EGP) and the IANA

- Exterior gateway protocols facilitate communication between routers at the edges of different autonomous systems.
- Interior gateway protocols are used within the same organization, while exterior gateway protocols are used to share information across different organizations.
- The IANA (Internet Assigned Numbers Authority) helps manage IP address allocation and Autonomous System Number (ASN) allocation.

#### Non-Routable Address Space

- RFC 1918 defined three ranges of non-routable address space: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16.
- Interior gateway protocols will route these address spaces within an autonomous system, but exterior gateway protocols will not.

## Module 3: The Transport Layer

### The Transport Layer

- The transport layer is responsible for multiplexing and demultiplexing traffic, establishing connections, ensuring data integrity, and keeping the network safe.
- Multiplexing and demultiplexing are done through ports, which are 16-bit numbers used to direct traffic to specific services running on a networked computer.

#### Dissection of a TCP Segment

- An Ethernet frame encapsulates an IP datagram, and an IP datagram encapsulates a TCP segment.
- A TCP segment consists of a TCP header and a data section.
- The TCP header contains various fields with important information
  - Source port and destination port fields
  - Sequence number: A 32-bit number used to keep track
  - Acknowledgment number: The number of the next expected segment
  - Data offset: A four-bit number that communicates the length of the TCP header.
  - TCP control flags: Six bits reserved for various control flags.
  - TCP window: A 16-bit number used for flow control.
  - Checksum: A 16-bit number used to ensure data integrity.
  - Urgent pointer: Used to point out segments that might be more important than others
  - Options field: used for more complicated flow control protocols.
  - Padding: A sequence of zeros to ensure the data payload section.

#### TCP Control Flags and the Three-way Handshake

- Three-Way Handshake : SYN, SYN/ACK, ACK.
- The six TCP control flags are URG (urgent), ACK (acknowledged), PSH (push), RST (reset), SYN (synchronize), and FIN (finish).
- The three-way handshake is used to establish a TCP connection.
- Once the three-way handshake is complete, the TCP connection is established and data can be sent in both directions.
- When one of the devices is ready to close the connection, a four-way handshake occurs, involving the exchange of FIN and ACK flags.

#### TCP Socket States

- Common TCP socket states include LISTEN, SYN_SENT, SYN_RECEIVED, ESTABLISHED, FIN_WAIT, CLOSE_WAIT, and CLOSED.

#### Connection-oriented and Connectionless Protocols

- Connection-oriented protocols establish a connection and use acknowledgments to ensure data transmission.
- Connectionless protocols do not rely on connections and do not support acknowledgments.
- TCP is useful when you need to ensure data reaches its destination, but it has more overhead.
- UDP is useful for less important messages, like streaming video, as it has less overhead.

#### Firewalls

- Firewalls are network devices that block traffic based on certain criteria.
- Firewalls can operate at different layers of the network, but they are most commonly used at the transport layer.
- Firewalls at the transport layer can block traffic to certain ports while allowing traffic to others.
- Firewalls can be independent network devices or run as programs on individual hosts.

- Aplication Layer: Firewalls can perform inspection of application layer traffic, allowing or blocking specific applications or protocols.
- Transport Layer: Firewalls commonly operate at the transport layer. They can block traffic to certain ports while allowing traffic to other ports.
- Network Layer: Some firewalls primarily deal with blocking ranges of IP addresses, operating at the network layer.
- Data Link Layer: Firewalls can also operate at the data link layer, inspecting and filtering traffic based on MAC addresses.

### The Application Layer

#### The Application Layer- Introduction

- The application layer is the layer in the networking model that deals with how applications send and receive data.
- The payload section of TCP segments contains the actual data that applications want to send to each other.
- There are many protocols used at the application layer, such as HTTP for web traffic and FTP for file transfers.

#### The Application Layer and the OSI Model

- The OSI (Open Systems Interconnection) model is another widely used model with seven layers.
- The fifth layer in the OSI model is the session layer, which facilitates communication between applications and the transport layer.
- The presentation layer in the OSI model ensures that application layer data can be understood by the application.
- While the OSI model is important to understand, our five-layer model is more practical for day-to-day networking.
- It's important to have a basic understanding of the OSI model in networking education.

## Module 3: Network Services

### Name Resolution

#### Why do we need DNS?

- Computers communicate with each other using numbers, specifically binary numbers (ones and zeros).
- Binary numbers can be difficult for humans to read and remember, so different forms of representation are used, especially in networking.
- **DNS (Domain Name System)** is a global and distributed network service that translates domain names (e.g., <www.weather.com>) into IP addresses (e.g., 184.29.131.121) that computers can understand.
- **DNS makes it easier for humans to remember** and access websites by using domain names instead of IP addresses.
- **DNS allows organizations to change the IP address** associated with a domain name without affecting end users.
- **DNS** is crucial for the functioning of the Internet and allows websites to be served from different locations around the world, improving performance for users in different regions.

#### The Many Steps of Name Resolution

- **DNS** using UDP (User Datagram Protocol) as generally used for name resolution. TCP (Transmission Control Protocol) is used when the response is too large for a single UDP datagram.
- **DNS (Domain Name System)** is a system that converts domain names into IP addresses.
- **DNS servers** need to be specifically configured at a node on a network.
- There are five primary types of **DNS** servers: **caching name servers**, **recursive name servers**, **root name servers**, **TLD name servers**, and **authoritative name servers**.
- **Caching** and **recursive** name servers store domain name lookups for a certain amount of time to prevent repeated lookups.
- The TTL (time to live) is a value that determines how long a name server can cache an entry before performing a full resolution again.
- TLD name servers point to authoritative name servers, which provide the actual IP address of the server in question.
- Local name servers cache DNS lookups to avoid performing a full lookup path for every TCP connection.

#### DNS and UDP

- UDP is connectionless, meaning there is no set up or tear down of a connection, resulting in less overall traffic.
- DNS requests and responses can usually fit inside a single **UDP** datagram, making it suitable for a connectionless protocol.
- DNS can generate a lot of traffic, especially when the full resolution needs to be processed.
- TCP requires a three-way handshake, multiple requests and responses, and a four-way handshake, resulting in a minimum of 44 packets.
- **UDP** requires fewer packets, with a total of eight packets for a full DNS lookup.
- **DNS** over TCP exists for cases where the response is too large for a single **UDP** datagram.

### Name Resolution In Practice

#### Resource Record Types

- **DNS** operates with a set of defined resource record types.
- The most common resource record is the **A record**, which points a domain name to an **IPv4 IP** address.
- A single domain name can have multiple A records, allowing for DNS round robin to balance traffic across multiple IPs.
- The **AAAA** record is similar to an A record but returns an IPv6 address instead.
- The **CNAME** record is used to redirect traffic from one domain to another.
- The MX record is used to deliver email to the correct server.
- The **SRV** record is used to define the location of various specific services.
- The **TXT** record was originally for descriptive text but is now used to convey additional data.
- There are other resource record types like **NS** and **SOA** used for authoritative information about **DNS** zones.

#### Anatomy of a Domain Name

- A domain name consists of three parts: the subdomain (e.g., www), the domain (e.g., google), and the top-level domain (e.g., com).
- The top-level domain (TLD) is the last part of a domain name and is defined by a limited number of options, such as .com, .net, .edu, and country-specific TLDs like .de for Germany or .cn for China.
- ICANN (Internet Corporation for Assigned Names and Numbers) is a non-profit organization responsible for administering and defining TLDs.
- When all the parts of a domain name are combined, it forms a fully qualified domain name (FQDN).
- A registrar is a company that has an agreement with ICANN to sell unregistered domain names.
- DNS (Domain Name System) can support up to 127 levels of domain in a single FQDN, but it is rare to see fully qualified domain names with that many levels.
- There are some restrictions on the length of each section of a domain name, with each section limited to 63 characters and a total limit of 255 characters for a complete FQDN.

#### DNS Zones

- Authoritative name servers are responsible for responding to name resolution requests for specific domains.
- An authoritative name server is responsible for a specific DNS zone.
- DNS zones are hierarchical and allow for easier control over multiple levels of a domain.
- Zones are configured through zone files, which declare all resource records for a particular zone.
- Zone files contain an SOA (Start of Authority) record that declares the zone and the name server authoritative for it.
- NS (Name Server) records indicate other name servers that might also be responsible for the zone.
- Zones can be configured to have subdomains, and reverse lookup zone files can be used to resolve an IP to a name.

### Dynamic Host Configuration Protocol (DHCP)

#### Introduction to DHCP

- DHCP (Dynamic Host Configuration Protocol) **automates** the configuration process of hosts on a network.
- DHCP can operate in different ways: **dynamic allocation**, **automatic allocation**, and **fixed allocation**.

#### DHCP in Action

- DHCP (Dynamic Host Configuration Protocol) is an **application layer** protocol used to configure network settings.
- DHCP relies on the **transport**, **network**, **data link**, and **physical layers** to operate.
- The DHCP discovery process has four steps: **server discovery**, **offer**, **request**, and **acknowledgement**.
- During server discovery, the **DHCP client** sends a **broadcast** message to find a **DHCP server**.
- The **DHCP server** examines its configuration and offers an **IP** address to the **client**.
- The **client** processes the offer and sends a request message to accept the offered **IP** address.
- The **DHCP server** acknowledges the request and sends a **DHCPACK** message to the client.

### Basics of NAT

#### Introduction to NAT

- NAT is a technique used to **translate** one IP address into another.
- NAT can provide additional **security** measures to a network.
- It allows a **gateway**, like a **router** or **firewall**, to **rewrite** the source IP of an outgoing IP datagram while retaining the original IP.
- **NAT** can **hide** the IP address of a computer from other devices on the network, providing a level of security known as IP masquerading.
- **One-to-many** NAT is a common use of **NAT**, where multiple computers on a network have their IPs translated by the router to its own IP, making the entire address space protected and invisible.

#### NAT and the Transport Layer

- **NAT (Network Address Translation)** at the network layer is relatively straightforward, where one IP address is translated to another by a router.
- However, **at the transport layer**, things become more complex, and additional techniques are used to ensure proper functioning.
- **Port preservation** is a technique where the source port chosen by a client is the same port used by the router, making it easier to direct traffic back to the correct computer.
- **Port forwarding** is a technique that allows specific destination ports to be configured to always be delivered to specific nodes, enabling IP masquerading and simplifying external access to services.
- **Masquerading** hides the source IP of an originating device,

### Virtual Private Networks

#### Introduction to VPNs

- A VPN uses tunneling protocols to encrypt data at the sending end and decrypts it at the receiving end.
- VPNs (Virtual Private Networks) are a **technology** that allows for the extension of a **private** or local network to a host that might not be on the same local network.
- Most VPNs use encryption to carry an **encrypted** payload in the **transport layer**, which contains a second set of packets for the network, transport, and application layers.

#### Proxy Services

- A proxy service is a server that acts on behalf of a client to access another service.
- Proxies exist at almost **every** layer of the networking model.
- **Web proxies** are specifically built for web traffic and can be used for increased performance or to restrict access to certain websites.
- **Reverse proxies** act as a **single front** end for multiple servers, distributing **incoming** requests and handling encryption and decryption work.

## Modul 5: Introduction to Connecting to the Internet