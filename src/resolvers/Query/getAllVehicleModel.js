import getPaginatedResponse from "@reactioncommerce/api-utils/graphql/getPaginatedResponse.js";
import wasFieldRequested from "@reactioncommerce/api-utils/graphql/wasFieldRequested.js";
export default async function getAllVehicleModel(parent, args, context, info) {
  console.log("args Query: ", args);
  const { ...connectionArgs } = args;

  const getAllVehicleModelResponse = await context.queries.getAllVehicleModel(
    context,
    args.input
  );
  console.log("getAllVehicleModelResponse ", getAllVehicleModelResponse);

  // return getAllVehicleModelResponse;
  return getPaginatedResponse(getAllVehicleModelResponse, connectionArgs, {
    includeHasNextPage: wasFieldRequested("pageInfo.hasNextPage", info),
    includeHasPreviousPage: wasFieldRequested("pageInfo.hasPreviousPage", info),
    includeTotalCount: wasFieldRequested("totalCount", info),
  });
}
