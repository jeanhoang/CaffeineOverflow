import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const BackendURL = process.env.REACT_APP_BACKEND_URL;
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const query = {
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
        };
        const url = `${BackendURL}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ headers, json }) => ({
            data: json.map(resource => ({ ...resource, id: resource._id })),
            total: parseInt(headers.get('X-Total-Count').split('/').pop(), 10)
        }));
    },

    update: (resource, params) =>
        httpClient(`${BackendURL}/${resource}/${params.ProductName}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json })),

    create: (resource, params) =>
        httpClient(`${BackendURL}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json._id },
        })),

    delete: (resource, params) =>
        httpClient(`${BackendURL}/${resource}/${params.ProductName}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json })),
}

export default dataProvider;