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
            data: json.map(resource => ({ ...resource, id: resource.ProductName })),
            total: parseInt(headers.get('X-Total-Count').split('/').pop(), 10)
        }));
    },
    getOne: (resource, params) =>
        httpClient(`${BackendURL}/${resource}/${params.id}`).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        })),

    update: (resource, params) =>
        httpClient(`${BackendURL}/${resource}/update/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: { ...params.data, id: json.id } })),

    create: (resource, params) =>
        httpClient(`${BackendURL}/${resource}/add`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        })),

    delete: (resource, params) =>
        httpClient(`${BackendURL}/${resource}/delete/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json })),

    deleteMany: (resource, params) => {
        return httpClient(`${BackendURL}/${resource}/deleteMany`, {
            method: 'DELETE',
            body: JSON.stringify({ id: params.ids }),
        }).then(({ json }) => ({ data: json }));
    },
}

export default dataProvider;