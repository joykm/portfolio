# Portfolio

## Enabling Custom Domain:

### Purchase Domain:
If not already owned, purchase a custom domain (e.g. google domains)
Note: Some hosting sites do not support CNAME forwading for root (google domains is one of these)

### Heroku Steps:
Visit heroku > portfolio > settings > under "Domains" click "Add Domain"
Type your domain name in
Copy the DNS Target

### Google DNS Steps:
This allows www.kevin-joy.com to connect to my Heroku app

Google Domains > DNS > Custom records > Manage custom records
Host Name: www.kevin-joy.com (you can not put root domain here)
Type: CNAME
TTL: 1 hour (default)
Data: <paste DNS target copied from Heroku>
  
### Google Forwarding Steps:
This allows kevin-joy.com to forward to https://www.kevin-joy.com instead of http://www.kevin-joy.com
  
Google Domains > Website > Set up forwarding > under "Forward from" click "Edit"
Two boxes will appear, one blank, one with "www" in it.
Delete the "www" box (forwarding www.kevin-joy.com will interfere with the DNS CNAME step which used www.kevin-joy.com as well)
Leave the blank box blank (this will default to kevin-joy.com)
Under "Forward to" type the full https address (https://www.kevin-joy.com)
Expand "Advanced options" and select the following options:
  Permanent redirect (301)
  Forward path
  SSL On
Select "Foward"
You should now see a preview of your app, and the settings you just selected for forwarding (e.g. Forward from: kevin-joy.com)
  
 Note: This does not prevent a user from visiting http://www.kevin-joy.com directly. This is fixed in app.js.



   
