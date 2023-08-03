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

  // Check and update fields in updateValue
  // if (productInput?.vehicleModelId !== undefined) {
  //   updates["vehicleModelId"] = productInput.vehicleModelId;
  //   updatedFields.push("vehicleModelId");
  // }

  // if (productInput?.title !== undefined) {
  //   updates["title"] = productInput.title;
  //   updatedFields.push("title");
  // }

  // if (productInput?.generationName !== undefined) {
  //   updates["generationName"] = productInput.generationName;
  //   updatedFields.push("generationName");
  // }

  // if (productInput?.yearFrom !== undefined) {
  //   updates["yearFrom"] = productInput.yearFrom;
  //   updatedFields.push("yearFrom");
  // }

  // if (productInput?.yearTo !== undefined) {
  //   updates["yearTo"] = productInput.yearTo;
  //   updatedFields.push("yearTo");
  // }

  // if (productInput?.batteryCapacityKwPerH !== undefined) {
  //   updates["batteryCapacityKwPerH"] = productInput.batteryCapacityKwPerH;
  //   updatedFields.push("batteryCapacityKwPerH");
  // }

  // if (productInput?.frontRearAxelLoad !== undefined) {
  //   updates["frontRearAxelLoad"] = productInput.frontRearAxelLoad;
  //   updatedFields.push("frontRearAxelLoad");
  // }

  // if (productInput?.electricRangeKm !== undefined) {
  //   updates["electricRangeKm"] = productInput.electricRangeKm;
  //   updatedFields.push("electricRangeKm");
  // }

  // if (productInput?.safetyAssessment !== undefined) {
  //   updates["safetyAssessment"] = productInput.safetyAssessment;
  //   updatedFields.push("safetyAssessment");
  // }

  // if (productInput?.Series !== undefined) {
  //   updates["Series"] = productInput.Series;
  //   updatedFields.push("Series");
  // }

  // if (productInput?.bodyType !== undefined) {
  //   updates["bodyType"] = productInput.bodyType;
  //   updatedFields.push("bodyType");
  // }

  // if (productInput?.Trim !== undefined) {
  //   updates["Trim"] = productInput.Trim;
  //   updatedFields.push("Trim");
  // }

  // if (productInput?.maxSpeed !== undefined) {
  //   updates["maxSpeed"] = productInput.maxSpeed;
  //   updatedFields.push("maxSpeed");
  // }

  // if (productInput?.steeringType !== undefined) {
  //   updates["steeringType"] = productInput.steeringType;
  //   updatedFields.push("steeringType");
  // }

  // // EngineVariantInput fields
  // if (productInput?.engineVariant !== undefined) {
  //   if (productInput.engineVariant.driveline !== undefined) {
  //     updates["engineVariant.driveline"] = productInput.engineVariant.driveline;
  //     updatedFields.push("engineVariant.driveline");
  //   }
  //   if (productInput.engineVariant.engineType !== undefined) {
  //     updates["engineVariant.engineType"] =
  //       productInput.engineVariant.engineType;
  //     updatedFields.push("engineVariant.engineType");
  //   }
  //   if (productInput.engineVariant.hybrid !== undefined) {
  //     updates["engineVariant.hybrid"] = productInput.engineVariant.hybrid;
  //     updatedFields.push("engineVariant.hybrid");
  //   }
  //   if (productInput.engineVariant.numberOfForwardGears !== undefined) {
  //     updates["engineVariant.numberOfForwardGears"] =
  //       productInput.engineVariant.numberOfForwardGears;
  //     updatedFields.push("engineVariant.numberOfForwardGears");
  //   }
  //   if (productInput.engineVariant.transmission !== undefined) {
  //     updates["engineVariant.transmission"] =
  //       productInput.engineVariant.transmission;
  //     updatedFields.push("engineVariant.transmission");
  //   }
  //   if (productInput.engineVariant.horsePower !== undefined) {
  //     updates["engineVariant.horsePower"] =
  //       productInput.engineVariant.horsePower;
  //     updatedFields.push("engineVariant.horsePower");
  //   }
  //   if (productInput.engineVariant.torque !== undefined) {
  //     updates["engineVariant.torque"] = productInput.engineVariant.torque;
  //     updatedFields.push("engineVariant.torque");
  //   }
  //   // And so on for the rest of the fields...
  // }

  // // FuelVariantInput fields
  // if (productInput?.fuelVariant !== undefined) {
  //   if (productInput.fuelVariant.cityMpg !== undefined) {
  //     updates["fuelVariant.cityMpg"] = productInput.fuelVariant.cityMpg;
  //     updatedFields.push("fuelVariant.cityMpg");
  //   }
  //   if (productInput.fuelVariant.fuelType !== undefined) {
  //     updates["fuelVariant.fuelType"] = productInput.fuelVariant.fuelType;
  //     updatedFields.push("fuelVariant.fuelType");
  //   }
  //   if (productInput.fuelVariant.highwayMpg !== undefined) {
  //     updates["fuelVariant.highwayMpg"] = productInput.fuelVariant.highwayMpg;
  //     updatedFields.push("fuelVariant.highwayMpg");
  //   }
  // }

  // const updateValue = {
  //   vehicleModelId: productInput?.vehicleModelId
  //     ? productInput?.vehicleModelId
  //     : currentVehicleVariant?.vehicleModelId,
  //   title: productInput?.title
  //     ? productInput?.title
  //     : currentVehicleVariant?.title,
  //   engineVariant: {
  //     driveline: productInput?.engineVariant?.driveline
  //       ? productInput?.engineVariant?.driveline
  //       : currentVehicleVariant?.engineVariant?.driveline,
  //     engineType: productInput?.engineVariant?.engineType
  //       ? productInput?.engineVariant?.engineType
  //       : currentVehicleVariant?.engineVariant?.engineType,
  //     hybrid: productInput?.engineVariant?.hybrid
  //       ? productInput?.engineVariant?.hybrid
  //       : currentVehicleVariant?.engineVariant?.hybrid,
  //     numberOfForwardGears: productInput?.engineVariant?.numberOfForwardGears
  //       ? productInput?.engineVariant?.numberOfForwardGears
  //       : currentVehicleVariant?.engineVariant.numberOfForwardGears,
  //     transmission: productInput?.engineVariant?.transmission
  //       ? productInput?.engineVariant?.transmission
  //       : currentVehicleVariant?.engineVariant.transmission,
  //     horsePower: productInput?.engineVariant?.horsePower
  //       ? productInput?.engineVariant?.horsePower
  //       : currentVehicleVariant?.engineVariant.horsePower,
  //     torque: productInput?.engineVariant?.torque
  //       ? productInput?.engineVariant?.torque
  //       : currentVehicleVariant?.engineVariant.torque,
  //   },
  //   antiBrakeSystem: productInput?.antiBrakeSystem
  //     ? productInput?.antiBrakeSystem
  //     : currentVehicleVariant?.antiBrakeSystem,
  //   fuelVariant: {
  //     cityMpg: productInput?.fuelVariant?.cityMpg
  //       ? productInput?.fuelVariant?.cityMpg
  //       : currentVehicleVariant?.fuelVariant.cityMpg,
  //     fuelType: productInput?.fuelVariant?.fuelType
  //       ? productInput?.fuelVariant?.fuelType
  //       : currentVehicleVariant?.fuelVariant?.fuelType,
  //     highwayMpg: productInput?.fuelVariant?.highwayMpg
  //       ? productInput?.fuelVariant?.highwayMpg
  //       : currentVehicleVariant?.fuelVariant?.highwayMpg,
  //   },
  //   description: productInput?.description
  //     ? productInput?.description
  //     : currentVehicleVariant?.description,
  //   dimensionsVariant: {
  //     height: productInput?.dimensionsVariant?.height
  //       ? productInput?.dimensionsVariant?.height
  //       : currentVehicleVariant?.dimensionsVariant?.height,
  //     length: productInput?.dimensionsVariant?.length
  //       ? productInput?.dimensionsVariant?.length
  //       : currentVehicleVariant?.dimensionsVariant?.length,
  //     width: productInput?.dimensionsVariant?.width
  //       ? productInput?.dimensionsVariant?.width
  //       : currentVehicleVariant?.dimensionsVariant?.width,
  //     weight: productInput?.dimensionsVariant?.weight
  //       ? productInput?.dimensionsVariant?.weight
  //       : currentVehicleVariant?.dimensionsVariant?.weight,
  //   },
  // };
  console.log("updateValue:: ", productInput);

  const modifier = {
    $set: {
      ...productInput,
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
