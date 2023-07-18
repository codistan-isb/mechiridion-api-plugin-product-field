import { decodeProductOpaqueId } from "../xforms/id.js";
import Random from "@reactioncommerce/random";

export default async function deleteVehicleVariant(context, input) {
  console.log("input ", input);
  const { VehicleVariant } = context.collections;
  const currentProduct = await VehicleVariant.findOne({
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
  const { value: updatedAccount } = await VehicleVariant.findOneAndUpdate(
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
      VehicleVariantData: updatedAccount,
    };
  } else {
    return {
      status: false,
      message: "Server error",
      VehicleVariantData: null,
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
