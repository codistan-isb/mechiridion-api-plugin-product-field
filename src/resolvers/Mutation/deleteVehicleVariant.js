import { decodeProductOpaqueId } from "../../xforms/id.js";
import Random from "@reactioncommerce/random";
import ReactionError from "@reactioncommerce/reaction-error";

export default async function deleteVehicleVariant(
  parent,
  { id },
  context,
  info
) {
  if (!context.authToken) {
    throw new ReactionError("access-denied", "Please Login First");
  }
  if (context.user === undefined || context.user === null) {
    throw new ReactionError("access-denied", "Please Login First");
  }
  // console.log("input ", input);
  const createVehicleModelResponse =
    await context.mutations.deleteVehicleVariant(context, id);
  return createVehicleModelResponse;
}
