# Password Generator (Web)
Single Page Web App implimentation of the bash script [MJNS password-generator](https://github.com/mjnshosting/password-generator) to generate passwords
[Live Example](http://pass.mjns.it)

## Purpose
I needed a customized password generator that does random characters and dictionary based password with a mix of numbers and special characters.
 
#### Original Word List: [dwyl/english-words - Word List ](https://github.com/dwyl/english-words)
* The included dictionary excludes words that have less than 10 characters (121642 words)
#### Inspiraton: 
[untroubled.org - Secure Passphrase Generator](https://untroubled.org/pwgen/ppgen.cgi) 

[MJNS password-generator](https://github.com/mjnshosting/password-generator)

## Help
To install use git clone then configure your web server with "<install dir>/public" as the page root
### Ex: NGINX
```
#Password Generator
server {
        server_name pass.mjns.it;
        gzip on;
        gzip_types      text/plain application/xml;
        gzip_proxied    no-cache no-store private expired auth;
        gzip_min_length 1000;

        location / {
                root   /opt/passwordGeneratorWeb/public;
                index  index.html index.htm;
        }
}
```
### Ex: Apache
```
<VirtualHost *:80>
        ServerName pass.mjns.it
        DocumentRoot /var/www/html/passwordGeneratorWeb/public/
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```
I recommed you use Lets Encrypt to secure this page. Cheap, Easy, Fast but vulnerabilities may be present themselves later. Be careful.

Once cloned and configured then open your browser, enter url, and finally click your password type then copy.
