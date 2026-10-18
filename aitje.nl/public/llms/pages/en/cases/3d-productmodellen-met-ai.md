# From technical drawing to 3D product model.

Official page: https://aitje.com/en/cases/3d-productmodellen-met-ai

> AITJE built a workflow for a partner specialising in contact cables that converts product data and technical drawings from WordPress into 3D models. AITJE Coder controls Blender; Three.js makes the GLB files usable on the website. Following optimisation, API costs fell from approximately €9 to €0.11–€0.18 per product.

Case study — Power leads / 3D catalogue & workflow optimisation

With connector cables, the details make all the difference: the shape of a connector, the position of the contacts and the way a cable connects. A photograph shows just one side. A rotatable 3D model helps customers view the product from multiple angles.

Our partner has a catalogue of more than 10,000 products. Manually creating a model and a series of images for each product was prohibitively expensive on that scale. AITJE therefore built a repeatable workflow based on the product data and technical drawings that were already in the WordPress CMS.

## The approach

### Collect product

A targeted tool call retrieves the product, the associated data and the technical drawing from WordPress. The agent receives the information for this task without having to search through the entire website themselves.

### Loading instructions

A fixed prompt and structured Markdown instructions describe the modelling rules, materials, output and checks. The agent does not need to reinvent the workflow for every product.

### Controlling Blender

AITJE Coder Uses OpenCode in automatic mode, connected to GPT-6Astra via the OpenAIAPI. Using Blender MCP, the agent builds the geometry based on the retrieved drawing and product information.

### Export to GLB

The model is exported as a GLB: a file in which geometry and materials are stored together. The CMS links the output to the correct product, so that the result is included in the catalogue.

### Display on the website

Three.js loads the GLB model into the browser. Customers can rotate the product and view it from multiple angles. GSAP handles the presentation and movement within the interface.

## Contact

[Contact AITJE](https://aitje.com/en/contact) — contact@aitje.com
