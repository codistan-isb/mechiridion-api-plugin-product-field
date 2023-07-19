import ReactionError from "@reactioncommerce/reaction-error";

export default async function deleteVehicleModel(context, input) {
  console.log("input ", input);
  const { VehicleModel } = context.collections;
  const currentProduct = await VehicleModel.findOne({
    _id: input,
  });
  console.log("currentProduct ", currentProduct);
  if (!currentProduct) {
    throw new ReactionError("not-found", "Product not found");
  }
  const updates = {};
  updates["isDeleted"] = true;
  const modifier = {
    $set: {
      ...updates,
      updatedAt: new Date(),
    },
  };
  console.log("Modifier ", modifier);
  const { value: updatedAccount } = await VehicleModel.findOneAndUpdate(
    {
      _id: input,
    },
    modifier,
    {
      returnOriginal: false,
    }
  );
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
  //   const newProductVariant = {
  //     _id: newProductId,
  //     ...input,
  //     createdAt,
  //     updatedAt: createdAt,
  //   };
  //   const VehicleVariantResponse = await VehicleVariant.insertOne(
  //     newProductVariant
  //   );
  //   console.log("VehicleVariantResponse ", VehicleVariantResponse);
  //   if (VehicleVariantResponse.insertedCount == 1) {
  //     return VehicleVariantResponse.ops[0];
  //   } else {
  //     return null;
  //   }
}
