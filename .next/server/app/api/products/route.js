/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/products/route";
exports.ids = ["app/api/products/route"];
exports.modules = {

/***/ "(rsc)/./app/api/products/route.ts":
/*!***********************************!*\
  !*** ./app/api/products/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nasync function GET(request) {\n    const searchParams = request.nextUrl.searchParams || {};\n    const page = parseInt(searchParams.get('page') || '1');\n    const limit = parseInt(searchParams.get('limit') || '12');\n    const type = searchParams.get('type') || null;\n    const color = searchParams.get('color') || null;\n    const minPrice = searchParams.get('minPrice') || '';\n    const maxPrice = searchParams.get('maxPrice') || '';\n    const search = searchParams.get('search') || '';\n    try {\n        // Build body only with non-null properties\n        const body = {};\n        const _id = searchParams.get('_id');\n        const showOnHomePage = searchParams.get('showOnHomePage');\n        // currently, we ony support below filters\n        if (_id) body._id = _id;\n        if (type) body.type = type;\n        if (color) body.color = color;\n        if (showOnHomePage !== null) body.showOnHomePage = showOnHomePage === 'true';\n        console.log(process.env.BACKEND_URL);\n        console.log(body);\n        const response = await fetch(`${process.env.BACKEND_URL}/getProducts`, {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify(body)\n        });\n        const data = await response.json();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            products: data\n        });\n    } catch (error) {\n        console.error('Error fetching products:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to fetch products'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb2R1Y3RzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXVEO0FBb0JoRCxlQUFlQyxJQUFJQyxPQUFvQjtJQUM1QyxNQUFNQyxlQUFlRCxRQUFRRSxPQUFPLENBQUNELFlBQVksSUFBSSxDQUFDO0lBQ3RELE1BQU1FLE9BQU9DLFNBQVNILGFBQWFJLEdBQUcsQ0FBQyxXQUFXO0lBQ2xELE1BQU1DLFFBQVFGLFNBQVNILGFBQWFJLEdBQUcsQ0FBQyxZQUFZO0lBQ3BELE1BQU1FLE9BQU9OLGFBQWFJLEdBQUcsQ0FBQyxXQUFXO0lBQ3pDLE1BQU1HLFFBQVFQLGFBQWFJLEdBQUcsQ0FBQyxZQUFZO0lBQzNDLE1BQU1JLFdBQVdSLGFBQWFJLEdBQUcsQ0FBQyxlQUFlO0lBQ2pELE1BQU1LLFdBQVdULGFBQWFJLEdBQUcsQ0FBQyxlQUFlO0lBQ2pELE1BQU1NLFNBQVNWLGFBQWFJLEdBQUcsQ0FBQyxhQUFhO0lBRTdDLElBQUk7UUFDRiwyQ0FBMkM7UUFDM0MsTUFBTU8sT0FBNEIsQ0FBQztRQUNuQyxNQUFNQyxNQUFNWixhQUFhSSxHQUFHLENBQUM7UUFDN0IsTUFBTVMsaUJBQWlCYixhQUFhSSxHQUFHLENBQUM7UUFFeEMsMENBQTBDO1FBQzFDLElBQUlRLEtBQUtELEtBQUtDLEdBQUcsR0FBR0E7UUFDcEIsSUFBSU4sTUFBTUssS0FBS0wsSUFBSSxHQUFHQTtRQUN0QixJQUFJQyxPQUFPSSxLQUFLSixLQUFLLEdBQUdBO1FBQ3hCLElBQUlNLG1CQUFtQixNQUFNRixLQUFLRSxjQUFjLEdBQUlBLG1CQUFtQjtRQUV2RUMsUUFBUUMsR0FBRyxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7UUFDbkNKLFFBQVFDLEdBQUcsQ0FBQ0o7UUFFWixNQUFNUSxXQUFXLE1BQU1DLE1BQU0sR0FBR0osUUFBUUMsR0FBRyxDQUFDQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDckVHLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQVgsTUFBTVksS0FBS0MsU0FBUyxDQUFDYjtRQUN2QjtRQUNBLE1BQU1jLE9BQU8sTUFBTU4sU0FBU08sSUFBSTtRQUVoQyxPQUFPN0IscURBQVlBLENBQUM2QixJQUFJLENBQUM7WUFDdkJDLFVBQVVGO1FBQ1o7SUFDRixFQUFFLE9BQU9HLE9BQU87UUFDZGQsUUFBUWMsS0FBSyxDQUFDLDRCQUE0QkE7UUFDMUMsT0FBTy9CLHFEQUFZQSxDQUFDNkIsSUFBSSxDQUN0QjtZQUFFRSxPQUFPO1FBQTJCLEdBQ3BDO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJEOlxcc2Frc2hhbS1wcm9qZWN0c1xcYXBzXFxhcHMtd2Vic2l0ZS1mcm9udGVuZC1haVxcYXBwXFxhcGlcXHByb2R1Y3RzXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5cbmludGVyZmFjZSBQcm9kdWN0IHtcbiAgX2lkOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHZhcmlhbnQ6IHN0cmluZ1xuICBpbWFnZTogc3RyaW5nW11cbiAgcHJpY2U6IHN0cmluZ1xuICB0eXBlOiBzdHJpbmdcbiAgY29sb3I6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGZlYXR1cmVzOiBzdHJpbmdcbiAgdGFibGVEYXRhOiBBcnJheTx7XG4gICAgdGFibGVOYW1lOiBzdHJpbmdcbiAgICBjb2x1bW5zOiBzdHJpbmdbXVxuICAgIHJvd3M6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXVxuICB9PlxuICBzaG93T25Ib21lUGFnZTogYm9vbGVhblxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHJlcXVlc3QubmV4dFVybC5zZWFyY2hQYXJhbXMgfHwge31cbiAgY29uc3QgcGFnZSA9IHBhcnNlSW50KHNlYXJjaFBhcmFtcy5nZXQoJ3BhZ2UnKSB8fCAnMScpXG4gIGNvbnN0IGxpbWl0ID0gcGFyc2VJbnQoc2VhcmNoUGFyYW1zLmdldCgnbGltaXQnKSB8fCAnMTInKVxuICBjb25zdCB0eXBlID0gc2VhcmNoUGFyYW1zLmdldCgndHlwZScpIHx8IG51bGxcbiAgY29uc3QgY29sb3IgPSBzZWFyY2hQYXJhbXMuZ2V0KCdjb2xvcicpIHx8IG51bGxcbiAgY29uc3QgbWluUHJpY2UgPSBzZWFyY2hQYXJhbXMuZ2V0KCdtaW5QcmljZScpIHx8ICcnXG4gIGNvbnN0IG1heFByaWNlID0gc2VhcmNoUGFyYW1zLmdldCgnbWF4UHJpY2UnKSB8fCAnJ1xuICBjb25zdCBzZWFyY2ggPSBzZWFyY2hQYXJhbXMuZ2V0KCdzZWFyY2gnKSB8fCAnJ1xuXG4gIHRyeSB7XG4gICAgLy8gQnVpbGQgYm9keSBvbmx5IHdpdGggbm9uLW51bGwgcHJvcGVydGllc1xuICAgIGNvbnN0IGJvZHk6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcbiAgICBjb25zdCBfaWQgPSBzZWFyY2hQYXJhbXMuZ2V0KCdfaWQnKTtcbiAgICBjb25zdCBzaG93T25Ib21lUGFnZSA9IHNlYXJjaFBhcmFtcy5nZXQoJ3Nob3dPbkhvbWVQYWdlJyk7XG5cbiAgICAvLyBjdXJyZW50bHksIHdlIG9ueSBzdXBwb3J0IGJlbG93IGZpbHRlcnNcbiAgICBpZiAoX2lkKSBib2R5Ll9pZCA9IF9pZDtcbiAgICBpZiAodHlwZSkgYm9keS50eXBlID0gdHlwZTtcbiAgICBpZiAoY29sb3IpIGJvZHkuY29sb3IgPSBjb2xvcjtcbiAgICBpZiAoc2hvd09uSG9tZVBhZ2UgIT09IG51bGwpIGJvZHkuc2hvd09uSG9tZVBhZ2UgPSAoc2hvd09uSG9tZVBhZ2UgPT09ICd0cnVlJyk7XG5cbiAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5CQUNLRU5EX1VSTClcbiAgICBjb25zb2xlLmxvZyhib2R5KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L2dldFByb2R1Y3RzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxuICAgIH0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICBwcm9kdWN0czogZGF0YVxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdHM6JywgZXJyb3IpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBwcm9kdWN0cycgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgIClcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIkdFVCIsInJlcXVlc3QiLCJzZWFyY2hQYXJhbXMiLCJuZXh0VXJsIiwicGFnZSIsInBhcnNlSW50IiwiZ2V0IiwibGltaXQiLCJ0eXBlIiwiY29sb3IiLCJtaW5QcmljZSIsIm1heFByaWNlIiwic2VhcmNoIiwiYm9keSIsIl9pZCIsInNob3dPbkhvbWVQYWdlIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJCQUNLRU5EX1VSTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwicHJvZHVjdHMiLCJlcnJvciIsInN0YXR1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/products/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.ts&appDir=D%3A%5Csaksham-projects%5Caps%5Caps-website-frontend-ai%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Csaksham-projects%5Caps%5Caps-website-frontend-ai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.ts&appDir=D%3A%5Csaksham-projects%5Caps%5Caps-website-frontend-ai%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Csaksham-projects%5Caps%5Caps-website-frontend-ai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_saksham_projects_aps_aps_website_frontend_ai_app_api_products_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/products/route.ts */ \"(rsc)/./app/api/products/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/products/route\",\n        pathname: \"/api/products\",\n        filename: \"route\",\n        bundlePath: \"app/api/products/route\"\n    },\n    resolvedPagePath: \"D:\\\\saksham-projects\\\\aps\\\\aps-website-frontend-ai\\\\app\\\\api\\\\products\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_saksham_projects_aps_aps_website_frontend_ai_app_api_products_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcm9kdWN0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcHJvZHVjdHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwcm9kdWN0cyUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDc2Frc2hhbS1wcm9qZWN0cyU1Q2FwcyU1Q2Fwcy13ZWJzaXRlLWZyb250ZW5kLWFpJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDc2Frc2hhbS1wcm9qZWN0cyU1Q2FwcyU1Q2Fwcy13ZWJzaXRlLWZyb250ZW5kLWFpJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNnQztBQUM3RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcc2Frc2hhbS1wcm9qZWN0c1xcXFxhcHNcXFxcYXBzLXdlYnNpdGUtZnJvbnRlbmQtYWlcXFxcYXBwXFxcXGFwaVxcXFxwcm9kdWN0c1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcHJvZHVjdHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wcm9kdWN0c1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcHJvZHVjdHMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxzYWtzaGFtLXByb2plY3RzXFxcXGFwc1xcXFxhcHMtd2Vic2l0ZS1mcm9udGVuZC1haVxcXFxhcHBcXFxcYXBpXFxcXHByb2R1Y3RzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.ts&appDir=D%3A%5Csaksham-projects%5Caps%5Caps-website-frontend-ai%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Csaksham-projects%5Caps%5Caps-website-frontend-ai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.ts&appDir=D%3A%5Csaksham-projects%5Caps%5Caps-website-frontend-ai%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Csaksham-projects%5Caps%5Caps-website-frontend-ai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();