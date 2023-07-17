import { decodeProductOpaqueId } from "../xforms/id.js";
import Random from "@reactioncommerce/random";

export default async function createVehicleVariant(context, input) {
  console.log("input ", input);
  const { VehicleVariant } = context.collections;
  const newProductId = Random.id();
  const createdAt = new Date();
  const newProductVariant = {
    _id: newProductId,
    ...input,
    createdAt,
    updatedAt: createdAt,
  };
  const VehicleVariantResponse = await VehicleVariant.insertOne(
    newProductVariant
  );
  console.log("VehicleVariantResponse ", VehicleVariantResponse);
  if (VehicleVariantResponse.insertedCount == 1) {
    return VehicleVariantResponse.ops[0];
  } else {
    return null;
  }
}
