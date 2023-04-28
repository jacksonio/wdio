import * as path from 'path';

export function getAbsoluteRoute(routeToFile: string) {
    return path.join(process.cwd(), routeToFile);
}

export function getExecutionRoute() {
    return process.env.npm_config_feature ?? '**';
}

export async function getElementByQuery(query: string) {
    const elem = await $(query);

    if (!elem) throw new Error('No such element in the page OR wrong query');

    return elem;
}

export async function getAllElementsByQuery(query: string) {
    const elems = await $$(query);

    if (!elems) throw new Error('No such elements in the page OR wrong query');

    return elems;
}
