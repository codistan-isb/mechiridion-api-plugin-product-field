export default async function getVehicleModelById(context, input) {
  console.log("input ", input);
  const { collections } = context;
  const { VehicleModel } = collections;
  // const { id } = input;
  const getVehicleModelByIdResponse = await VehicleModel.findOne({
    _id: input,
  });
  //   console.log("getVehicleModelByIdResponse ", getVehicleModelByIdResponse);
  return getVehicleModelByIdResponse;
}
