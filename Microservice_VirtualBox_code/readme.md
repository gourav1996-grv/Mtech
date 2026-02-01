# VirtualBox Microservice Application
Recording : https://drive.google.com/drive/folders/1QqMNQtnc2CLzoYBR8Pl7zHiPZxTzHQh8?usp=sharing
## Project Overview
A distributed microservice application deployed across three Virtual Machines using VirtualBox NAT Network.

## Architecture
- Backend-VM (10.0.2.15:3000): REST API service using Node.js + Express
- Frontend-VM (10.0.2.5:8080): Web interface using HTML + Python HTTP server
- Database-VM (10.0.2.4:5000): Data service using Node.js

## Prerequisites
- VirtualBox 7.1 or higher
- Linux Mint 22.1 ISO
- Node.js v20.x
- Python 3

## VM Specifications
Each VM:
- RAM: 2048 MB
- CPUs: 2
- Storage: 20 GB
- OS: Linux Mint 22.1 XFCE 64-bit
- Network: NAT Network (10.0.2.0/24)

## Installation Steps

### 1. VirtualBox Setup
1. Install VirtualBox on host system
2. Create NAT Network: File → Tools → Network Manager
   - Name: NatNetwork
   - CIDR: 10.0.2.0/24
   - Enable DHCP

### 2. Create Backend-VM
1. Create new VM with specifications above
2. Install Linux Mint from ISO
3. Install Node.js:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install nodejs -y

4. Deploy backend service:
cd ~/api-service
npm install
node server.js

3. Create Frontend-VM and Database-VM
Clone Backend-VM (Full clone with new MAC addresses)

Rename to Frontend-VM and Database-VM

Update hostnames in each VM

4. Configure Network
For each VM:

Settings → Network → Adapter 1

Attached to: NAT Network

Name: NatNetwork

5. Deploy Services
   
Backend-VM:
cd ~/api-service
npm install express cors
node server.js

Frontend-VM:
cd ~/frontend-app
python3 -m http.server 8080

Database-VM:
cd ~/data-service
npm install express cors
node dataserver.js

Testing:
# From any VM, test connectivity
ping 10.0.2.15
ping 10.0.2.5
ping 10.0.2.4

# Test API endpoints
curl http://10.0.2.15:3000/status
curl http://10.0.2.4:5000/data

Access Application:
Open browser in Frontend-VM:
http://localhost:8080

