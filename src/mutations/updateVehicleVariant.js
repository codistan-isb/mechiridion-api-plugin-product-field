import ReactionError from "@reactioncommerce/reaction-error";

export default async function updateVehicleVariant(context, input) {
  console.log("input :: ", input);
  const { collections } = context;
  const { VehicleVariant } = collections;
  const { product: productInput, productId, shopId } = input;
  const updates = {};
  const updatedFields = [];
  const currentVehicleVariant = await VehicleVariant.findOne({
    _id: productId,
  });
  //   update({
  //     amount: product.amount ? product.amount : find.amount
  //   })
  //   console.log("currentVehicleVariant ", currentVehicleVariant);
  if (!currentVehicleVariant) {
    throw new ReactionError("not-found", "Product not found");
  }
  const updateValue = {
    vehicleModelId: productInput?.vehicleModelId
      ? productInput?.vehicleModelId
      : currentVehicleVariant?.vehicleModelId,
    title: productInput?.title
      ? productInput?.title
      : currentVehicleVariant?.title,
    engineVariant: {
      driveline: productInput?.engineVariant?.driveline
        ? productInput?.engineVariant?.driveline
        : currentVehicleVariant?.engineVariant?.driveline,
      engineType: productInput?.engineVariant?.engineType
        ? productInput?.engineVariant?.engineType
        : currentVehicleVariant?.engineVariant?.engineType,
      hybrid: productInput?.engineVariant?.hybrid
        ? productInput?.engineVariant?.hybrid
        : currentVehicleVariant?.engineVariant?.hybrid,
      numberOfForwardGears: productInput?.engineVariant?.numberOfForwardGears
        ? productInput?.engineVariant?.numberOfForwardGears
        : currentVehicleVariant?.engineVariant.numberOfForwardGears,
      transmission: productInput?.engineVariant?.transmission
        ? productInput?.engineVariant?.transmission
        : currentVehicleVariant?.engineVariant.transmission,
      horsePower: productInput?.engineVariant?.horsePower
        ? productInput?.engineVariant?.horsePower
        : currentVehicleVariant?.engineVariant.horsePower,
      torque: productInput?.engineVariant?.torque
        ? productInput?.engineVariant?.torque
        : currentVehicleVariant?.engineVariant.torque,
    },
    antiBrakeSystem: productInput?.antiBrakeSystem
      ? productInput?.antiBrakeSystem
      : currentVehicleVariant?.antiBrakeSystem,
    fuelVariant: {
      cityMpg: productInput?.fuelVariant?.cityMpg
        ? productInput?.fuelVariant?.cityMpg
        : currentVehicleVariant?.fuelVariant.cityMpg,
      fuelType: productInput?.fuelVariant?.fuelType
        ? productInput?.fuelVariant?.fuelType
        : currentVehicleVariant?.fuelVariant?.fuelType,
      highwayMpg: productInput?.fuelVariant?.highwayMpg
        ? productInput?.fuelVariant?.highwayMpg
        : currentVehicleVariant?.fuelVariant?.highwayMpg,
    },
    description: productInput?.description
      ? productInput?.description
      : currentVehicleVariant?.description,
    dimensionsVariant: {
      height: productInput?.dimensionsVariant?.height
        ? productInput?.dimensionsVariant?.height
        : currentVehicleVariant?.dimensionsVariant?.height,
      length: productInput?.dimensionsVariant?.length
        ? productInput?.dimensionsVariant?.length
        : currentVehicleVariant?.dimensionsVariant?.length,
      width: productInput?.dimensionsVariant?.width
        ? productInput?.dimensionsVariant?.width
        : currentVehicleVariant?.dimensionsVariant?.width,
      weight: productInput?.dimensionsVariant?.weight
        ? productInput?.dimensionsVariant?.weight
        : currentVehicleVariant?.dimensionsVariant?.weight,
    },
  };
  console.log("updateValue:: ", updateValue);

  const modifier = {
    $set: {
      ...updateValue,
      updatedAt: new Date(),
    },
  };
  console.log("modifier ", modifier);
  const { value: updatedAccount } = await VehicleVariant.findOneAndUpdate(
    {
      _id: productId,
    },
    modifier,
    {
      returnOriginal: false,
    }
  );
  console.log("updatedAccount ::: ", updatedAccount);
  if (updatedAccount) {
    return {
      status: true,
      message: "Data updated",
      VehicleVariantData: updatedAccount,
    };
  } else {
    return {
      status: false,
      message: "Server error",
      VehicleVariantData: null,
    };
  }
  //   if (typeof productInput.title === "string" || productInput.title === null) {
  //     updates["title"] = productInput.title;
  //     updatedFields.push("title");
  //   }
  //   if (
  //     typeof productInput.engineVariant.driveline === "string" ||
  //     productInput.engineVariant.driveline === null
  //   ) {
  //     updates["engineVariant.driveline"] = productInput.engineVariant.driveline;
  //     updatedFields.push("engineVariant.driveline");
  //   }
  //   if (
  //     typeof productInput.antiBrakeSystem === "string" ||
  //     productInput.antiBrakeSystem === null
  //   ) {
  //     updates["antiBrakeSystem"] = productInput.antiBrakeSystem;
  //     updatedFields.push("antiBrakeSystem");
  //   }
  //   if (
  //     typeof productInput.description === "string" ||
  //     productInput.description === null
  //   ) {
  //     updates["description"] = productInput.description;
  //     updatedFields.push("description");
  //   }
  //   if (
  //     typeof productInput.vehicleModelId === "string" ||
  //     productInput.vehicleModelId === null
  //   ) {
  //     updates["vehicleModelId"] = productInput.vehicleModelId;
  //     updatedFields.push("vehicleModelId");
  //   }
  //   console.log("updates :: ", updates);
  //   console.log("updatedFields :: ", updatedFields);

  // const resp = await VehicleVariant.up
}
