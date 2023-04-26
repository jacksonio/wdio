import * as path from 'path'

export function getAbsoluteRoute(routeToFile: string) {
    return path.join(process.cwd(), routeToFile)
}

export function getExecutionRoute() {
    return process.env.npm_config_feature ?? '**';
}
