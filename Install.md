# INSTALL.MD

<h1>This file contains the dependencies and steps needed to create your own web server 🕸🕸⚙️</h1>

# Step 1: Choosing VPS provider

- For this step you have to decide which VPS provider you are going to use. There are several VPS providers you can choose from:

**-Google Cloud:**
 <p>Google Cloud gives 300$ free credit to be used in 3 months to new users and creating a VPS is easy. They also have Montreal in their regions.</p>

**-Azure:**
<p> Azure gives 200$ free credit to new users but compared to the other providers creating a VPS on Azure is difficult.
</p>

**Vultr**
<p>Vultr gives 100$ free credit to new users, creating a VPS is straight forward and closest region is Toronto
</p>

**Digital Ocean**
<p>Digital Ocean also gives 100$ free credit and the closest region is Toronto like Vultr:
</p>


**AWS**
<p>AWS provides 100$ credit to students. But deploying a server is hard.
</p>

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

- <img src="/Images/4.jpg" />

# Step 4: Creating multiple users:

- To create users simply type: sudo adduser (username)

# Step 5: Installing web server:

-Now we can install the server which on which we will host our website. We can choose nginx or Apache as web server but we decided to go with Nginx as it is faster.

- To install nginx simply run: "sudo apt-get install nginx"

# Step 6: Copy files of website stored on local pc to VPS using a file client manager

- We decided to use WinSCP to as our file client as it is easy to use and we can import our session from Putty
- Install WinSCP: https://winscp.net/eng/index.php
- After installation click login and you should see all your VPS files

- <img src="/Images/5.jpg" />

- Now copy the content of your website to /var/www/html/
- Copy paste your VPS ip in browser and you should see your website live.

# Step 7: Installing SSL Certificate

- Open putty and just type the following commands

"sudo apt-get install certbot python-certbot-nginx"
"sudo certbot --nginx"

Refresh your website and you should now have SSL certificate (the padlock icon on top left)

# Step 8: Custom domain for your website:

- We used freenom to get custom domain for our website as it is free

- Go to freenom.com
- Search for a domain which you want and proceed to checkout and acquire it
- After acquiring the domain go to Google Cloud Console and search for Cloud DNS
- Select Public and in dns name enter your domain url and click create
- <img src="/Images/6.jpg" />

- Now go inside the cloud dns and copy the 4 dns servers
- <img src="/Images/7.jpg" />

- Click Add Record Set on top and in IPv4 Address paste the VPS ip address

- In freenom go to my domains and inside manage domains paste the copied server and after few mins
  your domain will show your website.

# Step 8: Installing Auto Update Script 
- First navigate to the downloads folder 
`cd /home/username/Downloads`
 
 - Clone the github repo in Downloads

`git clone https://github.com/uraiblakhani2/unix_project.git`

- Move the script_update.sh to the directory /usr/bin by entering the following command
 `mv /home/username/Downloads/unix_project/Script/script_update.sh /usr/bin/`
 
- Move the unix_script.service and unix_script_timer.timer to the directory /etc/systemd/system by entering the following command:
 `mv /home/username/Downloads/unix_project/Script/unix_script.service /etc/systemd/system`
 `mv /home/username/Downloads/unix_project/Script/unix_script.timer /etc/systemd/system`
 
 - Now you have to give permissions to the script and timer by entering the following commands:
  `sudo chmod 777 /usr/bin/unix_script.sh`
  `sudo chmod 777 /etc/systemd/system/unix_script.service`
  `sudo chmod 777 /etc/systemd/system/unix_script.timer`
  
  Chmod 777 will give them read write and excetue permissions
  
  -To enable the service, simply type `sudo systemctl start unix_script.service`
    - If you want to, you can also enable the service by running `sudo systemctl enable unix_script.service`

# Notes
- If you want to change the script sleep duration, please restart the service or stop it before making changes
- If you modify the service file directly, you must run `systemctl daemon-reload` in order for the changes to take effect





<h2>Links Used: </h2>
<div>
            <ul class="b">
             <li>https://www.putty.org/</li>
<li>https://cloud.google.com/</li>
<li>https://freenom.com/</li>
<li>https://winscp.net/eng/index.php</li>
               </ul>
          </div>

