import ReactionError from "@reactioncommerce/reaction-error";

export default async function getAllVehicleModel(context, input) {
  console.log("input ", input);
  const { collections } = context;
  const { VehicleModel } = collections;
  if (!context.authToken) {
    throw new ReactionError("access-denied", "Please Login First");
  }
  if (context.user === undefined || context.user === null) {
    throw new ReactionError("access-denied", "Please Login First");
  }
  const getAllVehicleModelResponse = await VehicleModel.find({});
  console.log("getAllVehicleModelResponse ", getAllVehicleModelResponse);
  return getAllVehicleModelResponse;
}
