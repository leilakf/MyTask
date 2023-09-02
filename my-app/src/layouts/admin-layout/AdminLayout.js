
import React, { Suspense } from 'react'
import { Switch, Route, Routes } from 'react-router-dom'
import '../../assets/css/paper-dashboard.css';
import '../../assets/css/demo.css';
import { Sidebar } from './Sidebar';
import TopNavbar from './TopNavbar'
import { MainDashboard } from '../../components/dashboard/MainDashboard';
import { PageNotFount } from '../../components/page-not-found/PageNotFount';
import { UserPost } from '../../components/post/UserPost';
import { AxiosCrud } from '../../crud/AxiosCrud';



// const UserPost = React.lazy(() => import('../../components/post/UserPost'))
// const AxiosCrud = React.lazy(() => import('../../crud/AxiosCrud'))
// const PageNotFount = React.lazy(() => import('../../components/page-not-found/PageNotFount'))
// const MainDashboard = React.lazy(() => import('../../components/dashboard/MainDashboard'))
// const loding = React.lazy(() =>import ("../../custom-components/Loding"))



export const  AdminLayout = () => {
  return (
    < >
      <div class="wrapper ">
        <Sidebar />
        <div className="main-panel">
          <TopNavbar />
          <div className="content">
              <Routes>
                <Route path="/" exact Component={MainDashboard} />
                <Route path="/UserPost" Component={UserPost} />
                <Route path='/axiosCrud' Component={AxiosCrud} />
                <Route path="*" Component={PageNotFount} />
              </Routes>
          </div>
        </div>
      </div>
    </>
  )
}
