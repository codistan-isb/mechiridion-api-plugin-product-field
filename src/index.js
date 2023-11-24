import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pkg = require("../package.json");
import resolvers from "./resolvers/index.js";
import schemas from "./schemas/index.js";
import mutations from "./mutations/index.js";
import queries from "./queries/index.js";

function myStartup(context) {
  context.simpleSchemas.Product.extend({
    countryOfOrigin: {
      type: String,
      min: 0,
      optional: true,
    },
    website: {
      type: String,
      min: 0,
      optional: true,
    },
    parentCompany: {
      type: String,
      min: 0,
      optional: true,
    },
    name: {
      type: String,
      min: 0,
      optional: true,
    },
    id: {
      type: String,
      min: 0,
      optional: true,
    },
    update: {
      type: String,
      min: 0,
      optional: true,
    },
    establishedYear: {
      type: String,
      min: 0,
      optional: true,
    },
  });
  context.simpleSchemas.ProductVariant.extend({
    countryOfOrigin: {
      type: String,
      min: 0,
      optional: true,
    },

    website: {
      type: String,
      min: 0,
      optional: true,
    },

    parentCompany: {
      type: String,
      min: 0,
      optional: true,
    },
    name: {
      type: String,
      min: 0,
      optional: true,
    },
    id: {
      type: String,
      min: 0,
      optional: true,
    },
    update: {
      type: String,
      min: 0,
      optional: true,
    },
    establishedYear: {
      type: String,
      min: 0,
      optional: true,
    },
  });
  context.simpleSchemas.CatalogProductVariant.extend({
    countryOfOrigin: {
      type: String,
      min: 0,
      optional: true,
    },
    website: {
      type: String,
      min: 0,
      optional: true,
    },
    parentCompany: {
      type: String,
      min: 0,
      optional: true,
    },
    establishedYear: {
      type: String,
      min: 0,
      optional: true,
    },
    name: {
      type: String,
      min: 0,
      optional: true,
    },
    id: {
      type: String,
      min: 0,
      optional: true,
    },
    update: {
      type: String,
      min: 0,
      optional: true,
    },
  });
}

function myPublishProductToCatalog(
  catalogProduct,
  { context, product, shop, variants }
) {
  catalogProduct.variants &&
    catalogProduct.variants.map((catalogVariant) => {
      const productVariant = variants.find(
        (variant) => variant._id === catalogVariant.variantId
      );
      catalogVariant.countryOfOrigin = productVariant.countryOfOrigin || null;
      catalogVariant.website = productVariant.website || null;
      catalogVariant.parentCompany = productVariant.parentCompany || null;
      catalogVariant.establishedYear = productVariant.establishedYear || null;
      catalogVariant.update = productVariant.update || null;
      catalogVariant.name = productVariant.name || null;
      catalogVariant.id = productVariant.id || null;
    });
}
async function register(app) {
  await app.registerPlugin({
    label: pkg.label,
    name: pkg.name,
    version: pkg.version,
    collections: {
      VehicleModel: {
        name: "VehicleModel",
      },
      VehicleVariant: {
        name: "VehicleVariant",
      },
    },
    functionsByType: {
      startup: [myStartup],
      publishProductToCatalog: [myPublishProductToCatalog],
    },
    graphQL: {
      resolvers,
      schemas,
    },
    mutations,
    queries,
  });
}
export default register;
