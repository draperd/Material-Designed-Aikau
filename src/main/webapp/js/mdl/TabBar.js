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
 *  NOTE: It looks like dynamic tab creation isn't supported yet: https://github.com/google/material-design-lite/issues/1175
 *
 * 
 * @module alfresco/experimental/mdl/TabBar
 * @extends module:alfresco/experimental/mdl/BaseMdlWidget
 * @author Dave Draper
 * @since 1.0.67
 */
define(["dojo/_base/declare",
        "alfresco/experimental/mdl/BaseMdlWidget", 
        "dojo/text!./templates/TabBar.html",
        "dojo/_base/lang",
        "dojo/dom-construct"], 
        function(declare, BaseMdlWidget, template, lang, domConstruct) {
   
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
      postCreate: function alfresco_experimental_mdl_TabBar__postCreate(){
         // Doesn't create children - tabs added via subscription
         
         this.alfSubscribe("MDL_ADD_TAB", lang.hitch(this, function(payload) {
            // <a href="#scroll-tab-1" class="mdl-layout__tab is-active">Tab 1</a>
            var tab = domConstruct.create("a", {
               href: payload.href,
               className: "mdl-layout__tab" + (payload.isActive ? " is-active" : ""),
               innerHTML: payload.title
            }, this.domNode);
            /* global componentHandler */
            componentHandler.upgradeElement(tab);
            componentHandler.upgradeElement(this.domNode);
         }));
      }
   });
});