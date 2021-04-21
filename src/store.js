import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"

import userReducer from`./features/users`

export default configuresStore({
    reducer:{
        user:userReducer
    },
    middlesware:getDefaultMiddleware({
serializableCheck:false
    })
    }

 

)