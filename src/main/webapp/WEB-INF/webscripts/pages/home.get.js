<import resource="classpath:alfresco/site-webscripts/org/alfresco/aikau/{aikauVersion}/libs/doclib/doclib.lib.js">

var options = {
   useHash: true,
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

// Create the config for the create content menu item and transfer the config to the material button...
var createFolder = generateCreateContentMenuItem(msg.get("create.folder.label"), msg.get("create.folder.title"), "alf-showfolders-icon", "cm:folder", null);
var createFolderButton = {
   name: "mdl/CreateContentFabButton",
   config: createFolder.config
};
createFolderButton.config.icon = "create_new_folder";

model.jsonModel = {
   services: services,
   widgets: [
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
                        }
                     ]
                  }
               },
               {
                  name: "mdl/Drawer",
                  config: {
                     widgets: [
                        getDocLibFilters(options),
                        getDocLibTree(options),
                        getDocLibTags(options),
                        getDocLibCategories(options)
                     ]
                  }
               },
               {
                  name: "mdl/Content",
                  config: {
                     contentAsTabs: false,
                     widgets: [
                        createFolderButton,
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