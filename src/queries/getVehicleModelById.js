export default async function getVehicleModelById(context, input) {
  console.log("input ", input);
  const { collections } = context;
  const { VehicleModel } = collections;
  const getVehicleModelByIdResponse = await VehicleModel.findOne({
    _id: input,
  });
  return getVehicleModelByIdResponse;
}
