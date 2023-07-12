# openaix

Create blog post with image banner with OpenAi &amp; Nodejs

#### how to get app up and running on your local computer

Clone or download this git repository to you computer

```
git clone https://github.com/psinthorn/openaix.git
```

install all dependencies and start services

<b>Backend service</b>

access to backend servicer folder

```
cd openaix/api/openai
```

run commmand to install dependencies using npm command

```
npm install
```

to start backend run command

```
npm run dev
```

you should see system running on port 5000

<b>Frontend service</b>

cd to openaix/frontend folder

```
run commmand to install dependencies using npm command
```

npm install

```

to start backend run command
```

npm run start

```
now you should see frontend up and running on port 3000


#### Install Tailwind CSS

Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.js and postcss.config.js.

```

> npm install -D tailwindcss postcss autoprefixer
> npx tailwindcss init -p

```

#### Configure your template paths

Add the paths to all of your template files in your tailwind.config.js file.

```

/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: [
"./app/**/_.{js,ts,jsx,tsx,mdx}",
"./pages/\*\*/_.{js,ts,jsx,tsx,mdx}",
"./components/\*_/_.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

],
theme: {
extend: {},
},
plugins: [],
}

```

```

#### How to use .env file with create-react-app

if you need to use .env file with create-react-app you need to put REACT*APP* in front of your custom variable name example

```
REACT_APP_API_KEY = 1234567890asdfghh
REACT_APP_API_HOST = api.host.com
```
