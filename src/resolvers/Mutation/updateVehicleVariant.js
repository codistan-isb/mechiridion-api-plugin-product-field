import {
  decodeProductOpaqueId,
  decodeShopOpaqueId,
  decodeTagOpaqueId,
} from "../../xforms/id.js";
import ReactionError from "@reactioncommerce/reaction-error";

export default async function updateVehicleVariant(
  parent,
  { input },
  context,
  info
) {
  // console.log("input start ", input);
  const { product: productInput, productId, shopId } = input;
  const { collections } = context;
  const { VehicleVariant } = collections;
  if (!context.authToken) {
    throw new ReactionError("access-denied", "Please Login First");
  }
  if (context.user === undefined || context.user === null) {
    throw new ReactionError("access-denied", "Please Login First");
  }

  const updateVehicleVariantResponse =
    await context.mutations.updateVehicleVariant(context, {
      product: productInput,
      productId: decodeProductOpaqueId(productId),
      shopId: decodeShopOpaqueId(shopId),
    });
  return updateVehicleVariantResponse;
}
