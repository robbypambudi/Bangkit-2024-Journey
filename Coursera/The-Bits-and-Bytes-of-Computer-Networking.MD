# The Bits and Bytes of Computer Networking

## Module 1: Introduction to Networking

## Module 2: The Network Layer

### The Network Layer

### Subnetting

### Routing

### Basic Routing Table

- Routing is the process of forwarding data packets across networks.
- A router is a network device that forwards traffic based on the destination address of the packet.
- Basic routing involves receiving a packet, examining the destination IP, looking up the destination network in the routing table, and forwarding the packet to the interface closest to the remote network.
- Routing tables contain information about networks and the interfaces to reach them.

### Interior Gateway Protocols

- IGPs are utilized within a single autonomous system (AS), such as large corporations or national-scale ISPs.
- IGPs are further classified into link state routing protocols and distance vector protocols.
- Link state protocols ensure that each router possesses comprehensive knowledge of the entire network topology.
- Interior Gateway Protocols share information within a single autonomous system. Exterior Gateway Protocols are used for the exchange of information between independent autonomous systems.

### Exterior Gateway Protocols (EGP) and the IANA

- Exterior gateway protocols facilitate communication between routers at the edges of different autonomous systems.
- Interior gateway protocols are used within the same organization, while exterior gateway protocols are used to share information across different organizations.
- The IANA (Internet Assigned Numbers Authority) helps manage IP address allocation and Autonomous System Number (ASN) allocation.

### Non-Routable Address Space

- RFC 1918 defined three ranges of non-routable address space: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16.
- Interior gateway protocols will route these address spaces within an autonomous system, but exterior gateway protocols will not.

## Module 3: The Transport Layer

### The Transport Layer

- The transport layer is responsible for multiplexing and demultiplexing traffic, establishing connections, ensuring data integrity, and keeping the network safe.
- Multiplexing and demultiplexing are done through ports, which are 16-bit numbers used to direct traffic to specific services running on a networked computer.

### Dissection of a TCP Segment

- An Ethernet frame encapsulates an IP datagram, and an IP datagram encapsulates a TCP segment.
- A TCP segment consists of a TCP header and a data section.
- The TCP header contains various fields with important information
  - Source port and destination port fields
  - Sequence number: A 32-bit number used to keep track
  - Acknowledgment number: The number of the next expected segment
  - Data offset: A four-bit number that communicates the length of the TCP header.
  - TCP control flags: Six bits reserved for various control flags.
  - TCP window: A 16-bit number
  - Checksum: A 16-bit number used to ensure data integrity.
  - Urgent pointer: Used to point out segments that might be more important than others
  - Options field: used for more complicated flow control protocols.
  - Padding: A sequence of zeros to ensure the data payload section.

### TCP Control Flags and the Three-way Handshake

- The six TCP control flags are URG (urgent), ACK (acknowledged), PSH (push), RST (reset), SYN (synchronize), and FIN (finish).
- Once the three-way handshake is complete, the TCP connection is established and data can be sent in both directions.
- When one of the devices is ready to close the connection, a four-way handshake occurs, involving the exchange of FIN and ACK flags.

### TCP Socket States

- Common TCP socket states include LISTEN, SYN_SENT, SYN_RECEIVED, ESTABLISHED, FIN_WAIT, CLOSE_WAIT, and CLOSED.

### Connection-oriented and Connectionless Protocols

- Connection-oriented protocols establish a connection and use acknowledgments to ensure data transmission.
- Connectionless protocols do not rely on connections and do not support acknowledgments.
- TCP is useful when you need to ensure data reaches its destination, but it has more overhead.
- UDP is useful for less important messages, like streaming video, as it has less overhead.

