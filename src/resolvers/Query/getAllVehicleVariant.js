import getPaginatedResponse from "@reactioncommerce/api-utils/graphql/getPaginatedResponse.js";
import wasFieldRequested from "@reactioncommerce/api-utils/graphql/wasFieldRequested.js";
export default async function getAllVehicleVariant(
  parent,
  args,
  context,
  info
) {
  console.log("args Query: ", args);
  const { ...connectionArgs } = args;

  const getAllVehicleVariantResponse =
    await context.queries.getAllVehicleVariant(context, args.input);
  console.log("getAllVehicleModelResponse ", getAllVehicleVariantResponse);

  return getPaginatedResponse(getAllVehicleVariantResponse, connectionArgs, {
    includeHasNextPage: wasFieldRequested("pageInfo.hasNextPage", info),
    includeHasPreviousPage: wasFieldRequested("pageInfo.hasPreviousPage", info),
    includeTotalCount: wasFieldRequested("totalCount", info),
  });
}
