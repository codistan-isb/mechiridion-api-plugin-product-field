import ReactionError from "@reactioncommerce/reaction-error";

export default async function getAllVehicleVariant(context, input) {
  console.log("input ", input);
  const { collections } = context;
  const { VehicleVariant } = collections;
  let { searchQuery } = input;
  let filters = { isVisible: true };

  if (searchQuery) {
    filters.$or = [
      { brand: { $regex: searchQuery, $options: "i" } },
      { model: { $regex: searchQuery, $options: "i" } },
      { generation: { $regex: searchQuery, $options: "i" } },
    ];
  }
  // console.log("filters", filters);
  // if (!context.authToken) {
  //   throw new ReactionError("access-denied", "Please Login First");
  // }
  // if (context.user === undefined || context.user === null) {
  //   throw new ReactionError("access-denied", "Please Login First");
  // }
  const getAllVehicleVariantResponse = await VehicleVariant.find(filters);
  // console.log("getAllVehicleVariantResponse ", getAllVehicleVariantResponse);
  return getAllVehicleVariantResponse;
}
