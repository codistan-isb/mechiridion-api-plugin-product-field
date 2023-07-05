import { decodeProductOpaqueId } from "../xforms/id.js";

export default async function createVehicleVariant(context, input) {
  console.log("input ", input);
  const { VehicleVariant } = context.collections;
  const VehicleVariantResponse = await VehicleVariant.insertOne(input);
  console.log("VehicleVariantResponse ", VehicleVariantResponse);
  if (VehicleVariantResponse.insertedCount == 1) {
    return VehicleVariantResponse.ops[0];
  } else {
    return null;
  }
}
