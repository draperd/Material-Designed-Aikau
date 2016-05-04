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
         name: "mdl/Layout",
         config: {
            widgets: [
               {
                  name: "mdl/Header",
                  config: {
                     widgets: [
                        {
                           name: "mdl/HeaderRow",
                           config: {
                              widgets: [
                                 {
                                    name: "mdl/Title",
                                    config: {
                                       title: "Material Designed Aikau"
                                    }
                                 },
                                 {
                                    name: "mdl/Spacer"
                                 },
                                 {
                                    name: "mdl/Menu",
                                    config: {
                                       widgets: [
                                          {
                                             name: "mdl/MenuItem",
                                             config: {
                                                title: "Help"
                                             }
                                          },
                                          {
                                             name: "mdl/MenuItem",
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
                        //    name: "mdl/TabBar"
                        // }
                        // {
                        //    name: "mdl/HeaderRow",
                        //    config: {
                        //       widgets: [
                        //          {
                        //             name: "mdl/Spacer"
                        //          },
                        //          {
                        //             name: "mdl/Navigation"
                        //          }
                        //       ]
                        //    }
                        // }
                        
                     ]
                  }
               },
               {
                  name: "mdl/Drawer",
                  config: {
                     widgets: [
                        // {
                        //    name: "mdl/Title",
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
                        //    name: "mdl/Navigation"
                        // }
                     ]
                  }
               },
               {
                  name: "mdl/Content",
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
                        //    name: "mdl/FabButton",
                        //    config: {
                        //       icon: "skip_previous",
                        //       publishTopic: "ALF_PAGE_BACK"
                        //    }
                        // },
                        // {
                        //    name: "mdl/FabButton",
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