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
 * @module alfresco/experimental/mdl/Content
 * @extends module:alfresco/experimental/mdl/BaseMdlWidget
 * @author Dave Draper
 * @since 1.0.67
 */
define(["dojo/_base/declare",
        "alfresco/experimental/mdl/BaseMdlWidget", 
        "dojo/text!./templates/Content.html",
        "dojo/_base/array",
        "dojo/dom-construct",
        "dojo/dom-class"], 
        function(declare, BaseMdlWidget, template, array, domConstruct, domClass) {
   
   return declare([BaseMdlWidget], {

      /**
       * The HTML template to use for the widget.
       * @instance
       * @type {String}
       */
      templateString: template,

      /**
       * Indicates whether or not the each child widget should be treated as a tab.
       * 
       * @instance
       * @type {boolean}
       * @default
       */
      contentAsTabs: false,

      /**
       * Creates a new DOM node for a widget to use. The DOM node contains a child <div> element
       * that the widget will be attached to and an outer <div> element that additional CSS classes
       * can be applied to.
       *
       * @instance
       * @param {object} widget The widget definition to create the DOM node for
       * @param {element} rootNode The DOM node to create the new DOM node as a child of
       * @param {string} rootClassName A string containing one or more space separated CSS classes to set on the DOM node
       */
      createWidgetDomNode: function alfresco_experimental_mdl_Content__createWidgetDomNode(widget, rootNode) {
         if (!this.contentAsTabs)
         {
            return this.inherited(arguments);
         }
         else
         {
            var sectionNode = domConstruct.create("section", {
               id: widget.id + "_TAB_ID",
               className: "mdl-layout__tab-panel"
            }, rootNode);
            var contentNode = domConstruct.create("div", { 
               className: "page-content"
            }, sectionNode);
            return domConstruct.create("div", {}, contentNode);
         }
      },

      /**
       * Creates any child widgets
       *
       * @instance
       */
      postCreate: function alfresco_experimental_mdl_Content__postCreate() {
         var targetNode = this.domNode;
         if (!this.contentAsTabs)
         {
            // <div class="page-content" data-dojo-attach-point="contentNode"></div>
            targetNode = domConstruct.create("div", {
               className: "page-content"
            }, this.domNode);
         }
         if (this.widgets)
         {
            this.processWidgets(this.widgets, targetNode);
         }
      },

      /**
       * Ensure that all child widgets have been upgraded.
       *
       * @instance
       * @param  {object[]} widgets [description]
       */
      allWidgetsProcessed: function alfresco_experimental_mdl_Content__allWidgetsProcessed(widgets) {
         if (widgets)
         {
            array.forEach(widgets, function(widget, index) {
               if (index === 0)
               {
                  domClass.add(widget.domNode, "is-active");
               }
               this.alfPublish("MDL_ADD_TAB", {
                  href: "#" + widget.id + "_TAB_ID",
                  title: widget.title || "No title",
                  isActive: index === 0
               });
            }, this);
         }

         this.inherited(arguments);
         
      }
   });
});