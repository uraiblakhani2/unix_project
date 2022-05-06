# INSTALL.MD

This file contains the dependencies and steps needed to create your own web server

# Step 1: Choosing VPS provider

- For this step you have to decide which VPS provider you are going to use. There are several VPS providers you can choose from:

-Google Cloud

# Google Cloud gives 300$ free credit to be used in 3 months to new users and creating a VPS is easy. They also have Montreal in their regions.

-Azure

# Azure gives 200$ free credit to new users but compared to the other providers creating a VPS on Azure is difficult.

-Vultr

# Vultr gives 100$ free credit to new users, creating a VPS is straight forward and closest region is Toronto

-Digital Ocean

# Digital Ocean also gives 100$ free credit and the closest region is Toronto like Vultr:

-AWS

# AWS provides 100$ credit to students. But deploying a server is hard.

# Step 2: Creating the VPS

- We decided to choose Google Cloud as our VPS provider as they give 300$ free credit for 3
  months to new users and they also have Montreal in the list of regions which will give us low
  latency. This means a user can cost a website for 3 months for free

To create a VPS on Google Cloud:

-Go to https://cloud.google.com/ and sign in with your google account and sign up for free 300$ credit.

- In the Cloud Console, type VM in the serach bar and go to VM instances section

- Select Create Instance

- <img src="/Images/1.jpg" />

- Choose the region closest to you and choose 4gb Ram as it should be more than enough for a web-server

- On the boot disk section choose Debian as it is Lightweight compared to Ubuntu

- Finally on the Firewall section check Allow Http and Https traffic and click create.

# Step 3: Securing the VPS:

- Now that your VPS has been created it is time to secure it to protect it from hackers.

  # Generating SSH keys

- We will now generate SSH keys. First go to https://www.putty.org/ and install it on your pc

- Next open PuttyGen and generate ssh keys and save the private and public keys somewhere on your pc

- <img src="/Images/2.jpg" />

- Open Google Cloud console and click edit Instance
- Scroll down and in SSH key section paste your public SSH keys which you created using Putty
- <img src="/Images/3.jpg" />

- Now open Putty and in the Host Name paste your VPS ip address and go to SSH --> AUTH. Then select your private key which you saved earlier and click open.

# Step 4: Creating multiple users:

- To create users simply type: sudo adduser <UserNameHere>

# Step 5: Installing web server:

-Now we can install the server which on which we will host our website. We can choose nginx or Apache as web server but we decided to go with Nginx as it is faster.

- To install nginx simply run: "sudo apt-get install nginx"

# Step 6: Copy files of website stored on local pc to VPS using a file client manager

- We decided to use WinSCP to as our file client as it is easy to use and we can import our session from Putty
- Install WinSCP: https://winscp.net/eng/index.php
- After installation click login and you should see all your VPS files

- <img src="/Images/4.jpg" />

- Now copy the content of your website to /var/www/html/
- Copy paste your VPS ip in browser and you should see your website live.

Links:
https://www.putty.org/