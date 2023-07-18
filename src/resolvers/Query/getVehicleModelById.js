import ReactionError from "@reactioncommerce/reaction-error";
import { decodeProductOpaqueId } from "../../xforms/id.js";

export default async function getVehicleModelById(parent, args, context, info) {
  console.log("args Query: ", args);
  //   const { ...connectionArgs } = args;
  if (!context.authToken) {
    throw new ReactionError("access-denied", "Please Login First");
  }
  if (context.user === undefined || context.user === null) {
    throw new ReactionError("access-denied", "Please Login First");
  }
  let { id } = args;
  id = decodeProductOpaqueId(id);
  const getVehicleModelByIdResponse = await context.queries.getVehicleModelById(
    context,
    id
  );
  //   console.log("getVehicleModelByIdResponse ", getVehicleModelByIdResponse);
  return getVehicleModelByIdResponse;
  //   return getPaginatedResponse(getAllVehicleModelResponse, connectionArgs, {
  //     includeHasNextPage: wasFieldRequested("pageInfo.hasNextPage", info),
  //     includeHasPreviousPage: wasFieldRequested("pageInfo.hasPreviousPage", info),
  //     includeTotalCount: wasFieldRequested("totalCount", info),
  //   });
}
