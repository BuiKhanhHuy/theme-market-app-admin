import React from 'react'

const temp = () => {
  return (
    <div>temp</div>
  )
}

export default temp

// const router = createBrowserRouter([
//     {
//       element: <DefaultLayout />,
//       children: [
//         {
//           path: "/confession",
//           children: [
//             {
//               element: <ConfessionList />,
//             },
//             {
//               path: "add",
//               element: <ConfessionAdd />,
//             },
//             {
//               path: "edit",
//               element: <ConfessionEdit />,
//             }
//           ],
//         },
//         {
//           path: "/user",
//           children: [
//             {
//               element: <UserList />,
//             },
//             {
//               path: "add",
//               element: <UserAdd />,
//             },
//             {
//               path: "edit",
//               element: <UserEdit />,
//             }
//           ],
//         },
//         {
//           path: "/category",
//           children: [
//             {
//               element: <CategoryList />,
//             },
//             {
//               path: "add",
//               element: <CategoryAdd />,
//             },
//             {
//               path: "edit",
//               element: <CategoryEdit />,
//             }
//           ],
//         },
//         {
//           path: "/product-type",
//           children: [
//             {
//               element: <ProductTypeList />,
//             },
//             {
//               path: "add",
//               element: <ProductTypeAdd />,
//             },
//             {
//               path: "edit",
//               element: <ProductTypeEdit />,
//             }
//           ],
//         },
//         {
//           path: "/tag",
//           children: [
//             {
//               element: <TagList />,
//             },
//             {
//               path: "add",
//               element: <TagAdd />,
//             },
//             {
//               path: "edit",
//               element: <TagEdit />,
//             }
//           ],
//         },
//         {
//           path: "/product",
//           children: [
//             {
//               element: <ProductList />,
//             },
//             {
//               path: "add",
//               element: <ProductAdd />,
//             },
//             {
//               path: "edit",
//               element: <ProductEdit />,
//             }
//           ],
//         },
//         {
//           path: "/saved-product",
//           children: [
//             {
//               element: <SavedProductList />,
//             },
//             {
//               path: "add",
//               element: <SavedProductAdd />,
//             },
//             {
//               path: "edit",
//               element: <SavedProductEdit />,
//             }
//           ],
//         },
//         {
//           path: "/payment-type",
//           children: [
//             {
//               element: <PaymentTypeList />,
//             },
//             {
//               path: "add",
//               element: <PaymentTypeAdd />,
//             },
//             {
//               path: "edit",
//               element: <PaymentTypeEdit />,
//             }
//           ],
//         },
//         {
//           path: "/payment-status",
//           children: [
//             {
//               element: <PaymentStatusList />,
//             },
//             {
//               path: "add",
//               element: <PaymentStatusAdd />,
//             },
//             {
//               path: "edit",
//               element: <PaymentStatusEdit />,
//             }
//           ],
//         },
//         {
//           path: "/order",
//           children: [
//             {
//               element: <OrderList />,
//             },
//             {
//               path: "add",
//               element: <OrderAdd />,
//             },
//             {
//               path: "edit",
//               element: <OrderEdit />,
//             }
//           ],
//         },
//         {
//           path: "/blog",
//           children: [
//             {
//               element: <BlogList />,
//             },
//             {
//               path: "add",
//               element: <BlogAdd />,
//             },
//             {
//               path: "edit",
//               element: <BlogEdit />,
//             }
//           ],
//         },
//         {
//           path: "/contact-type",
//           children: [
//             {
//               element: <ContactTypeList />,
//             },
//             {
//               path: "add",
//               element: <ContactTypeAdd />,
//             },
//             {
//               path: "edit",
//               element: <ContactTypeEdit />,
//             }
//           ],
//         },
//         {
//           path: "/contact",
//           children: [
//             {
//               element: <ContactList />,
//             },
//             {
//               path: "add",
//               element: <ContactAdd />,
//             },
//             {
//               path: "edit",
//               element: <ContactEdit />,
//             }
//           ],
//         },
//         {
//           path: "/approad",
//           children: [
//             {
//               element: <ApproadList />,
//             },
//             {
//               path: "add",
//               element: <ApproadAdd />,
//             },
//             {
//               path: "edit",
//               element: <ApproadEdit />,
//             }
//           ],
//         },
//         {
//           path: "/estimate-budget",
//           children: [
//             {
//               element: <EstimateBudgetList />,
//             },
//             {
//               path: "add",
//               element: <EstimateBudgetAdd />,
//             },
//             {
//               path: "edit",
//               element: <EstimateBudgetEdit />,
//             }
//           ],
//         },
//         {
//           path: "/service-package",
//           children: [
//             {
//               element: <ServicePackageList />,
//             },
//             {
//               path: "add",
//               element: <ServicePackageAdd />,
//             },
//             {
//               path: "edit",
//               element: <ServicePackageEdit />,
//             }
//           ],
//         },
//         {
//           path: "/timeline",
//           children: [
//             {
//               element: <TimelineList />,
//             },
//             {
//               path: "add",
//               element: <TimelineAdd />,
//             },
//             {
//               path: "edit",
//               element: <TimelineEdit />,
//             }
//           ],
//         },
//         {
//           path: "/hire",
//           children: [
//             {
//               element: <HireList />,
//             },
//             {
//               path: "add",
//               element: <HireAdd />,
//             },
//             {
//               path: "edit",
//               element: <HireEdit />,
//             }
//           ],
//         },
//       ]
//     },
//   ]);