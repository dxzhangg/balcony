import router from './router'
import NProgress from 'nprogress' // progress bar
import { getPageTitle } from './utils/layout'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async(to, from, next) => {
     // start progress bar
    NProgress.start()

    // set page title
    document.title = getPageTitle(to.meta.title)

    next()
    NProgress.done()
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})