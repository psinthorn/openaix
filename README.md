# openaix

Create blog post with image banner with OpenAi &amp; Nodejs

Install Tailwind CSS
Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.js and postcss.config.js.

```
> npm install -D tailwindcss postcss autoprefixer
> npx tailwindcss init -p
```

Configure your template paths
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
