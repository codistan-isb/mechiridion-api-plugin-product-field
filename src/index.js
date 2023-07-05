import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pkg = require("../package.json");
import resolvers from "./resolvers/index.js";
import schemas from "./schemas/index.js";
import mutations from "./mutations/index.js";

// const Identification = new SimpleSchema({
//   Make: {
//     type: String,
//     optional: true,
//   },
//   ModelYear: {
//     type: Number,
//     optional: true,
//   },
//   Classification: {
//     type: String,
//     optional: true,
//   },
//   ID: {
//     type: String,
//     optional: true,
//   },
//   Year: {
//     type: Number,
//     optional: true,
//   },
// });
// const EngineInformation = new SimpleSchema({
//   Driveline: {
//     type: String,
//     optional: true,
//   },
//   EngineType: {
//     type: String,
//     optional: true,
//   },
//   Hybrid: {
//     type: Boolean,
//     optional: true,
//   },
//   NumberofForwardGears: {
//     type: Number,
//     optional: true,
//   },
//   Transmission: {
//     type: String,
//     optional: true,
//   },
//   Horsepower: {
//     type: Number,
//     optional: true,
//   },
//   Torque: {
//     type: Number,
//     optional: true,
//   },
// });
// const Dimensions = new SimpleSchema({
//   Height: {
//     type: Number,
//     optional: true,
//   },
//   Length: {
//     type: Number,
//     optional: true,
//   },
//   Width: {
//     type: Number,
//     optional: true,
//   }
// });
// const FuelInformation = new SimpleSchema({
//   Citympg: {
//     type: Number,
//     optional: true,
//   },
//   FuelType: {
//     type: String,
//     optional: true,
//   },
//   Highwaympg: {
//     type: Number,
//     optional: true,
//   }
// });
// const SendGiff = new SimpleSchema({
//   imageLink: {
//     type: String,
//     optional: true,
//   },
// });
// const Images = new SimpleSchema({
//   imageLink: {
//     type: String,
//     optional: true,
//   },
// });
function myStartup(context) {
  context.simpleSchemas.Product.extend({
    countryOfOrigin: {
      type: String,
      min: 0,
      optional: true,
    },
    // "Identification.$": {
    //   type: Identification,
    // },
    website: {
      type: String,
      min: 0,
      optional: true,
    },
    // "EngineInformation.$": {
    //   type: EngineInformation,
    // },
    parentCompany: {
      type: String,
      min: 0,
      optional: true,
    },
    // "Dimensions.$": {
    //   type: Dimensions,
    // },
    establishedYear: {
      type: String,
      min: 0,
      optional: true,
    },
    // "FuelInformation.$": {
    //   type: FuelInformation,
    // },
    // EngineTechnology: {
    //   type: String,
    //   min: 0,
    //   optional: true,
    // },
    // FuelDeliverySystem: {
    //   type: String,
    //   min: 0,
    //   optional: true,
    // },
    // Images: {
    //   type: Array,
    //   min: 0,
    //   optional: true,
    // },
    // "Images.$": {
    //   type: Images,
    // },
    // SendGiff: {
    //   type: Array,
    //   min: 0,
    //   optional: true,
    // },
    // "SendGiff.$": {
    //   type: SendGiff,
    // },
  });
  context.simpleSchemas.ProductVariant.extend({
    countryOfOrigin: {
      type: String,
      min: 0,
      optional: true,
    },
    // "Identification.$": {
    //   type: Identification,
    // },
    website: {
      type: String,
      min: 0,
      optional: true,
    },
    // "EngineInformation.$": {
    //   type: EngineInformation,
    // },
    parentCompany: {
      type: String,
      min: 0,
      optional: true,
    },
    // "Dimensions.$": {
    //   type: Dimensions,
    // },
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
    // "Identification.$": {
    //   type: Identification,
    // },
    website: {
      type: String,
      min: 0,
      optional: true,
    },
    // "EngineInformation.$": {
    //   type: EngineInformation,
    // },
    parentCompany: {
      type: String,
      min: 0,
      optional: true,
    },
    // "Dimensions.$": {
    //   type: Dimensions,
    // },
    establishedYear: {
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
      // catalogVariant.Images = productVariant.Images || null;
      // catalogVariant.EngineTechnology = productVariant.EngineTechnology || null;
      // catalogVariant.FuelDeliverySystem =
      //   productVariant.FuelDeliverySystem || null;
      // catalogVariant.SendGiff = productVariant.SendGiff || null;
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
  });
}
export default register;
