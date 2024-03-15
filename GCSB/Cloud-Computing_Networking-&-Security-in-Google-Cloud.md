# Google Cloud Computing Foundations: Computing Networking & Security in Google Cloud

## It's all about the network

### Virtual Private Cloud (VPC)

- A Virtual Private Cloud, or VPC, is a secure, individual, private cloud-computing model hosted within a public cloud (like Google Cloud!).
- Google Cloud offers two types of VPC networks, determined by their subnet creation mode: **auto subnet mode** and **custom subnet mode**.
- When you expand the IP range in an auto mode VPC network, the broadest prefix you can use is **/16**.
- Custom mode VPC networks cannot be changed to auto mode VPC networks.

### The basics of public and internal IP addresses

- A Virtual Private Cloud (VPC) is composed of subnetworks, or subnets, and each subnet must be configured with a private IP CIDR address.

### The Google Cloud Network

- **Google Cloud VPC** is a comprehensive set of networking capabilities and infrastructure that’s managed by Google.
- **Cloud Load Balancing provides** high performance, scalable load balancing for Google Cloud to ensure consistent performance for users.
- **Cloud CDN** is a content delivery network that serves content to end users with high availability and high performance, usually by storing files close to the user.
- **Cloud Interconnect** lets you connect your own infrastructure to Google’s network edge with enterprise-grade connections.
- **Cloud DNS (domain name system)** translates requests for domain names into IP addresses.

### Routes and firewall rules in the cloud

- VPCs provide a global distributed firewall, which can be controlled to restrict access to instances through both incoming and outgoing traffic.

### Multiple VPC networks

- With **VPC peering**, a relationship between two VPCs can be established to exchange traffic.
- Now, remember that each VPC network will have firewall rules that define what traffic is allowed or denied between the networks.
- **VPC peering is a decentralized or distributed**
  
- Shared VPC allows an organization to connect resources from multiple projects to a common VPC network.
- This allows the resources to communicate with each other securely and efficiently by using internal IPs from that network.

### Building Hybrid Clouds

- **Cloud Router** lets other networks and Google VPC exchange route information over the VPN by using the Border Gateway Protocol.
- With this method, if you add a new subnet to your Google VPC, your on-premises network will automatically get routes to it.
- Google has more than 100 points of presence (PoPs) around the world.

- If getting the highest uptimes for interconnection is important, then using Dedicated Interconnect would be a good solution.
- A Partner Interconnect connection is useful if a data center is in a physical location that can't

### HTTP Load Balancer with Google Cloud Armor

- HTTP Load Balancer is a global, fully distributed load balancer that can be used to manage traffic across multiple regions.
- Google Cloud Armor is used to help mitigate Distributed Denial-of-Service (DDoS) attacks.

## Keeping an eye on things

### Introduction to Infrastructure as Code (IaC)

- As the name implies, infrastructure as code, or IaC, is taking what a required infrastructure needs to look like and defining it as code.
- IaC tools allow for the creation of entire architectures by using templates.

### Teraform

- Terraform is an open-source infrastructure as code software tool that provides a consistent CLI workflow to manage hundreds of cloud services.
- HCL (HashiCorp Configuration Language) is the language used to define the infrastructure in Terraform.

