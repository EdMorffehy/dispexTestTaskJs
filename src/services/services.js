import instanceApi from "../config/instanse";
import ServiceUrl from "../enums/serviceUrl";

export const Services = instanceApi.injectEndpoints({
  endpoints: build => ({
    getStreets: build.query({
      query: () => ({
        url: ServiceUrl.STREETS
      })
    }),
    getHouses: build.query({
      query: streetId => ({
        url: `${ServiceUrl.HOUSES}/${streetId}`
      })
    }),
    getApartments: build.query({
      query: params => ({
        url: ServiceUrl.APARTMENT,
        params
      })
    }),
    getClientsByAddress: build.query({
      query: addressId => ({
        url: ServiceUrl.CLIENTS,
        params: {
          addressId
        }
      }),
      providesTags: [ServiceUrl.CLIENTS]
    }),
    createClient: build.mutation({
      query: body => ({
        url: ServiceUrl.CREATE_CLIENT,
        method: "POST",
        body
      })
    }),
    assignedClient: build.mutation({
      query: body => ({
        url: ServiceUrl.ASSIGNED_CLIENT,
        method: "PUT",
        body
      }),
      invalidatesTags: (_, error) => (error ? [] : [ServiceUrl.CLIENTS])
    }),
    deleteClient: build.mutation({
      query: clientId => ({
        url: `${ServiceUrl.ASSIGNED_CLIENT}/${clientId}`,
        method: "DELETE"
      }),
      invalidatesTags: (_, error) => (error ? [] : [ServiceUrl.CLIENTS])
    })
  })
});

export const {
  useGetStreetsQuery,
  useGetHousesQuery,
  useGetApartmentsQuery,
  useGetClientsByAddressQuery,
  useCreateClientMutation,
  useAssignedClientMutation,
  useDeleteClientMutation
} = Services;
