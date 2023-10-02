import ReactionError from "@reactioncommerce/reaction-error";

export default async function getAllVehicleVariantsByModel(context, input) {
  console.log("input ", input);
  const { collections } = context;
  const { VehicleVariant } = collections;
  if (!context.authToken) {
    throw new ReactionError("access-denied", "Please Login First");
  }
  if (context.user === undefined || context.user === null) {
    throw new ReactionError("access-denied", "Please Login First");
  }
  const getAllVehicleVariantsByModelResponse = await VehicleVariant.find({
    vehicleModelId: input,
  });
  console.log(
    "getAllVehicleVariantsByModelResponse ",
    getAllVehicleVariantsByModelResponse
  );
  if (getAllVehicleVariantsByModelResponse) {
    return getAllVehicleVariantsByModelResponse;
  } else {
    return null;
  }
}
