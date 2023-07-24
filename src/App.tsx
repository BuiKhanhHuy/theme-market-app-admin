import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DefaultLayout from './layouts/DefaultLayout';

import Loader from "./common/Loader";

const ConfessionList = lazy(() => import('./pages/Confession').then(module => ({ default: module.ConfessionList })));
const ConfessionAdd = lazy(() => import('./pages/Confession').then(module => ({ default: module.ConfessionAdd })));
const ConfessionEdit = lazy(() => import('./pages/Confession').then(module => ({ default: module.ConfessionEdit })));

const UserList = lazy(() => import('./pages/User').then(module => ({ default: module.UserList })));
const UserAdd = lazy(() => import('./pages/User').then(module => ({ default: module.UserAdd })));
const UserEdit = lazy(() => import('./pages/User').then(module => ({ default: module.UserEdit })));

const CategoryList = lazy(() => import('./pages/Category').then(module => ({ default: module.CategoryList })));
const CategoryAdd = lazy(() => import('./pages/Category').then(module => ({ default: module.CategoryAdd })));
const CategoryEdit = lazy(() => import('./pages/Category').then(module => ({ default: module.CategoryEdit })));

const ProductTypeList = lazy(() => import('./pages/ProductType').then(module => ({ default: module.ProductTypeList })));
const ProductTypeAdd = lazy(() => import('./pages/ProductType').then(module => ({ default: module.ProductTypeAdd })));
const ProductTypeEdit = lazy(() => import('./pages/ProductType').then(module => ({ default: module.ProductTypeEdit })));

const TagList = lazy(() => import('./pages/Tag').then(module => ({ default: module.TagList })));
const TagAdd = lazy(() => import('./pages/Tag').then(module => ({ default: module.TagAdd })));
const TagEdit = lazy(() => import('./pages/Tag').then(module => ({ default: module.TagEdit })));

const ProductList = lazy(() => import('./pages/Product').then(module => ({ default: module.ProductList })));
const ProductAdd = lazy(() => import('./pages/Product').then(module => ({ default: module.ProductAdd })));
const ProductEdit = lazy(() => import('./pages/Product').then(module => ({ default: module.ProductEdit })));

const SavedProductList = lazy(() => import('./pages/SaveProduct').then(module => ({ default: module.SavedProductList })));
const SavedProductAdd = lazy(() => import('./pages/SaveProduct').then(module => ({ default: module.SavedProductAdd })));
const SavedProductEdit = lazy(() => import('./pages/SaveProduct').then(module => ({ default: module.SavedProductEdit })));

const PaymentTypeList = lazy(() => import('./pages/PaymentType').then(module => ({ default: module.PaymentTypeList })));
const PaymentTypeAdd = lazy(() => import('./pages/PaymentType').then(module => ({ default: module.PaymentTypeAdd })));
const PaymentTypeEdit = lazy(() => import('./pages/PaymentType').then(module => ({ default: module.PaymentTypeEdit })));

const PaymentStatusList = lazy(() => import('./pages/PaymentStatus').then(module => ({ default: module.PaymentStatusList })));
const PaymentStatusAdd = lazy(() => import('./pages/PaymentStatus').then(module => ({ default: module.PaymentStatusAdd })));
const PaymentStatusEdit = lazy(() => import('./pages/PaymentStatus').then(module => ({ default: module.PaymentStatusEdit })));

const OrderList = lazy(() => import('./pages/Order').then(module => ({ default: module.OrderList })));
const OrderAdd = lazy(() => import('./pages/Order').then(module => ({ default: module.OrderAdd })));
const OrderEdit = lazy(() => import('./pages/Order').then(module => ({ default: module.OrderEdit })));

const BlogList = lazy(() => import('./pages/Blog').then(module => ({ default: module.BlogList })));
const BlogAdd = lazy(() => import('./pages/Blog').then(module => ({ default: module.BlogAdd })));
const BlogEdit = lazy(() => import('./pages/Blog').then(module => ({ default: module.BlogEdit })));

const ContactTypeList = lazy(() => import('./pages/ContactType').then(module => ({ default: module.ContactTypeList })));
const ContactTypeAdd = lazy(() => import('./pages/ContactType').then(module => ({ default: module.ContactTypeAdd })));
const ContactTypeEdit = lazy(() => import('./pages/ContactType').then(module => ({ default: module.ContactTypeEdit })));

const ContactList = lazy(() => import('./pages/Contact').then(module => ({ default: module.ContactList })));
const ContactAdd = lazy(() => import('./pages/Contact').then(module => ({ default: module.ContactAdd })));
const ContactEdit = lazy(() => import('./pages/Contact').then(module => ({ default: module.ContactEdit })));

const ApproadList = lazy(() => import('./pages/Approach').then(module => ({ default: module.ApproadList })));
const ApproadAdd = lazy(() => import('./pages/Approach').then(module => ({ default: module.ApproadAdd })));
const ApproadEdit = lazy(() => import('./pages/Approach').then(module => ({ default: module.ApproadEdit })));

const EstimateBudgetList = lazy(() => import('./pages/EstimateBudget').then(module => ({ default: module.EstimateBudgetList })));
const EstimateBudgetAdd = lazy(() => import('./pages/EstimateBudget').then(module => ({ default: module.EstimateBudgetAdd })));
const EstimateBudgetEdit = lazy(() => import('./pages/EstimateBudget').then(module => ({ default: module.EstimateBudgetEdit })));

const ServicePackageList = lazy(() => import('./pages/ServicePackage').then(module => ({ default: module.ServicePackageList })));
const ServicePackageAdd = lazy(() => import('./pages/ServicePackage').then(module => ({ default: module.ServicePackageAdd })));
const ServicePackageEdit = lazy(() => import('./pages/ServicePackage').then(module => ({ default: module.ServicePackageEdit })));

const TimelineList = lazy(() => import('./pages/Timeline').then(module => ({ default: module.TimelineList })));
const TimelineAdd = lazy(() => import('./pages/Timeline').then(module => ({ default: module.TimelineAdd })));
const TimelineEdit = lazy(() => import('./pages/Timeline').then(module => ({ default: module.TimelineEdit })));

const HireList = lazy(() => import('./pages/Hire').then(module => ({ default: module.HireList })));
const HireAdd = lazy(() => import('./pages/Hire').then(module => ({ default: module.HireAdd })));
const HireEdit = lazy(() => import('./pages/Hire').then(module => ({ default: module.HireEdit })));




function App() {
  return (
    <BrowserRouter >
      <Routes>
        {/* <Route path="/signin" element={<SignIn />} /> */}
        <Route element={<DefaultLayout />}>
          {/* <Route index element={<Dashboard />} /> */}

          {/* Start: profiles */}
          <Route path="confession">
            <Route
              path=""
              element={
                <Suspense fallback={<Loader />}>
                  <ConfessionList />
                </Suspense>
              }
            />
            <Route
              path="add"
              element={
                <Suspense fallback={<Loader />}>
                  <ConfessionAdd />
                </Suspense>
              }
            />
            <Route
              path="edit"
              element={
                <Suspense fallback={<Loader />}>
                  <ConfessionEdit />
                </Suspense>
              }
            />
          </Route>
          <Route path="user">
            <Route
              path=""
              element={
                <Suspense fallback={<Loader />}>
                  <UserList />
                </Suspense>
              }
            />
            <Route
              path="add"
              element={
                <Suspense fallback={<Loader />}>
                  <UserAdd />
                </Suspense>
              }
            />
            <Route
              path=":id/edit"
              element={
                <Suspense fallback={<Loader />}>
                  <UserEdit />
                </Suspense>
              }
            />
          </Route>
          {/* End: profiles */}

          {/* Start: products */}
          <Route path="category">
            <Route
              path=""
              element={
                <Suspense fallback={<Loader />}>
                  <CategoryList />
                </Suspense>
              }
            />
            <Route
              path="add"
              element={
                <Suspense fallback={<Loader />}>
                  <CategoryAdd />
                </Suspense>
              }
            />
            <Route
              path="edit"
              element={
                <Suspense fallback={<Loader />}>
                  <CategoryEdit />
                </Suspense>
              }
            />
          </Route>
          <Route path="product-type">
            <Route
              path=""
              element={
                <Suspense fallback={<Loader />}>
                  <ProductTypeList />
                </Suspense>
              }
            />
            <Route
              path="add"
              element={
                <Suspense fallback={<Loader />}>
                  <ProductTypeAdd />
                </Suspense>
              }
            />
            <Route
              path="edit"
              element={
                <Suspense fallback={<Loader />}>
                  <ProductTypeEdit />
                </Suspense>
              }
            />
          </Route>
          <Route path="tag">
            <Route
              path=""
              element={
                <Suspense fallback={<Loader />}>
                  <TagList />
                </Suspense>
              }
            />
            <Route
              path="add"
              element={
                <Suspense fallback={<Loader />}>
                  <TagAdd />
                </Suspense>
              }
            />
            <Route
              path="edit"
              element={
                <Suspense fallback={<Loader />}>
                  <TagEdit />
                </Suspense>
              }
            />
          </Route>
          <Route path="product">
            <Route
              path=""
              element={
                <Suspense fallback={<Loader />}>
                  <ProductList />
                </Suspense>
              }
            />
            <Route
              path="add"
              element={
                <Suspense fallback={<Loader />}>
                  <ProductAdd />
                </Suspense>
              }
            />
            <Route
              path="edit"
              element={
                <Suspense fallback={<Loader />}>
                  <ProductEdit />
                </Suspense>
              }
            />
          </Route>
          <Route path="saved-product">
            <Route
              path=""
              element={
                <Suspense fallback={<Loader />}>
                  <SavedProductList />
                </Suspense>
              }
            />
            <Route
              path="add"
              element={
                <Suspense fallback={<Loader />}>
                  <SavedProductAdd />
                </Suspense>
              }
            />
            <Route
              path="edit"
              element={
                <Suspense fallback={<Loader />}>
                  <SavedProductEdit />
                </Suspense>
              }
            />
          </Route>
          {/* End: products */}

          {/* Start: orders */}
          <Route path="payment-type">
            <Route
              path=""
              element={
                <Suspense fallback={<Loader />}>
                  <PaymentTypeList />
                </Suspense>
              }
            />
            <Route
              path="add"
              element={
                <Suspense fallback={<Loader />}>
                  <PaymentTypeAdd />
                </Suspense>
              }
            />
            <Route
              path="edit"
              element={
                <Suspense fallback={<Loader />}>
                  <PaymentTypeEdit />
                </Suspense>
              }
            />
          </Route>
          <Route path="payment-status">
            <Route
              path=""
              element={
                <Suspense fallback={<Loader />}>
                  <PaymentStatusList />
                </Suspense>
              }
            />
            <Route
              path="add"
              element={
                <Suspense fallback={<Loader />}>
                  <PaymentStatusAdd />
                </Suspense>
              }
            />
            <Route
              path="edit"
              element={
                <Suspense fallback={<Loader />}>
                  <PaymentStatusEdit />
                </Suspense>
              }
            />
          </Route>
          <Route path="order">
            <Route
              path=""
              element={
                <Suspense fallback={<Loader />}>
                  <OrderList />
                </Suspense>
              }
            />
            <Route
              path="add"
              element={
                <Suspense fallback={<Loader />}>
                  <OrderAdd />
                </Suspense>
              }
            />
            <Route
              path="edit"
              element={
                <Suspense fallback={<Loader />}>
                  <OrderEdit />
                </Suspense>
              }
            />
          </Route>
          {/* End: orders */}

          {/* Start: blog */}
          <Route path="blog">
            <Route
              path=""
              element={
                <Suspense fallback={<Loader />}>
                  <BlogList />
                </Suspense>
              }
            />
            <Route
              path="add"
              element={
                <Suspense fallback={<Loader />}>
                  <BlogAdd />
                </Suspense>
              }
            />
            <Route
              path="edit"
              element={
                <Suspense fallback={<Loader />}>
                  <BlogEdit />
                </Suspense>
              }
            />
          </Route>
          {/* End: blog */}


          {/* Start: contacts */}
          <Route path="contact-type">
            <Route
              path=""
              element={
                <Suspense fallback={<Loader />}>
                  <ContactTypeList />
                </Suspense>
              }
            />
            <Route
              path="add"
              element={
                <Suspense fallback={<Loader />}>
                  <ContactTypeAdd />
                </Suspense>
              }
            />
            <Route
              path="edit"
              element={
                <Suspense fallback={<Loader />}>
                  <ContactTypeEdit />
                </Suspense>
              }
            />
          </Route>
          <Route path="contact">
            <Route
              path=""
              element={
                <Suspense fallback={<Loader />}>
                  <ContactList />
                </Suspense>
              }
            />
            <Route
              path="add"
              element={
                <Suspense fallback={<Loader />}>
                  <ContactAdd />
                </Suspense>
              }
            />
            <Route
              path="edit"
              element={
                <Suspense fallback={<Loader />}>
                  <ContactEdit />
                </Suspense>
              }
            />
          </Route>
          {/* End: contacts */}

          {/* Start: hires */}
          <Route path="approad">
            <Route
              path=""
              element={
                <Suspense fallback={<Loader />}>
                  <ApproadList />
                </Suspense>
              }
            />
            <Route
              path="add"
              element={
                <Suspense fallback={<Loader />}>
                  <ApproadAdd />
                </Suspense>
              }
            />
            <Route
              path="edit"
              element={
                <Suspense fallback={<Loader />}>
                  <ApproadEdit />
                </Suspense>
              }
            />
          </Route>
          <Route path="estimate-budget">
            <Route
              path=""
              element={
                <Suspense fallback={<Loader />}>
                  <EstimateBudgetList />
                </Suspense>
              }
            />
            <Route
              path="add"
              element={
                <Suspense fallback={<Loader />}>
                  <EstimateBudgetAdd />
                </Suspense>
              }
            />
            <Route
              path="edit"
              element={
                <Suspense fallback={<Loader />}>
                  <EstimateBudgetEdit />
                </Suspense>
              }
            />
          </Route>
          <Route path="service-package">
            <Route
              path=""
              element={
                <Suspense fallback={<Loader />}>
                  <ServicePackageList />
                </Suspense>
              }
            />
            <Route
              path="add"
              element={
                <Suspense fallback={<Loader />}>
                  <ServicePackageAdd />
                </Suspense>
              }
            />
            <Route
              path="edit"
              element={
                <Suspense fallback={<Loader />}>
                  <ServicePackageEdit />
                </Suspense>
              }
            />
          </Route>
          <Route path="timeline">
            <Route
              path=""
              element={
                <Suspense fallback={<Loader />}>
                  <TimelineList />
                </Suspense>
              }
            />
            <Route
              path="add"
              element={
                <Suspense fallback={<Loader />}>
                  <TimelineAdd />
                </Suspense>
              }
            />
            <Route
              path="edit"
              element={
                <Suspense fallback={<Loader />}>
                  <TimelineEdit />
                </Suspense>
              }
            />
          </Route>
          <Route path="hire">
            <Route
              path=""
              element={
                <Suspense fallback={<Loader />}>
                  <HireList />
                </Suspense>
              }
            />
            <Route
              path="add"
              element={
                <Suspense fallback={<Loader />}>
                  <HireAdd />
                </Suspense>
              }
            />
            <Route
              path="edit"
              element={
                <Suspense fallback={<Loader />}>
                  <HireEdit />
                </Suspense>
              }
            />
          </Route>
          {/* End: hires */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
