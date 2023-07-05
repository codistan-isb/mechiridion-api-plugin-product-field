export default async function createVehicleModel(
  parent,
  { input, shopId },
  context,
  info
) {
  // console.log("input ", input);
  const createVehicleModelResponse = await context.mutations.createVehicleModel(
    context,
    input,
    shopId
  );
  return createVehicleModelResponse;
}
