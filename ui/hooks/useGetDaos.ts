import { useState, useEffect } from "react";
import {
  IDaoQueryParams,
  SortDirection,
  DaoSortBy,
  DaoListItem,
} from "@aragon/sdk-client";
import { useAragonSDKContext } from "../lib/aragonContext";

interface UseGetDAOsParams extends Partial<IDaoQueryParams> {
  limit?: number;
}

const useGetDaos = (params: UseGetDAOsParams = {}): DaoListItem[] | null => {
  const { client } = useAragonSDKContext();
  const { limit = 10, ...queryParams } = params;
  const [daos, setDaos] = useState<DaoListItem[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (client) {
        const query: IDaoQueryParams = {
          skip: 0,
          limit,
          direction: SortDirection.ASC,
          sortBy: DaoSortBy.POPULARITY,
          ...queryParams,
        };
        const result = await client.methods.getDaos(query);
        setDaos(result);
      }
    };
    fetchData();
  }, [client, limit, queryParams]);

  return daos;
};

export default useGetDaos;
