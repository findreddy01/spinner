import * as React from 'react'

// where ever we have axios post call we will call this function

if (_.get(observer, 'props.store.showCircle')) {
_.get(observer, 'props.store.showSpinner')()
}

if (_.get(observer, 'props.store.hideCircle')) {
_.get(observer, 'props.store.hideSpinner')()
}