export default async function getVehicleVariantById(context, input) {
    console.log("input ", input);
    const { collections } = context;
    const { VehicleVariant } = collections;
    const getVehicleVariantByIdResponse = await VehicleVariant.findOne({
      _id: input,
    });
      console.log("getVehicleVariantByIdResponse ", getVehicleVariantByIdResponse);
    return getVehicleVariantByIdResponse;
  }
  