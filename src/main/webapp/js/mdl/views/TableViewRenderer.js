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
 * @module mdl/views/TableViewRenderer
 * @extends module:alfresco/lists/views/ListRenderer
 * @author Dave Draper
 */
define(["dojo/_base/declare",
        "alfresco/lists/views/ListRenderer",
        "dojo/text!./templates/TableViewRenderer.html",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/dom-construct"], 
        function(declare, ListRenderer, template, lang, array, domConstruct) {
   
   return declare([ListRenderer], {

      /**
       * Overides the inherited template.
       *
       * @instance
       * @type {string}
       */
      templateString: template,

      /**
       * Should be set to an array of items to render as HTML li elements.
       *
       * @instance
       * @type {object[]}
       * @default
       */
      items: null,

      /**
       * 
       * @instance
       */
      renderData: function mdl_views_TableViewRenderer__renderData() {
         array.forEach(this.items, function(item) {
            var row = domConstruct.create("tr", {
               "class": "alfresco-experimental-mdl-views-TableView__renderer__item"
            }, this.itemsNode, "last");
            domConstruct.create("td", {
               "class": "mdl-data-table__cell--non-numeric",
               innerHTML: lang.getObject("displayName", false, item)
            }, row, "last");
            domConstruct.create("td", {
               "class": "mdl-data-table__cell--non-numeric",
               innerHTML: lang.getObject("node.properties.cm:modifier.displayName", false, item)
            }, row, "last");
         }, this);

         /* global componentHandler */
         componentHandler.upgradeElement(this.domNode);
      },

      onViewShown: function mdl_views_TableViewRenderer__onViewShown() {
         this.inherited(arguments);

         /* global componentHandler */
         componentHandler.upgradeElement(this.domNode);
      }

   });
});