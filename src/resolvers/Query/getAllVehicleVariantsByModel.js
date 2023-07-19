import getPaginatedResponse from "@reactioncommerce/api-utils/graphql/getPaginatedResponse.js";
import wasFieldRequested from "@reactioncommerce/api-utils/graphql/wasFieldRequested.js";
export default async function getAllVehicleVariantsByModel(
  parent,
  args,
  context,
  info
) {
  console.log("args Query: ", args.vehicleModelId);
  const { ...connectionArgs } = args;

  const getAllVehicleVariantsByModelResponse =
    await context.queries.getAllVehicleVariantsByModel(
      context,
      args.vehicleModelId
    );
  console.log(
    "getAllVehicleVariantsByModelResponse ",
    getAllVehicleVariantsByModelResponse
  );

  return getPaginatedResponse(
    getAllVehicleVariantsByModelResponse,
    connectionArgs,
    {
      includeHasNextPage: wasFieldRequested("pageInfo.hasNextPage", info),
      includeHasPreviousPage: wasFieldRequested(
        "pageInfo.hasPreviousPage",
        info
      ),
      includeTotalCount: wasFieldRequested("totalCount", info),
    }
  );
}
