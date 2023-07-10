# openaix

Create blog post with image banner with OpenAi &amp; Nodejs

#### how to get app up and running on your local computer

<strong>Clone or download this git repository to you computer</strong>

```
    git clone https://github.com/psinthorn/openaix.git
```

<strong>install all dependencies and start services</strong>
<strong>Backend service</strong>

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

<strong>Frontend service</strong>
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
