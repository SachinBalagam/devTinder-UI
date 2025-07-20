## DevTinder UI

- create vite-react app
  npm create vite@latest devTinderUI -- --template react
- Install all node packages required
  npm install
- Remove unnecessary code
- Write Hello world Program and run
  npm run dev
- Now In this project we are using tailwind css and daisyUI
- Install tailwind css v4.0
  npm install tailwindcss @tailwindcss/vite

- write the above code in vite.config.js file
  import { defineConfig } from 'vite'
  import tailwindcss from '@tailwindcss/vite'
  export default defineConfig({
  plugins: [
  tailwindcss(),
  ],
  })

- import tailwindcss in index.css file
  @import "tailwindcss";

- Now write some tailwindcss commands in the code and start the app. It should reflect

-Now install daisyUi
npm i -D daisyui@latest

- put require('daisyui') in vite.config.js

- shortcut for boiler code is "rafce"(react arrow function export component)

- created Body,Feed,Footer,Login,Navbar,Profile components
- created utils folder => appStore.js, constants.js, userSlice.js files in it
- installed react-redux and redux-toolkit to manage globalContext
- configured Store => Provider => createdSlice => added reducers
- dispatched in Login Page
- useSelector in Navbar
- Urls should not be hard coded so constants file is created and there we kept the url and using across the app

## setting up frontend in aws

mkdir -p ~/.ssh
mv /mnt/d/Namaste\ NodeJS/UI/developer-secret.pem ~/.ssh/
chmod 400 ~/.ssh/developer-secret.pem
ls -l ~/.ssh/developer-secret.pem

ssh -i ~/.ssh/developer-secret.pem ubuntu@ec2-52-66-245-32.ap-south-1.compute.amazonaws.com

installing nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
install node
nvm install 20.10.0

clone from github
https://github.com/SachinBalagam/devTinder.git
https://github.com/SachinBalagam/devTinder-UI.git

# Frontend to aws

change the path to devtinder-ui
install all packages
-npm install
now build the project
-npm run build
Install nginix
-sudo apt update
-sudo apt install nginx
start the nginx
-sudo systemctl start nginx
-sudo systemctl enable nginx

copy code from dist(build files) to nginx web server(/var/www/html)
sudo scp -r dist/\* /var/www/html/

Enable port :80 in your instance

#Revision for deployment of Frontend in AWS

SignIn to AWS
Launch a instance with creating a .pem file
Open ubuntu shell
go to the path where .pem is present
change the permission of that file
chmod 400 'file-name.pem'

If you are on windows with wsl+ubuntu then first you need to copy that from your actual folder to root folder of ubuntu system then change the permissions
cp /mnt/c/Users/balag/Downloads/devTinder-secret.pem ~/
chmod 400 ~/devTinder-secret.pem

then connect to EC2 Cloud
ssh -i ~/devTinder-secret.pem ubuntu@ec2-13-218-62-28.compute-1.amazonaws.com

Now install nvm
now nodejs that should be same version that is using in the project that is deploying now
clone the project files from github

now update the apt
sudo apt update

install nginx
sudo apt install nginx

Now start and enable them
sudo systemctl start nginx -> will start it
sudo systemctl enable nginx -> will start automatically on each reboot

Now go to the project path and run npm install to download all the packages we needed
Now run npm build to create a dist folder

copy it to the nginx server folder path that is /var/www/html/
command is sudo scp -r frompath topath

Enable the port :80 in the EC2 instance. service -> service group -> Inbound rules -> Add :80port

Now you can access with the public address
