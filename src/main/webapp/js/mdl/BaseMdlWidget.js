/**
 * Copyright (C) 2005-2016 Alfresco Software Limited.
 *
 * This file is part of Alfresco
 *
 * Alfresco is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Alfresco is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * 
 *
 * @module alfresco/experimental/mdl/BaseMdlWidget
 * @extends external:dijit/_WidgetBase
 * @mixes external:dojo/_TemplatedMixin
 * @author Dave Draper
 * @since 1.0.67
 */
define(["dojo/_base/declare",
        "dijit/_WidgetBase", 
        "dijit/_TemplatedMixin",
        "dojo/text!./templates/Header.html",
        "alfresco/core/Core",
        "alfresco/core/CoreWidgetProcessing",
        "dojo/_base/array"], 
        function(declare, _WidgetBase, _TemplatedMixin, template, AlfCore, CoreWidgetProcessing, array) {
   
   return declare([_WidgetBase, _TemplatedMixin, AlfCore, CoreWidgetProcessing], {

      /**
       * An array of the CSS files to use with this widget.
       * 
       * @instance cssRequirements {Array}
       * @type {object[]}
       * @default [{cssFile:"./css/material.css"}]
       */
      cssRequirements: [{cssFile:"./css/material.css"}],

      /**
       * The HTML template to use for the widget.
       * @instance
       * @type {String}
       */
      templateString: "<div>No template provided</div>",

      /**
       * [nonAmdDependencies description]
       * @type {Array}
       */
      nonAmdDependencies: ["./material.js"],

      /**
       * Creates any child widgets
       *
       * @instance
       */
      postCreate: function alfresco_experimental_mdl_BaseMdlWidget__postCreate(){
         if (this.widgets)
         {
            this.processWidgets(this.widgets, this.domNode);
         }
      },

      /**
       * Ensure that all child widgets have been upgraded.
       *
       * @instance
       * @param  {object[]} widgets [description]
       */
      allWidgetsProcessed: function alfresco_experimental_mdl_BaseMdlWidget__allWidgetsProcessed(widgets) {
         if (widgets)
         {
            array.forEach(widgets, function(widget) {
               if (widget.domNode)
               {
                  /* global componentHandler */
                  componentHandler.upgradeElement(widget.domNode);
               }
            });
         }
      }
   });
});