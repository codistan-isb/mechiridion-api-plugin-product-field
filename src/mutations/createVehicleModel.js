import {
  decodeProductOpaqueId,
  decodeShopOpaqueId,
  encodeProductOpaqueId,
} from "../xforms/id.js";
import Random from "@reactioncommerce/random";

export default async function createVehicleModel(context, input, shopId) {
  const productId = decodeProductOpaqueId(input.productId);
  input.productId = productId;
  const { VehicleModel } = context.collections;
  console.log("input ", input);
  console.log("shopId ", decodeShopOpaqueId(shopId));
  const newProductId = Random.id();
  const createdAt = new Date();
  const newProduct = {
    _id: newProductId,
    ...input,
    shopId: decodeShopOpaqueId(shopId),
    createdAt,
    updatedAt: createdAt,
  };
  console.log("new Product ", newProduct);
  const VehicleModelResponse = await VehicleModel.insertOne(newProduct);
  console.log("VehicleModelResponse ", VehicleModelResponse);
  console.log(
    "VehicleModelResponse.ops[0] ",
    encodeProductOpaqueId(VehicleModelResponse.ops[0]._id)
  );
  if (VehicleModelResponse.insertedCount == 1) {
    return VehicleModelResponse.ops[0];
  } else {
    return null;
  }
}
