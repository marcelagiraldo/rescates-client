import { LayoutGeneral } from "../layouts/LayoutGeneral";
import { Admin }  from "../pages/admin/Admin";
import { NotFound } from "../pages/NotFound/NotFound";
import { SignIn } from "../pages/SignIn";


const AdminRoutes = [
    {path: "/admin",component: Admin,layout: LayoutGeneral}
];

const GeneralRoutes = [
    {path: "/",component: SignIn,layout: LayoutGeneral},
    {path: "*",component: NotFound,layout: LayoutGeneral}
];

const AllRoutesProject = [...AdminRoutes, ...GeneralRoutes];
export default AllRoutesProject;
