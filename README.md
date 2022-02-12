# Portfolio

## Forced HTTPS
> app.js has code to force `https://` visit despite user specifically visiting `http://`

> `Note:` This code currently prevents the website from being visited locally. Comment it out when
> hosting locally for now.

## Enabling A Custom Domain:

### Purchase Domain:
> If not already owned, purchase a custom domain (e.g. google domains)

> `Note:` Some hosting sites do not support CNAME forwading for root (google domains is one of these)

### Heroku Steps:
> This generates a DNS target for your hosting platform

- Heroku > portfolio > Settings > under "Domains" click "Add Domain"
 - Type your `www<area>.domain.com` domain name
 - Copy the DNS Target for your hosting platform

### Google DNS Steps:
> This allows your custom domain to connect to your Heroku app
 
- Google Domains > DNS > Custom records > Manage custom records
 - **Host Name:** `www<area>.domain.com (you can not put root domain here)`
 - **Type:** `CNAME`
 - **TTL:** `1 hour (default)`
 - **Data:** `DNS target copied from Heroku`
  
### Google Forwarding Steps:
> This allows your naked domain address to forward to `https://www<area>.domain.com` instead of http
 
> `Note:` This does not prevent a user from visiting `http://www<area>.domain.com` directly. This is addressed in app.js.
 
- Google Domains > Website > Set up forwarding > under "Forward from" click "Edit"
 - Two boxes will appear, one blank, one with "www" in it
  - Delete the "www" box (forwarding `www<area>.domain.com` will interfere with the DNS CNAME step above)
  - Leave the blank box blank (this will default to the naked address of your domain)
- Under "Forward to" type the full `https://www<area>.domain.com`
- Expand "Advanced options" and select the following options:
  - `Permanent redirect (301)`
  - `Forward path`
  - `SSL On`
  - `Select "Foward"`
  - You should now see a preview of your app, and the settings you just selected for forwarding
  > `Note:` if you see a warning regarding CNAME, you must remove the fowarding address that matches your DNS CNAME item
  
 



   
