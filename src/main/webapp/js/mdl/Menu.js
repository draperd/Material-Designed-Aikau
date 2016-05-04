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
 * @module mdl/Menu
 * @extends module:mdl/BaseMdlWidget
 * @author Dave Draper
 * @since 1.0.67
 */
define(["dojo/_base/declare",
        "mdl/BaseMdlWidget", 
        "dojo/text!./templates/Menu.html",
        "dojo/dom-construct"], 
        function(declare, BaseMdlWidget, template, domConstruct) {
   
   return declare([BaseMdlWidget], {

      /**
       * The HTML template to use for the widget.
       * @instance
       * @type {String}
       */
      templateString: template,

      /**
       * Creates any child widgets
       *
       * @instance
       */
      postCreate: function mdl_Menu__postCreate() {
         var menuNode = domConstruct.create("ul", {
            className: "mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect",
            "for": this.id
         }, this.domNode, "after");
         /* global componentHandler */
         componentHandler.upgradeElement(menuNode);
         if (this.widgets)
         {
            this.processWidgets(this.widgets, menuNode);
         }

      }
   });
});