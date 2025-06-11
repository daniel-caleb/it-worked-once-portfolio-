---
title: "Labs"
permalink: /labs/
---

# 🧪Labs

Welcome to the Labs section! Here, you join me in exploring various challenges and projects designed to enhance my skills and knowledge. Let's dive into the topics below and see!.

## Lab Challenges

### 1. **Examine TCP/IP and OSI Models in Action🏗️**

- **Objective:** To examine the operation of the TCP/IP protocol suite and the OSI model using Cisco Packet Tracer Simulation Mode. The focus is capturing and analyzing HTTP web traffic and viewing different protocol layers and encapsulation processes.
- **Intro** In this lab, I explored the inner workings of network communication using Cisco Packet Tracer’s
Simulation Mode. The main objective was to understand how the TCP/IP protocol suite and the OSI reference model interact when data is sent and received over a network. I simulated a basic web browsing session between a client and a local web server to observe how data is encapsulated and decapsulated at each layer of the OSI model.

[***Full Report here📄***]([assets/docs/Daniel-Caleb_Week1Assignment1.pdf](https://drive.google.com/file/d/1AIYM9eZYPE6Nasev0UYg0jSjqzfJdXty/view?usp=sharing))

### 2. **Use Wireshark to Examine Network Traffic🩺**

- **Introduction:** In this report, I used Wireshark to capture and analyze Internet Control Message Protocol (ICMP) traffic. It is widely used by network tools such as ping and traceroute to test connec�vity and determine the health of a network path. I examined both local ICMP traffic within the same network and remote ICMP traffic across different networks.
- **Conclusion** After this lab, we learn that Wireshark shows the actual MAC addresses of local hosts because MAC addresses are only used within the local network (LAN). When two devices on the same LAN communicate, they use ARP to find each other's MAC addresses, which Wireshark can capture. However, when communicating with remote hosts, packets are sent to the local router and the destination MAC address is that of the router, not the remote host. As packets move through routers across the internet, each router replaces the MAC address with its own.

[***Full Report here📄***]([assets/docs/Daniel-Caleb_Week1Assignment2.pdf](https://drive.google.com/file/d/1eCKKbGefWx9kX2xmt5WG1ItjQTAscnQx/view?usp=sharing))

### 3. **Packet Tracer - Build a Switch and Router Network🌐**

- **Introduction:** In this lab, I was tasked with building and configuring a basic network using Cisco Packet Tracer. The network involved a router, a switch, and two PCs, all of which were interconnected and assigned both IPv4 and IPv6 addresses. The goal was to simulate a functional environment where devices on different subnets could communicate with each other. The exercise focused on reinforcing key concepts such as interface configuration, static addressing, command-line interaction with Cisco devices, and connectivity testing.
- **Objectives:** 
• To create and connect a simple routed and switched network topology.
• To assign IP addresses to all devices and configure gateway settings.
• To apply basic security settings such as passwords and banner messages.
• To verify connectivity and interface status using diagnostic commands.

[**See Full Report here📄**]([assets/docs/Daniel-Caleb_Cheruiyot_CS-CNS09-25014(week2Ass1).pdf](https://drive.google.com/file/d/1RKkto0t763dNEine3QXyPTzpXOMZ4ST7/view?usp=sharing))

### 4. [**Introduction to Network Traffic Analysis📈**](https://academy.hackthebox.com/achievement/1095115/81)

- **Introduction:** This lab involved a detailed investigation into suspicious network traffic and encrypted Remote Desktop Protocol (RDP) sessions associated with an internal host and also undertook
multiple analysis tasks using Wireshark to:
i. Extract transferred images over HTTP suspected of hiding data.
ii. Investigate ongoing FTP and HTTP traffic during a live capture.
iii. Conduct a full traffic analysis workflow to identify signs of intrusion.
iv. Decrypt and analyze an RDP session using a recovered RSA private key.
- **Skills Covered:** RDP, Wireshark.

[**See Full Report here📄**]([assets/docs/Daniel-Caleb_Cheruiyot_CS-CNS09-25014(week2Ass2).pdf](https://drive.google.com/file/d/168imMe_k3w2diTMtw7K6ojjwLJrMTJ_9/view?usp=sharing))

### 5. **Metasploitable 2💥**

- **About** It’s a deliberately vulnerable virtual machine designed to help you practice your skills in a safe environment. Recently, I completed my first hands-on practice with Metasploitable 2, and today, I’m sharing my experience with FTP exploitation.
- **Skills Covered:** Repository management, branching, and collaboration.

[**Read More here🔖**](https://blog-daniel-caleb.hashnode.dev/metasploitable2-exploitation-walkthrough)

---

Feel free to explore these challenges and push your limits. Happy coding!
