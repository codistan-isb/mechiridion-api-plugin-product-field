import ReactionError from "@reactioncommerce/reaction-error";

export default async function getAllVehicleModel(context, input) {
  console.log("input ", input);
  const { collections } = context;
  const { VehicleModel } = collections;
  let { searchQuery } = input;
  let filters = { isVisible: true };

  if (searchQuery) {
    filters.$or = [
      { name: { $regex: searchQuery, $options: "i" } },
      { modelYear: { $regex: searchQuery, $options: "i" } },
      { generationID: { $regex: searchQuery, $options: "i" } },
    ];
  }
  // if (!context.authToken) {
  //   throw new ReactionError("access-denied", "Please Login First");
  // }
  // if (context.user === undefined || context.user === null) {
  //   throw new ReactionError("access-denied", "Please Login First");
  // }
  const getAllVehicleModelResponse = await VehicleModel.find(filters);
  console.log("getAllVehicleModelResponse ", getAllVehicleModelResponse);
  return getAllVehicleModelResponse;
}
