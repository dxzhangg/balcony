import Config from '../config'

const title = Config.title || 'Admin Template'

export function getPageTitle(pageTitle) {
    if (pageTitle) {
        return `${pageTitle} - ${title}`
    }
    return `${title}`
}