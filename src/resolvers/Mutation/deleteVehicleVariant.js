export default async function deleteVehicleVariant(
  parent,
  { id },
  context,
  info
) {
  // console.log("input ", input);
  const createVehicleModelResponse =
    await context.mutations.deleteVehicleVariant(context, id);
  return createVehicleModelResponse;
}
