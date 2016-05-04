<import resource="classpath:alfresco/site-webscripts/org/alfresco/aikau/{aikauVersion}/libs/doclib/doclib.lib.js">

var options = {
   useHash: false,
   siteId: "swsdp", 
   containerId: "documentlibrary", 
   rootNode: null, 
   rootLabel: "Documents",
   getUserPreferences: false,
   docLibPreferences: {
      hideBreadcrumbTrail: false
   }
};

var pageServices = [
   {
      name: "alfresco/services/LoggingService",
      config: {
         loggingPreferences: {
            enabled: true,
            all: true
         }
      }
   },
   {
      name: "alfresco/services/DocumentService",
      config: {
         rawData: true
      }
   },
   "alfresco/services/LogoutService",
   "alfresco/services/PreferenceService"
];
var docLibServices = getDocumentLibraryServices();
var services = pageServices.concat(docLibServices);

model.jsonModel = {
   services: services,
   widgets: [
      // NOTE: Provided as an example only, the tutorial files are not in the source, they can be re-added
      {
         name: "alfresco/experimental/mdl/Layout",
         config: {
            widgets: [
               {
                  name: "alfresco/experimental/mdl/Header",
                  config: {
                     widgets: [
                        {
                           name: "alfresco/experimental/mdl/HeaderRow",
                           config: {
                              widgets: [
                                 {
                                    name: "alfresco/experimental/mdl/Title",
                                    config: {
                                       title: "Material Designed Aikau"
                                    }
                                 },
                                 {
                                    name: "alfresco/experimental/mdl/Spacer"
                                 },
                                 {
                                    name: "alfresco/experimental/mdl/Menu",
                                    config: {
                                       widgets: [
                                          {
                                             name: "alfresco/experimental/mdl/MenuItem",
                                             config: {
                                                title: "Help"
                                             }
                                          },
                                          {
                                             name: "alfresco/experimental/mdl/MenuItem",
                                             config: {
                                                title: "Logout",
                                                publishTopic: "ALF_DOLOGOUT"
                                             }
                                          }
                                       ]
                                    }
                                 }
                              ]
                           }
                        },
                        // {
                        //    name: "alfresco/experimental/mdl/TabBar"
                        // }
                        // {
                        //    name: "alfresco/experimental/mdl/HeaderRow",
                        //    config: {
                        //       widgets: [
                        //          {
                        //             name: "alfresco/experimental/mdl/Spacer"
                        //          },
                        //          {
                        //             name: "alfresco/experimental/mdl/Navigation"
                        //          }
                        //       ]
                        //    }
                        // }
                        
                     ]
                  }
               },
               {
                  name: "alfresco/experimental/mdl/Drawer",
                  config: {
                     widgets: [
                        // {
                        //    name: "alfresco/experimental/mdl/Title",
                        //    config: {
                        //       title: "Options"
                        //    }
                        // },
                        getDocLibFilters(options),
                        getDocLibTree(options),
                        getDocLibTags(options),
                        getDocLibCategories(options)
                        // ,
                        // {
                        //    name: "alfresco/experimental/mdl/Navigation"
                        // }
                     ]
                  }
               },
               {
                  name: "alfresco/experimental/mdl/Content",
                  config: {
                     contentAsTabs: false,
                     widgets: [
                        // {
                        //    name: "alfresco/lists/Paginator",
                        //    config: {
                        //       documentsPerPage: 10,
                        //       pageSizes: [5,10,20],
                        //       visibilityConfig: {
                        //          initialValue: false
                        //       }
                        //    }
                        // },
                        // {
                        //    name: "alfresco/experimental/mdl/FabButton",
                        //    config: {
                        //       icon: "skip_previous",
                        //       publishTopic: "ALF_PAGE_BACK"
                        //    }
                        // },
                        // {
                        //    name: "alfresco/experimental/mdl/FabButton",
                        //    config: {
                        //       icon: "skip_next",
                        //       publishTopic: "ALF_PAGE_FORWARD"
                        //    }
                        // },
                        getDocLibBreadcrumbTrail(options),
                        getDocLibList(options)
                     ]
                  }
               }
            ]
         }
      }
   ]
};