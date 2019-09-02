# Password Generator (Web)
Single Page Web App implimentation of the bash script [MJNS password-generator](https://github.com/mjnshosting/password-generator) to generate passwords
 
## Purpose
I needed a customized password generator that does random characters and dictionary based password with a mix of numbers and special characters.
 
#### Original Word List: [dwyl/english-words - Word List ](https://github.com/dwyl/english-words)
* The included dictionary excludes words that have less than 10 characters (121642 words)
#### Inspiraton: 
[untroubled.org - Secure Passphrase Generator](https://untroubled.org/pwgen/ppgen.cgi) 

[MJNS passowrd-generator](https://github.com/mjnshosting/password-generator)

## Help
To install use git clone then configure your web server with "<install dir>/public" as the page root
### Ex: NGINX
```
#Password Generator
server {
        listen 80;
        listen [::]:80;
        server_name pass.mjns.it;

        location / {
                root   /opt/passwordGeneratorWeb/public;
                index  index.html index.htm;
        }
}
```
Once cloned and configured then open your browser, enter url, and finally click your password type then copy.
