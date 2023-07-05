export default async function createVehicleVariant(
  parent,
  { input },
  context,
  info
) {
  // console.log("input ", input);
  const createVehicleModelResponse =
    await context.mutations.createVehicleVariant(context, input);
  return createVehicleModelResponse;
}
