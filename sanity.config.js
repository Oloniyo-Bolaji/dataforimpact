import {defineConfig} from 'sanity'
import {structureTool} from "sanity/structure"
import schemas from './src/sanity/schema';

const config = defineConfig({
  projectId: 'wt78w02v',
  dataset: 'production',
  title:'dataforimpact-studio',
  apiVersion:"2025-08-11",
  basePath:"/admin",
  schema: {types: schemas},
  plugins: [structureTool()],
})

export default config;