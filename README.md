# Portfolio

## Enabling Custom Domain:

### Purchase Domain:
> If not already owned, purchase a custom domain (e.g. google domains)
> Note: Some hosting sites do not support CNAME forwading for root (google domains is one of these)

### Heroku Steps:
> This generates a DNS target for your hosting platform

- Heroku > portfolio > Settings > under "Domains" click "Add Domain"
 - Type your www.<custom domain>.com domain name
 - Copy the DNS Target for your hosting platform

### Google DNS Steps:
> This allows your custom domain to connect to your Heroku app

Steps:
- Google Domains > DNS > Custom records > Manage custom records
 - **Host Name:** www.<custom domain>.com (you can not put root domain here)
 - **Type:** CNAME
 - **TTL:** 1 hour (default)
 - **Data:* <DNS target copied from Heroku>
  
### Google Forwarding Steps:
> This allows kevin-joy.com to forward to https://www.kevin-joy.com instead of http://www.kevin-joy.com
Note: This does not prevent a user from visiting http://www.kevin-joy.com directly. This is fixed in app.js.
 
Steps:
- Google Domains > Website > Set up forwarding > under "Forward from" click "Edit"
- Two boxes will appear, one blank, one with "www" in it
 - Delete the "www" box (forwarding www.<custom domain>.com will interfere with the DNS CNAME step above)
 - Leave the blank box blank (this will default to the naked address of your domain)
- Under "Forward to" type the full https://www.<custom domain>.com
- Expand "Advanced options" and select the following options:
 - Permanent redirect (301)
 - Forward path
 - SSL On
 - Select "Foward"
 - You should now see a preview of your app, and the settings you just selected for forwarding
 - Note: if you see a warning regarding CNAME, you must remove the fowarding address that matches your DNS CNAME item
  
 



   
