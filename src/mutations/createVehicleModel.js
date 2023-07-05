import { decodeProductOpaqueId } from "../xforms/id.js";

export default async function createVehicleModel(context, input) {
  const productId = decodeProductOpaqueId(input.productId);
  //   console.log("input ", input.productId);
  input.productId = productId;
  const { VehicleModel } = context.collections;
  //   console.log("input ", input);
  const VehicleModelResponse = await VehicleModel.insertOne(input);
  //   console.log("VehicleModelResponse ", VehicleModelResponse.insertedCount);
  if (VehicleModelResponse.insertedCount == 1) {
    return VehicleModelResponse.ops[0];
  } else {
    return null;
  }
}
