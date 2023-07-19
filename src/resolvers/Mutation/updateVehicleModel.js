import {
  decodeProductOpaqueId,
  decodeShopOpaqueId,
  decodeTagOpaqueId,
} from "../../xforms/id.js";
import ReactionError from "@reactioncommerce/reaction-error";

export default async function updateVehicleModel(
  parent,
  { input },
  context,
  info
) {
  //   console.log("input ", input);
  const { product: productInput, productId, shopId } = input;
  if (!context.authToken) {
    throw new ReactionError("access-denied", "Please Login First");
  }
  if (context.user === undefined || context.user === null) {
    throw new ReactionError("access-denied", "Please Login First");
  }
  const updateVehicleModelResponse = await context.mutations.updateVehicleModel(
    context,
    {
      product: productInput,
      productId: decodeProductOpaqueId(productId),
      shopId: decodeShopOpaqueId(shopId),
    }
  );
  return updateVehicleModelResponse;
}
