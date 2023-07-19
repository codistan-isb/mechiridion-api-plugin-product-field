import ReactionError from "@reactioncommerce/reaction-error";

export default async function getAllVehicleVariant(context, input) {
  console.log("input ", input);
  const { collections } = context;
  const { VehicleVariant } = collections;
  if (!context.authToken) {
    throw new ReactionError("access-denied", "Please Login First");
  }
  if (context.user === undefined || context.user === null) {
    throw new ReactionError("access-denied", "Please Login First");
  }
  const getAllVehicleVariantResponse = await VehicleVariant.find({});
  console.log("getAllVehicleVariantResponse ", getAllVehicleVariantResponse);
  return getAllVehicleVariantResponse;
}
