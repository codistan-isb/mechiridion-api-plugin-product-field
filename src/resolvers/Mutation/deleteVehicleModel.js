import ReactionError from "@reactioncommerce/reaction-error";

export default async function deleteVehicleModel(
  parent,
  { id },
  context,
  info
) {
  // console.log("input ", input);
  if (!context.authToken) {
    throw new ReactionError("access-denied", "Please Login First");
  }
  if (context.user === undefined || context.user === null) {
    throw new ReactionError("access-denied", "Please Login First");
  }
  const createVehicleModelResponse = await context.mutations.deleteVehicleModel(
    context,
    id
  );
  return createVehicleModelResponse;
}
