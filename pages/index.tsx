import React from 'react'
import { initializePage } from '../utils'
import { BaseLayout } from '../ui/layouts'

const Home = () => (
    <BaseLayout>
        I bims de home page.
        {getName("yeelone")}
    </BaseLayout>
)

function getName(name: string) {
    return name ;
}
export default initializePage(Home)
