import ReactionError from "@reactioncommerce/reaction-error";

export default async function updateVehicleModel(context, input) {
  console.log("input ", input);
  const { collections } = context;
  const { VehicleModel } = collections;
  const { product: productInput, productId, shopId } = input;
  //   await context.validatePermissions(
  //     `reaction:legacy:products:${productId}`,
  //     "update",
  //     { shopId }
  //   );
  const currentProduct = await VehicleModel.findOne({ _id: productId, shopId });
  if (!currentProduct) {
    throw new ReactionError("not-found", "Product not found");
  }
  const updates = {};
  const updatedFields = [];
  if (typeof productInput.title === "string" || productInput.title === null) {
    updates["title"] = productInput.title;
    updatedFields.push("title");
  }
  if (productInput.isDeleted != null || productInput.isDeleted != undefined) {
    updates["isDeleted"] = productInput.isDeleted;
    updatedFields.push("isDeleted");
  }
  if (productInput.isVisible != null || productInput.isVisible != undefined) {
    updates["isVisible"] = productInput.isVisible;
    updatedFields.push("isVisible");
  }
  if (
    typeof productInput.update === "string" ||
    productInput.update === null
  ) {
    updates["update"] = productInput.update;
    updatedFields.push("update");
  }
  if (
    typeof productInput.name === "string" ||
    productInput.name === null
  ) {
    updates["name"] = productInput.name;
    updatedFields.push("name");
  }
  if (
    typeof productInput.prototype === "string" ||
    productInput.prototype === null
  ) {
    updates["prototype"] = productInput.prototype;
    updatedFields.push("prototype");
  }
  if (
    typeof productInput.modelYear === "string" ||
    productInput.modelYear === null
  ) {
    updates["modelYear"] = productInput.modelYear;
    updatedFields.push("modelYear");
  }
  if (
    typeof productInput.generationID === "string" ||
    productInput.generationID === null
  ) {
    updates["generationID"] = productInput.generationID;
    updatedFields.push("generationID");
  }
  // if (
  //   typeof productInput.bodyType === "string" ||
  //   productInput.bodyType === null
  // ) {
  //   updates["bodyType"] = productInput.bodyType;
  //   updatedFields.push("bodyType");
  // }
  // if (
  //   typeof productInput.engineType === "string" ||
  //   productInput.engineType === null
  // ) {
  //   updates["engineType"] = productInput.engineType;
  //   updatedFields.push("engineType");
  // }
  // if (
  //   typeof productInput.transmissionType === "string" ||
  //   productInput.transmissionType === null
  // ) {
  //   updates["transmissionType"] = productInput.transmissionType;
  //   updatedFields.push("transmissionType");
  // }
  // if (
  //   typeof productInput.fuelType === "string" ||
  //   productInput.fuelType === null
  // ) {
  //   updates["fuelType"] = productInput.fuelType;
  //   updatedFields.push("fuelType");
  // }
  // if (
  //   typeof productInput.driveType === "string" ||
  //   productInput.driveType === null
  // ) {
  //   updates["driveType"] = productInput.driveType;
  //   updatedFields.push("driveType");
  // }
  // //   console.log("type ", typeof productInput.priceRange);
  // //   console.log("typeof productInput.isVisible ", typeof productInput.isVisible);
  // if (
  //   typeof productInput.seatingCapacity === "string" ||
  //   productInput.seatingCapacity === null
  // ) {
  //   updates["seatingCapacity"] = productInput.seatingCapacity;
  //   updatedFields.push("seatingCapacity");
  // }
  // if (
  //   typeof productInput.priceRange === "number" ||
  //   productInput.priceRange === null
  // ) {
  //   updates["priceRange"] = productInput.priceRange;
  //   updatedFields.push("priceRange");
  // }
  // if (
  //   typeof productInput.description === "string" ||
  //   productInput.description === null
  // ) {
  //   updates["description"] = productInput.description;
  //   updatedFields.push("description");
  // }
  // if (
  //   typeof productInput.carClass === "string" ||
  //   productInput.carClass === null
  // ) {
  //   updates["carClass"] = productInput.carClass;
  //   updatedFields.push("carClass");
  // }
  console.log("updates :: ", updates);
  console.log("updatedFields :: ", updatedFields);
  if (updatedFields.length === 0) {
    throw new ReactionError(
      "invalid-argument",
      "At least one field to update is required"
    );
  }

  const modifier = {
    $set: {
      ...updates,
      updatedAt: new Date(),
    },
  };
  console.log("modifier ", modifier);
  const { value: updatedAccount } = await VehicleModel.findOneAndUpdate(
    {
      _id: productId,
    },
    modifier,
    {
      returnOriginal: false,
    }
  );
  console.log("updatedAccount ", updatedAccount);
  if (updatedAccount) {
    return {
      status: true,
      message: "Data updated",
      VehicleModelData: updatedAccount,
    };
  } else {
    return {
      status: false,
      message: "Server error",
      VehicleModelData: null,
    };
  }
  //   return updatedAccount;
}
